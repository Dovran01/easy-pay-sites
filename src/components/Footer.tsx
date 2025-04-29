
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              <span className="text-business-400">EasyPay</span>
              <span>Business</span>
            </h3>
            <p className="text-gray-300">
              Simplifying payments for businesses of all sizes. Accept payments online with ease.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-business-300 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-business-300 transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-business-300 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-business-300 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-business-300 transition-colors">Payment Processing</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-business-300 transition-colors">Online Checkout</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-business-300 transition-colors">Payment Links</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-business-300 transition-colors">Enterprise Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">123 Business Ave</li>
              <li className="text-gray-300">San Francisco, CA 94107</li>
              <li className="text-gray-300">info@easypay.business</li>
              <li className="text-gray-300">(555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400">© {currentYear} EasyPayBusiness. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-business-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-business-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
