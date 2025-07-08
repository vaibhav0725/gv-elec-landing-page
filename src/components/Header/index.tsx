import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      {/* Top Bar */}
      <div className="bg-blue-800 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@gvelectricals.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>ISO 9001:2015 Certified | 25+ Years of Excellence</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">GV</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">GV Electricals</h1>
              <p className="text-sm text-gray-600">Powering Your Future</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link 
                to="/"
                className={`font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about"
                className={`font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/services"
                className={`font-medium transition-colors ${
                  isActive('/services') 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/projects"
                className={`font-medium transition-colors ${
                  isActive('/projects') 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/contact"
                className={`font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-4 py-2 font-medium ${
                    isActive('/') 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-4 py-2 font-medium ${
                    isActive('/about') 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/services"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-4 py-2 font-medium ${
                    isActive('/services') 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-4 py-2 font-medium ${
                    isActive('/projects') 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-4 py-2 font-medium ${
                    isActive('/contact') 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;