import React from 'react';
import { Code, Briefcase, Palette, TrendingUp, Camera, Cpu, Music, Heart } from 'lucide-react';

const Categories = () => {
  const categories = [
    { icon: Code, name: 'Development', courses: '1,200+', color: 'bg-blue-500' },
    { icon: Briefcase, name: 'Business', courses: '800+', color: 'bg-green-500' },
    { icon: Palette, name: 'Design', courses: '650+', color: 'bg-pink-500' },
    { icon: TrendingUp, name: 'Marketing', courses: '450+', color: 'bg-purple-500' },
    { icon: Camera, name: 'Photography', courses: '320+', color: 'bg-yellow-500' },
    { icon: Cpu, name: 'AI & ML', courses: '280+', color: 'bg-red-500' },
    { icon: Music, name: 'Music', courses: '200+', color: 'bg-indigo-500' },
    { icon: Heart, name: 'Health', courses: '150+', color: 'bg-teal-500' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore Popular Topics
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover courses across various domains and kickstart your learning journey
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className={`${category.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.courses} courses</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;