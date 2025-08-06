import React, { useState } from 'react';
import { Star, Clock, Users, Heart, BookOpen, Play, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    instructor: string;
    image: string;
    rating: number;
    students: number;
    duration: string;
    price: number;
    originalPrice: number;
    bestseller: boolean;
    category: string;
    level?: string;
    description?: string;
  };
  variant?: 'default' | 'compact' | 'detailed';
}

const CourseCard: React.FC<CourseCardProps> = ({ course, variant = 'default' }) => {
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();
  const { user } = useAuth();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleEnrollClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) {
      alert('Please sign in to enroll in courses');
      return;
    }
    
    if (!isInCart(course.id)) {
      addToCart(course);
      alert('Course added to cart!');
    } else {
      alert('Course already in cart!');
    }
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const handleCourseClick = () => {
    navigate(`/course/${course.id}`);
  };

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer" onClick={handleCourseClick}>
        <div className="flex space-x-4">
          <img src={course.image} alt={course.title} className="w-16 h-16 object-cover rounded-lg" />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">{course.title}</h3>
            <p className="text-gray-600 text-xs">{course.instructor}</p>
            <div className="flex items-center mt-1">
              <Star className="w-3 h-3 text-yellow-500 mr-1" />
              <span className="text-xs text-gray-600">{course.rating}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-gray-900">₹{course.price}</div>
            <div className="text-xs text-gray-500 line-through">₹{course.originalPrice}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer">
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
        onClick={handleCourseClick}
      >
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay on hover */}
        {showPreview && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
              <Play className="w-4 h-4 mr-2" />
              Preview Course
            </button>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {course.bestseller && (
            <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Bestseller
            </span>
          )}
          {course.level && (
            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              {course.level}
            </span>
          )}
        </div>

        {/* Category badge */}
        <div className="absolute top-3 right-3 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1">
          <span className="text-white text-xs font-medium">{course.category}</span>
        </div>

        {/* Wishlist button */}
        <button
          onClick={handleWishlistClick}
          className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
        </button>
      </div>

      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
            {course.title}
          </h3>
          <p className="text-gray-600 text-sm">{course.instructor}</p>
        </div>

        {variant === 'detailed' && course.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
        )}

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            <span className="font-medium">{course.rating}</span>
            <span className="ml-1">({course.students.toLocaleString()})</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="w-4 h-4 mr-1" />
            <span>All levels</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">₹{course.price}</span>
            <span className="text-sm text-gray-500 line-through">₹{course.originalPrice}</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
              {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% off
            </span>
          </div>
        </div>

        <div className="mt-4 flex space-x-2">
          <button
            onClick={handleEnrollClick}
            className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
          >
            {isInCart(course.id) ? 'In Cart' : 'Add to Cart'}
          </button>
          <button
            onClick={handleCourseClick}
            className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;