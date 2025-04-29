
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useToast } from './ui/use-toast';
import { pricingPlans } from '../data/pricingPlans';

const CheckoutForm = () => {
  const { toast } = useToast();
  const { planId } = useParams();
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const selectedPlan = pricingPlans.find(plan => plan.id === planId) || pricingPlans[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Simple formatting for card input
    if (name === 'cardNumber') {
      const formatted = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      setFormData(prev => ({ ...prev, [name]: formatted.slice(0, 19) }));
      return;
    }
    
    // Simple formatting for expiry date
    if (name === 'expiry') {
      const formatted = value.replace(/\D/g, '');
      const month = formatted.slice(0, 2);
      const year = formatted.slice(2, 4);
      
      if (formatted.length <= 2) {
        setFormData(prev => ({ ...prev, [name]: month }));
      } else {
        setFormData(prev => ({ ...prev, [name]: `${month}/${year}` }));
      }
      return;
    }
    
    // For CVC limit to 3-4 characters
    if (name === 'cvc') {
      setFormData(prev => ({ ...prev, [name]: value.slice(0, 4) }));
      return;
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Payment Successful!",
        description: `Thank you for subscribing to our ${selectedPlan.name} plan.`,
      });
      
      // Reset form and processing state
      setFormData({
        name: '',
        email: '',
        cardNumber: '',
        expiry: '',
        cvc: '',
      });
      
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
          <CardDescription>
            Complete your subscription to our {selectedPlan.name} plan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="bg-gray-50 p-4 rounded-md border mb-4">
              <div className="font-medium">{selectedPlan.name}</div>
              <div className="text-xl font-bold">${selectedPlan.price}/month</div>
              <p className="text-sm text-muted-foreground mt-1">{selectedPlan.description}</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Cardholder Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="4242 4242 4242 4242"
                  required
                  value={formData.cardNumber}
                  onChange={handleChange}
                  maxLength={19}
                  inputMode="numeric"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiration Date</Label>
                  <Input
                    id="expiry"
                    name="expiry"
                    placeholder="MM/YY"
                    required
                    value={formData.expiry}
                    onChange={handleChange}
                    maxLength={5}
                    inputMode="numeric"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input
                    id="cvc"
                    name="cvc"
                    placeholder="123"
                    required
                    value={formData.cvc}
                    onChange={handleChange}
                    maxLength={4}
                    inputMode="numeric"
                  />
                </div>
              </div>
            </form>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            onClick={handleSubmit} 
            className="w-full bg-business-600 hover:bg-business-700"
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : `Pay $${selectedPlan.price}.00`}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CheckoutForm;
