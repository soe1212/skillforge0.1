import React, { useState } from 'react';
import { BookOpen, Award, Clock, TrendingUp, Play, Download, Star } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserDashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'courses' | 'certificates' | 'progress'>('courses');

  // Mock data - in real app, this would come from API
  const enrolledCourses = [
    {
      id: '1',
      title: 'Complete Python Developer Bootcamp',
      instructor: 'Dr. Sarah Johnson',
      image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=400',
      progress: 75,
      totalLessons: 45,
      completedLessons: 34,
      lastAccessed: '2 hours ago',
      rating: 4.8
    },
    {
      id: '2',
      title: 'UI/UX Design Masterclass',
      instructor: 'Mike Chen',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      progress: 45,
      totalLessons: 32,
      completedLessons: 14,
      lastAccessed: '1 day ago',
      rating: 4.9
    }
  ];

  const certificates = [
    {
      id: '1',
      courseName: 'Complete Python Developer Bootcamp',
      issueDate: '2024-01-15',
      certificateUrl: '#'
    }
  ];

  const stats = {
    totalCourses: enrolledCourses.length,
    completedCourses: 1,
    totalHours: 67,
    certificates: certificates.length
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please sign in to view your dashboard</h2>
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user.name}!</h1>
          <p className="text-gray-600">Continue your learning journey</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-xl">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">{stats.totalCourses}</p>
                <p className="text-gray-600 text-sm">Enrolled Courses</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-xl">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">{stats.completedCourses}</p>
                <p className="text-gray-600 text-sm">Completed</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">{stats.totalHours}</p>
                <p className="text-gray-600 text-sm">Hours Learned</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center">
              <div className="bg-orange-100 p-3 rounded-xl">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">{stats.certificates}</p>
                <p className="text-gray-600 text-sm">Certificates</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { key: 'courses', label: 'My Courses', icon: BookOpen },
                { key: 'certificates', label: 'Certificates', icon: Award },
                { key: 'progress', label: 'Progress', icon: TrendingUp }
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as any)}
                  className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === key
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'courses' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900">Continue Learning</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {enrolledCourses.map((course) => (
                    <div key={course.id} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start space-x-4">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">{course.instructor}</p>
                          <div className="flex items-center mb-3">
                            <Star className="w-4 h-4 text-yellow-500 mr-1" />
                            <span className="text-sm text-gray-600">{course.rating}</span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="mb-3">
                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                              <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                              <span>{course.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          </div>
                          
                          <p className="text-gray-500 text-xs mb-4">Last accessed {course.lastAccessed}</p>
                          
                          <div className="flex space-x-2">
                            <button
                              onClick={() => navigate(`/course/${course.id}/lesson/1`)}
                              className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm"
                            >
                              <Play className="w-4 h-4 mr-1" />
                              Continue
                            </button>
                            <button
                              onClick={() => navigate(`/course/${course.id}`)}
                              className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                            >
                              View Course
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'certificates' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900">Your Certificates</h2>
                {certificates.length === 0 ? (
                  <div className="text-center py-12">
                    <Award className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No certificates yet</h3>
                    <p className="text-gray-600">Complete courses to earn certificates</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert) => (
                      <div key={cert.id} className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-2xl p-6">
                        <div className="text-center">
                          <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                          <h3 className="font-semibold text-gray-900 mb-2">{cert.courseName}</h3>
                          <p className="text-gray-600 text-sm mb-4">Issued on {new Date(cert.issueDate).toLocaleDateString()}</p>
                          <button className="flex items-center justify-center w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'progress' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900">Learning Progress</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-6 text-white">
                    <h3 className="text-lg font-semibold mb-4">This Week</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Hours Learned</span>
                        <span className="font-bold">8.5h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Lessons Completed</span>
                        <span className="font-bold">12</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Streak</span>
                        <span className="font-bold">5 days</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Goals</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Weekly Goal: 10 hours</span>
                          <span>8.5/10h</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Monthly Goal: Complete 2 courses</span>
                          <span>1/2</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;