
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import { CreditCard, ShieldCheck, BarChart4, Wallet } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-pattern pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white mb-6">
              Simplified Payment Solutions for Your Business
            </h1>
            <p className="text-gray-300 text-xl mb-8 md:px-10">
              Accept payments online with our secure, easy-to-implement payment processing system. 
              Get started in minutes, no technical experience required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-business-500 hover:bg-business-600 text-white">
                <Link to="/services">View Plans</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent text-white hover:bg-white/10 border-white">
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4 text-gray-900">Why Choose Our Payment Solution?</h2>
            <p className="text-gray-600 text-lg">
              We provide powerful tools designed to help your business grow and succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Easy Integration"
              description="Integrate payments into your website or app with just a few lines of code."
              icon={CreditCard}
            />
            <FeatureCard
              title="Secure Transactions"
              description="PCI-compliant payment processing with advanced fraud protection."
              icon={ShieldCheck}
            />
            <FeatureCard
              title="Detailed Analytics"
              description="Track sales, analyze customer behavior, and optimize your business with our dashboard."
              icon={BarChart4}
            />
            <FeatureCard
              title="Multiple Payment Methods"
              description="Accept credit cards, digital wallets, and more to provide flexibility to your customers."
              icon={Wallet}
            />
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4 text-gray-900">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">
              Don't just take our word for it - hear what businesses like yours have achieved
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Implementing EasyPayBusiness was the best decision for our online store. Our payment processing is seamless and we've seen a 15% increase in completed purchases."
              author="Sarah Johnson"
              role="CEO"
              company="Fashion Boutique"
            />
            <TestimonialCard
              quote="The analytics dashboard gives us incredible insights into our customers' purchasing behavior. Plus, their customer service is top-notch."
              author="Michael Rodriguez"
              role="COO"
              company="Tech Solutions Inc."
            />
            <TestimonialCard
              quote="We switched from a competitor and immediately noticed lower fees and faster payment processing. The setup was incredibly easy too."
              author="Jennifer Chen"
              role="Founder"
              company="Artisan Goods"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-business-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to Transform Your Business Payments?</h2>
            <p className="text-business-100 text-lg mb-8">
              Join thousands of businesses that trust us with their payment processing.
              Get started today with no long-term commitments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-business-800 hover:bg-gray-100">
                <Link to="/services">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent text-white hover:bg-white/10 border-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
