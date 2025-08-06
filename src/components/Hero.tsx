import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Users, BookOpen, Star } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Hero = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleExploreClick = () => {
    // Scroll to courses section
    const coursesSection = document.getElementById('featured-courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJoinClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      // Trigger signup modal - we'll need to pass this up to parent or use context
      alert('Please sign up to join for free!');
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Unlock Your{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Potential
              </span>{' '}
              with Expert-Led Courses
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Join millions of learners and upskill your future with our comprehensive online learning platform
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleExploreClick}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                Explore Courses
              </button>
              <button
                onClick={handleJoinClick}
                className="flex items-center justify-center border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200"
              >
                <Play className="mr-2 w-5 h-5" />
                {user ? 'Go to Dashboard' : 'Join for Free'}
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="flex items-center justify-center lg:justify-start text-purple-600 mb-2">
                  <BookOpen className="w-6 h-6 mr-2" />
                  <span className="text-2xl font-bold">10,000+</span>
                </div>
                <p className="text-gray-600">Courses</p>
              </div>
              <div>
                <div className="flex items-center justify-center lg:justify-start text-blue-600 mb-2">
                  <Users className="w-6 h-6 mr-2" />
                  <span className="text-2xl font-bold">1M+</span>
                </div>
                <p className="text-gray-600">Students</p>
              </div>
              <div>
                <div className="flex items-center justify-center lg:justify-start text-yellow-500 mb-2">
                  <Star className="w-6 h-6 mr-2" />
                  <span className="text-2xl font-bold">4.8</span>
                </div>
                <p className="text-gray-600">Rating</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=500" 
                  alt="Learning illustration" 
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">Start Learning Today</h3>
                  <p className="text-gray-600 mt-2">Join thousands of successful learners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;