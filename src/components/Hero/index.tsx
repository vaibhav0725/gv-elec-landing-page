import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Electrical Work" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-20">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              25+ Years of Excellence
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Powering Your
            <span className="text-orange-400 block">Future</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Leading electrical contractor specializing in industrial automation, power distribution, 
            and comprehensive electrical solutions. Trusted by 500+ clients across India.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
              <span className="text-white font-medium text-sm md:text-base">ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
              <span className="text-white font-medium text-sm md:text-base">24/7 Emergency Service</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
              <span className="text-white font-medium text-sm md:text-base">500+ Projects Completed</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
            >
              <span>Our Services</span>
              <ArrowRight size={20} />
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-6 md:px-8 py-4 rounded-lg font-semibold transition-colors text-center"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;