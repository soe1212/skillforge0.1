import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Clock, Users, Award, Play, Download, Heart, Share2, ChevronDown, ChevronUp } from 'lucide-react';
import { Course } from '../../hooks/useSearch';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';

// Mock course data - in real app, this would come from API
const mockCourseDetails: Record<string, Course & {
  description: string;
  learningOutcomes: string[];
  curriculum: Array<{
    title: string;
    lessons: Array<{ title: string; duration: string; preview?: boolean }>;
  }>;
  requirements: string[];
  reviews: Array<{
    id: string;
    user: string;
    avatar: string;
    rating: number;
    comment: string;
    date: string;
  }>;
}> = {
  '1': {
    id: 1,
    title: 'Complete Python Developer Bootcamp',
    instructor: 'Dr. Sarah Johnson',
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    students: 12543,
    duration: '42 hours',
    price: 2999,
    originalPrice: 5999,
    bestseller: true,
    category: 'Development',
    description: 'Master Python programming from basics to advanced concepts. This comprehensive bootcamp covers everything you need to become a professional Python developer, including web development, data analysis, automation, and more.',
    learningOutcomes: [
      'Build real-world Python applications',
      'Understand object-oriented programming',
      'Work with databases and APIs',
      'Create web applications with Flask/Django',
      'Automate tasks with Python scripts',
      'Analyze data with pandas and numpy'
    ],
    curriculum: [
      {
        title: 'Python Fundamentals',
        lessons: [
          { title: 'Introduction to Python', duration: '15:30', preview: true },
          { title: 'Variables and Data Types', duration: '22:45' },
          { title: 'Control Structures', duration: '18:20' },
          { title: 'Functions and Modules', duration: '25:10' }
        ]
      },
      {
        title: 'Object-Oriented Programming',
        lessons: [
          { title: 'Classes and Objects', duration: '20:15' },
          { title: 'Inheritance and Polymorphism', duration: '18:30' },
          { title: 'Advanced OOP Concepts', duration: '22:45' }
        ]
      },
      {
        title: 'Web Development',
        lessons: [
          { title: 'Flask Basics', duration: '25:20' },
          { title: 'Building REST APIs', duration: '30:15' },
          { title: 'Database Integration', duration: '28:40' }
        ]
      }
    ],
    requirements: [
      'Basic computer skills',
      'No prior programming experience required',
      'Computer with internet connection',
      'Willingness to learn and practice'
    ],
    reviews: [
      {
        id: '1',
        user: 'Rahul Sharma',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
        rating: 5,
        comment: 'Excellent course! Dr. Johnson explains complex concepts in a very simple way. Highly recommended for beginners.',
        date: '2 weeks ago'
      },
      {
        id: '2',
        user: 'Priya Patel',
        avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100',
        rating: 5,
        comment: 'This course helped me land my first developer job. The projects are practical and industry-relevant.',
        date: '1 month ago'
      }
    ]
  }
};

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();
  const { user } = useAuth();
  const [expandedSections, setExpandedSections] = useState<number[]>([0]);

  const course = id ? mockCourseDetails[id] : null;

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const toggleSection = (index: number) => {
    setExpandedSections(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleEnroll = () => {
    if (!user) {
      alert('Please sign in to enroll in courses');
      return;
    }
    
    if (!isInCart(course.id)) {
      addToCart(course);
    }
    
    alert('Course added to cart!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {course.bestseller ? 'Bestseller' : course.category}
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-gray-300 mb-6">{course.description}</p>
              
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-gray-300 ml-1">({course.students.toLocaleString()} students)</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-1" />
                  <span>{course.duration}</span>
                </div>
              </div>
              
              <p className="text-gray-300">Created by <span className="text-white font-semibold">{course.instructor}</span></p>
            </div>
            
            {/* Course Preview Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-xl sticky top-24">
                <div className="relative mb-6">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <button className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg hover:bg-black/40 transition-colors">
                    <Play className="w-12 h-12 text-white" />
                  </button>
                </div>
                
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">₹{course.price}</span>
                    <span className="text-lg text-gray-500 line-through">₹{course.originalPrice}</span>
                  </div>
                  <p className="text-green-600 font-semibold">50% off</p>
                </div>
                
                <div className="space-y-3">
                  <button
                    onClick={handleEnroll}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                  >
                    {isInCart(course.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Buy Now
                  </button>
                </div>
                
                <div className="flex justify-center space-x-4 mt-6">
                  <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-blue-500 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* What you'll learn */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What you'll learn</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {course.learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start">
                    <Award className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Curriculum */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
              <div className="space-y-4">
                {course.curriculum.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => toggleSection(sectionIndex)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div>
                        <h3 className="font-semibold text-gray-900">{section.title}</h3>
                        <p className="text-gray-600 text-sm">{section.lessons.length} lessons</p>
                      </div>
                      {expandedSections.includes(sectionIndex) ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                    
                    {expandedSections.includes(sectionIndex) && (
                      <div className="border-t border-gray-200">
                        {section.lessons.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="flex items-center justify-between p-4 hover:bg-gray-50">
                            <div className="flex items-center">
                              <Play className="w-4 h-4 text-gray-400 mr-3" />
                              <span className="text-gray-700">{lesson.title}</span>
                              {lesson.preview && (
                                <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                                  Preview
                                </span>
                              )}
                            </div>
                            <span className="text-gray-500 text-sm">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
              <ul className="space-y-3">
                {course.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Reviews</h2>
              <div className="space-y-6">
                {course.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex items-start space-x-4">
                      <img
                        src={review.avatar}
                        alt={review.user}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-gray-900">{review.user}</h4>
                          <div className="flex items-center">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                            ))}
                          </div>
                          <span className="text-gray-500 text-sm">{review.date}</span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Features</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-700">{course.duration} on-demand video</span>
                </div>
                <div className="flex items-center">
                  <Download className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-700">Downloadable resources</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-700">Certificate of completion</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-700">Lifetime access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;