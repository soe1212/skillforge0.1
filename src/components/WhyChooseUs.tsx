import React from 'react';
import { Clock, Award, Users, Infinity } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Infinity,
      title: 'Lifetime Access',
      description: 'Learn at your own pace with unlimited access to course materials, forever.',
      color: 'bg-purple-500'
    },
    {
      icon: Clock,
      title: 'Learn at Your Pace',
      description: 'Flexible learning schedules that fit your lifestyle and commitments.',
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with real-world experience and expertise.',
      color: 'bg-green-500'
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Earn recognized certificates to showcase your skills and advance your career.',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Skill Forge?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our comprehensive learning platform designed for success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`${feature.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">95%</div>
              <div className="text-purple-100">Course Completion Rate</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-100">Expert Instructors</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-purple-100">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">24/7</div>
              <div className="text-purple-100">Learning Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;