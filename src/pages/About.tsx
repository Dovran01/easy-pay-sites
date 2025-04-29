
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-business-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">About EasyPayBusiness</h1>
            <p className="text-business-100 text-lg">
              We're on a mission to simplify payments for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              EasyPayBusiness was founded in 2018 by a team of fintech experts who saw firsthand how traditional payment solutions were failing small and medium businesses. Complex interfaces, hidden fees, and long settlement times were creating unnecessary friction in the payment process.
            </p>
            <p className="text-gray-700 mb-4">
              We set out to build a payment solution that would be transparent, easy to implement, and designed with the modern business in mind. Our goal was simple: create a payment platform that works for businesses, not against them.
            </p>
            <p className="text-gray-700">
              Today, thousands of businesses across the globe rely on EasyPayBusiness to process millions of transactions. We've grown into a complete payment solution while staying true to our original mission of simplicity, transparency, and exceptional service.
            </p>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="text-center">
                <div className="bg-business-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-business-600 text-3xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Simplicity</h3>
                <p className="text-gray-600">
                  We believe payment technology should be easy to use and understand.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-business-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-business-600 text-3xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Transparency</h3>
                <p className="text-gray-600">
                  Clear pricing, no hidden fees, and straightforward terms.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-business-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-business-600 text-3xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Security</h3>
                <p className="text-gray-600">
                  Your data and your customers' data is protected by industry-leading security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Meet Our Leadership Team</h2>
            <p className="text-gray-600">
              Our diverse team brings decades of experience in fintech, payments, and customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="mb-4">
                <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto"></div>
              </div>
              <h3 className="text-xl font-bold">Sarah Chen</h3>
              <p className="text-gray-600">CEO & Co-founder</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto"></div>
              </div>
              <h3 className="text-xl font-bold">Michael Rodriguez</h3>
              <p className="text-gray-600">CTO & Co-founder</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto"></div>
              </div>
              <h3 className="text-xl font-bold">Jennifer Smith</h3>
              <p className="text-gray-600">COO</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-business-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8">
              Join thousands of businesses that trust EasyPayBusiness for their payment processing needs.
            </p>
            <Button asChild size="lg" className="bg-white text-business-700 hover:bg-gray-100">
              <Link to="/services">View Our Plans</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
