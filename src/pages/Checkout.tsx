
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CheckoutForm from '@/components/CheckoutForm';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { pricingPlans } from '@/data/pricingPlans';

const Checkout = () => {
  const { planId } = useParams();
  const selectedPlan = pricingPlans.find(plan => plan.id === planId);
  
  if (!selectedPlan) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6">Plan Not Found</h1>
            <p className="text-gray-600 mb-6">Sorry, the plan you're looking for doesn't exist.</p>
            <Button asChild className="bg-business-600 hover:bg-business-700">
              <Link to="/services">View Available Plans</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Checkout Section */}
      <section className="pt-24 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link to="/services" className="text-business-600 hover:text-business-700">
                ← Back to Services
              </Link>
            </div>
            
            <div className="mb-12">
              <h1 className="text-3xl font-bold mb-2">Complete Your Purchase</h1>
              <p className="text-gray-600">
                You're subscribing to the {selectedPlan.name} plan.
              </p>
            </div>
            
            <CheckoutForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Checkout;
