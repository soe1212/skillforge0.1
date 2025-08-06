import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Clock, Users, Award } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const FeaturedCourses = () => {
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();
  const { user } = useAuth();

  const courses = [
    {
      id: 1,
      title: 'Complete Python Developer Bootcamp',
      instructor: 'Dr. Sarah Johnson',
      image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      students: 12543,
      duration: '42 hours',
      price: 2999,
      originalPrice: 5999,
      bestseller: true,
      category: 'Development'
    },
    {
      id: 2,
      title: 'UI/UX Design Masterclass',
      instructor: 'Mike Chen',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      students: 8742,
      duration: '28 hours',
      price: 2499,
      originalPrice: 4999,
      bestseller: true,
      category: 'Design'
    },
    {
      id: 3,
      title: 'Digital Marketing Strategy',
      instructor: 'Emma Wilson',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      students: 6234,
      duration: '35 hours',
      price: 1999,
      originalPrice: 3999,
      bestseller: false,
      category: 'Marketing'
    },
    {
      id: 4,
      title: 'Machine Learning Fundamentals',
      instructor: 'Prof. David Kumar',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      students: 4521,
      duration: '56 hours',
      price: 3499,
      originalPrice: 6999,
      bestseller: true,
      category: 'AI & ML'
    }
  ];

  const handleEnrollClick = (course: any) => {
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

  return (
    <section id="featured-courses" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Top Trending Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn from industry experts and advance your career with our most popular courses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className="relative overflow-hidden cursor-pointer"
                onClick={() => navigate(`/course/${course.id}`)}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {course.bestseller && (
                  <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Bestseller
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1">
                  <span className="text-white text-xs font-medium">{course.category}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{course.instructor}</p>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-900">₹{course.price}</span>
                    <span className="text-sm text-gray-500 line-through">₹{course.originalPrice}</span>
                  </div>
                  <button
                    onClick={() => handleEnrollClick(course)}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                  >
                    {isInCart(course.id) ? 'In Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;