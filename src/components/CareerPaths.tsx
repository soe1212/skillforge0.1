import React from 'react';
import { Code, BarChart3, Palette, Shield, Smartphone, Globe } from 'lucide-react';

const CareerPaths = () => {
  const paths = [
    {
      icon: Code,
      title: 'Full-Stack Developer',
      description: 'Master both frontend and backend development',
      courses: 12,
      duration: '6-8 months',
      level: 'Beginner to Advanced',
      skills: ['React', 'Node.js', 'Database', 'DevOps'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Data Scientist',
      description: 'Analyze data and build machine learning models',
      courses: 15,
      duration: '8-10 months',
      level: 'Intermediate to Advanced',
      skills: ['Python', 'Statistics', 'ML', 'Visualization'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Palette,
      title: 'UX Designer',
      description: 'Create intuitive and beautiful user experiences',
      courses: 10,
      duration: '4-6 months',
      level: 'Beginner to Intermediate',
      skills: ['Figma', 'Research', 'Prototyping', 'Testing'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Expert',
      description: 'Protect systems and networks from digital attacks',
      courses: 14,
      duration: '7-9 months',
      level: 'Intermediate to Advanced',
      skills: ['Network Security', 'Ethical Hacking', 'Risk Assessment'],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Developer',
      description: 'Build native and cross-platform mobile applications',
      courses: 11,
      duration: '5-7 months',
      level: 'Beginner to Advanced',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Globe,
      title: 'Cloud Architect',
      description: 'Design and manage cloud infrastructure solutions',
      courses: 13,
      duration: '6-8 months',
      level: 'Intermediate to Advanced',
      skills: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Start Your Learning Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose a structured career path and get guided learning recommendations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paths.map((path, index) => {
            const IconComponent = path.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${path.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {path.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {path.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Courses:</span>
                    <span className="font-medium text-gray-900">{path.courses}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium text-gray-900">{path.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Level:</span>
                    <span className="font-medium text-gray-900">{path.level}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {path.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className={`w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${path.color} hover:shadow-lg transition-all duration-200`}>
                  Start Learning Path
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareerPaths;