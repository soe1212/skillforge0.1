import React from 'react';
import { Smartphone, Download, QrCode, Star } from 'lucide-react';

const MobileApp = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-12">
            <div className="text-white">
              <div className="flex items-center mb-6">
                <Smartphone className="w-8 h-8 mr-3" />
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Learn on the Go
                </h2>
              </div>
              
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Download our mobile app and access your courses anywhere, anytime. 
                Learn offline, track progress, and never miss a lesson.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <Download className="w-6 h-6 mr-3 text-purple-200" />
                  <div>
                    <div className="font-semibold">Offline Learning</div>
                    <div className="text-purple-200 text-sm">Download and learn anywhere</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 mr-3 text-purple-200" />
                  <div>
                    <div className="font-semibold">4.8 Rating</div>
                    <div className="text-purple-200 text-sm">Loved by millions</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <img 
                    src="data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='white' d='M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z'/%3E%3C/svg%3E" 
                    alt="Apple" 
                    className="w-6 h-6 mr-2" 
                  />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </button>
                
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <img 
                    src="data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='white' d='M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.699 12l1.999-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z'/%3E%3C/svg%3E" 
                    alt="Google Play" 
                    className="w-6 h-6 mr-2" 
                  />
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <QrCode className="w-32 h-32 mx-auto mb-4 text-white" />
                <h3 className="text-white text-xl font-semibold mb-2">Scan to Download</h3>
                <p className="text-purple-200">Get instant access to our mobile app</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;