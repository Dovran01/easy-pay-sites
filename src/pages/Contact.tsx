
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-business-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-business-100 text-lg">
              Have questions? Our team is here to help you with anything you need.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="md:col-span-1">
                <div className="bg-gray-50 p-6 rounded-lg h-full">
                  <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Our Location</h3>
                      <p className="text-gray-600">
                        123 Business Ave<br />
                        San Francisco, CA 94107<br />
                        United States
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Email Us</h3>
                      <p className="text-gray-600">
                        info@easypay.business<br />
                        support@easypay.business
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Call Us</h3>
                      <p className="text-gray-600">
                        +1 (555) 123-4567<br />
                        Monday-Friday, 9am-5pm PT
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Follow Us</h3>
                      <div className="flex space-x-4">
                        <a href="#" className="text-gray-500 hover:text-business-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                          </svg>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-business-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                          </svg>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-business-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="md:col-span-2">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
            <div className="h-96 bg-gray-300 rounded-lg">
              {/* Map placeholder */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Interactive Map Goes Here
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
