import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: <Users size={32} />, number: '500+', label: 'Happy Clients' },
    { icon: <Clock size={32} />, number: '25+', label: 'Years Experience' },
    { icon: <Award size={32} />, number: '1000+', label: 'Projects Completed' },
    { icon: <Shield size={32} />, number: '100%', label: 'Safety Record' },
  ];

  return (
    <div className="pt-24 md:pt-32">
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="mb-6">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">About GV Electricals</span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
                  Leading Electrical Solutions Provider
                </h1>
                <div className="w-20 h-1 bg-orange-500 rounded"></div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Established in 1998, GV Electricals has been at the forefront of electrical innovation, 
                providing comprehensive electrical solutions to industrial, commercial, and residential clients 
                across India. Our commitment to excellence and safety has made us a trusted partner for 
                organizations of all sizes.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                We specialize in industrial automation, power distribution systems, electrical installations, 
                maintenance services, and energy-efficient solutions. Our team of certified professionals 
                ensures every project meets the highest standards of quality and safety.
              </p>

              {/* Key Points */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">ISO 9001:2015 Certified</h4>
                    <p className="text-gray-600 text-sm md:text-base">Quality management system certification ensuring consistent service delivery</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Experienced Team</h4>
                    <p className="text-gray-600 text-sm md:text-base">Certified electricians and engineers with decades of combined experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">24/7 Support</h4>
                    <p className="text-gray-600 text-sm md:text-base">Round-the-clock emergency services and maintenance support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative mt-8 lg:mt-0">
              <img 
                src="https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-electrical-159045.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Electrical Team at Work" 
                className="rounded-lg shadow-lg w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-blue-600 text-white p-4 md:p-6 rounded-lg shadow-lg">
                <div className="text-2xl md:text-3xl font-bold">25+</div>
                <div className="text-xs md:text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-blue-600 mb-3 md:mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;