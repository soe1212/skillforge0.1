import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-bounce animation-delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-green-400 rounded-full opacity-20 animate-bounce animation-delay-2000"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Sparkles className="w-16 h-16 mx-auto text-yellow-400 mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Start Learning?
          </h2>
          <p className="text-xl lg:text-2xl text-purple-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            Join over 1 million students worldwide and transform your career with expert-led courses. 
            Start your journey today — it's completely free!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="group bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 flex items-center shadow-2xl">
            Join Skill Forge — It's Free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200">
            Browse Courses
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="text-white">
            <div className="text-3xl font-bold mb-2">30-Day</div>
            <div className="text-purple-200">Money-back guarantee</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-purple-200">Learning support</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold mb-2">Lifetime</div>
            <div className="text-purple-200">Course access</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;