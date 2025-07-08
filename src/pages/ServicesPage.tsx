import React from 'react';
import { 
  Zap, 
  Settings, 
  Building, 
  Home, 
  Wrench, 
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Zap size={40} />,
      title: 'Industrial Automation',
      description: 'Complete automation solutions including PLC programming, SCADA systems, and process control.',
      features: ['PLC Programming', 'SCADA Systems', 'HMI Development', 'Process Control'],
      image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: <Settings size={40} />,
      title: 'Power Distribution',
      description: 'Design and installation of power distribution systems for industrial and commercial facilities.',
      features: ['Panel Design', 'Switchgear Installation', 'Load Analysis', 'Power Quality'],
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: <Building size={40} />,
      title: 'Commercial Electrical',
      description: 'Comprehensive electrical services for commercial buildings, offices, and retail spaces.',
      features: ['Office Wiring', 'Lighting Systems', 'Fire Safety', 'Emergency Power'],
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: <Home size={40} />,
      title: 'Residential Services',
      description: 'Complete residential electrical solutions from new installations to renovations.',
      features: ['Home Wiring', 'Smart Home Systems', 'Safety Inspections', 'Upgrades'],
      image: 'https://images.pexels.com/photos/8293659/pexels-photo-8293659.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: <Wrench size={40} />,
      title: 'Maintenance & Repair',
      description: '24/7 maintenance and emergency repair services to keep your systems running smoothly.',
      features: ['Preventive Maintenance', 'Emergency Repairs', 'System Upgrades', 'Troubleshooting'],
      image: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: <Shield size={40} />,
      title: 'Safety & Compliance',
      description: 'Electrical safety audits, compliance testing, and certification services.',
      features: ['Safety Audits', 'Compliance Testing', 'Certification', 'Training Programs'],
      image: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="pt-24 md:pt-32">
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Our Services</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
              Comprehensive Electrical Solutions
            </h1>
            <div className="w-20 h-1 bg-orange-500 rounded mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              From industrial automation to residential installations, we provide end-to-end electrical 
              solutions backed by 25+ years of expertise and ISO 9001:2015 certification.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white p-3 rounded-lg">
                    {service.icon}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">{service.description}</p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 md:mt-16 text-center">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-600 mb-6 px-4">
                Our expert team can design and implement tailored electrical solutions for your specific requirements.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;