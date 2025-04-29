
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';
import { pricingPlans } from '@/data/pricingPlans';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-business-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Our Payment Services</h1>
            <p className="text-business-100 text-lg">
              Choose the plan that's right for your business. All plans include our core features.
            </p>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-6">Core Features Included in All Plans</h2>
            <p className="text-gray-600 text-lg">
              Regardless of which plan you choose, you'll get access to these essential features
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Payment Processing</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-business-500">✓</span>
                  <span>Credit and debit card processing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-business-500">✓</span>
                  <span>Digital wallet support (Apple Pay, Google Pay)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-business-500">✓</span>
                  <span>ACH bank transfers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-business-500">✓</span>
                  <span>International payment support</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Integration Options</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-business-500">✓</span>
                  <span>Simple embed code for websites</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-business-500">✓</span>
                  <span>API access for custom integrations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-business-500">✓</span>
                  <span>Pre-built plugins for popular platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-business-500">✓</span>
                  <span>Mobile SDK for iOS and Android</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Security & Compliance</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-business-500">✓</span>
                  <span>PCI DSS Level 1 compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-business-500">✓</span>
                  <span>Fraud detection and prevention tools</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-business-500">✓</span>
                  <span>3D Secure authentication</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-business-500">✓</span>
                  <span>Data encryption and secure storage</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Business Tools</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-business-500">✓</span>
                  <span>Transaction dashboard and reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-business-500">✓</span>
                  <span>Customer management tools</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-business-500">✓</span>
                  <span>Downloadable transaction history</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-business-500">✓</span>
                  <span>Email receipts and notifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">How quickly can I start accepting payments?</h3>
                <p className="text-gray-700">
                  Most businesses can start accepting payments within 1-2 business days after signing up and completing verification. Some advanced features may require additional setup time.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">What type of businesses do you support?</h3>
                <p className="text-gray-700">
                  We support a wide range of businesses including e-commerce, retail, professional services, subscription businesses, and more. Some high-risk industries may require additional verification.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">How do payouts work?</h3>
                <p className="text-gray-700">
                  Funds are deposited directly to your linked bank account. Standard payout timing is 2 business days, with options for faster settlements available on higher-tier plans.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Can I change plans later?</h3>
                <p className="text-gray-700">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle, and we'll prorate any difference.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Is there a contract or commitment?</h3>
                <p className="text-gray-700">
                  All our plans are month-to-month with no long-term contracts. You can cancel at any time without penalties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
