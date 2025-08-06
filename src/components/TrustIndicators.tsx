import React from 'react';
import { Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Shield,
      title: 'Secure Learning',
      description: 'Your data is protected with enterprise-grade security',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: Award,
      title: 'Certified Courses',
      description: 'Industry-recognized certificates upon completion',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals and thought leaders',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Clock,
      title: 'Lifetime Access',
      description: 'Access your courses anytime, anywhere, forever',
      color: 'text-orange-600 bg-orange-100'
    }
  ];

  const stats = [
    { value: '4.8/5', label: 'Average Rating', icon: Star },
    { value: '95%', label: 'Completion Rate', icon: CheckCircle },
    { value: '24/7', label: 'Support Available', icon: Clock },
    { value: '30-Day', label: 'Money Back Guarantee', icon: Shield }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Indicators */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {indicators.map((indicator, index) => {
            const IconComponent = indicator.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className={`w-12 h-12 rounded-xl ${indicator.color} flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{indicator.title}</h3>
                <p className="text-gray-600 text-sm">{indicator.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <IconComponent className="w-6 h-6 text-purple-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;