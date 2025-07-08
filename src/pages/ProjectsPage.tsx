import React from 'react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Manufacturing Plant Automation',
      client: 'ABC Industries Ltd.',
      location: 'Mumbai, Maharashtra',
      year: '2023',
      category: 'Industrial Automation',
      description: 'Complete automation solution for a 50,000 sq ft manufacturing facility including PLC programming, SCADA implementation, and power distribution.',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      value: '₹2.5 Cr'
    },
    {
      title: 'Commercial Complex Electrical',
      client: 'Phoenix Mall',
      location: 'Pune, Maharashtra',
      year: '2023',
      category: 'Commercial',
      description: 'Electrical installation and maintenance for a 3-lakh sq ft commercial complex with advanced lighting and fire safety systems.',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      value: '₹1.8 Cr'
    },
    {
      title: 'Hospital Power Distribution',
      client: 'City General Hospital',
      location: 'Nashik, Maharashtra',
      year: '2022',
      category: 'Healthcare',
      description: 'Critical power distribution system with redundant backup for a 200-bed hospital facility ensuring 100% uptime.',
      image: 'https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-electrical-159045.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      value: '₹1.2 Cr'
    },
    {
      title: 'Residential Township',
      client: 'Green Valley Developers',
      location: 'Aurangabad, Maharashtra',
      year: '2022',
      category: 'Residential',
      description: 'Complete electrical infrastructure for a 500-unit residential township with smart home automation and solar integration.',
      image: 'https://images.pexels.com/photos/8293659/pexels-photo-8293659.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      value: '₹3.5 Cr'
    },
    {
      title: 'Food Processing Plant',
      client: 'Metro Foods Pvt Ltd',
      location: 'Satara, Maharashtra',
      year: '2021',
      category: 'Food Industry',
      description: 'Specialized electrical systems for food processing with compliance to food safety standards and automated process control.',
      image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      value: '₹1.6 Cr'
    },
    {
      title: 'Educational Institution',
      client: 'Tech University Campus',
      location: 'Kolhapur, Maharashtra',
      year: '2021',
      category: 'Education',
      description: 'Campus-wide electrical infrastructure including smart classrooms, laboratories, and energy-efficient lighting systems.',
      image: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      value: '₹2.2 Cr'
    }
  ];

  return (
    <div className="pt-24 md:pt-32">
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Our Projects</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
              Featured Project Portfolio
            </h1>
            <div className="w-20 h-1 bg-orange-500 rounded mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              Explore our diverse portfolio of successful electrical projects across various industries. 
              Each project represents our commitment to excellence and innovation.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {project.value}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-blue-600 font-medium mb-3">{project.client}</p>
                  
                  {/* Project Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">{project.description}</p>

                  {/* CTA Button */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors">
                    <span>View Details</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Statistics */}
          <div className="mt-12 md:mt-16 bg-gray-50 rounded-lg p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-600 font-medium text-sm md:text-base">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">₹50+ Cr</div>
                <div className="text-gray-600 font-medium text-sm md:text-base">Project Value</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600 font-medium text-sm md:text-base">Industries Served</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium text-sm md:text-base">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;