
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 fixed w-full z-20 top-0 left-0">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-business-700">EasyPay</span>
          <span className="text-2xl font-bold text-gray-800">Business</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-business-600 font-medium">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-business-600 font-medium">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-business-600 font-medium">Services</Link>
          <Link to="/contact" className="text-gray-700 hover:text-business-600 font-medium">Contact</Link>
        </div>

        <div className="hidden md:flex">
          <Button asChild className="bg-business-600 hover:bg-business-700">
            <Link to="/services">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="p-2 text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 animate-fade-in">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <Link to="/" className="text-gray-700 hover:text-business-600 font-medium" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-business-600 font-medium" onClick={toggleMenu}>About</Link>
            <Link to="/services" className="text-gray-700 hover:text-business-600 font-medium" onClick={toggleMenu}>Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-business-600 font-medium" onClick={toggleMenu}>Contact</Link>
            <Button asChild className="bg-business-600 hover:bg-business-700 w-full">
              <Link to="/services" onClick={toggleMenu}>Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
