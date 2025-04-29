
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { Link } from 'react-router-dom';

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
}

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <Card className={`flex flex-col h-full ${plan.highlighted ? 'border-business-500 shadow-lg' : ''}`}>
      {plan.highlighted && (
        <div className="bg-business-500 text-white text-center py-1.5 text-sm font-medium">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{plan.name}</CardTitle>
        <div className="mt-2 flex items-baseline">
          <span className="text-3xl font-bold">${plan.price}</span>
          <span className="ml-1 text-muted-foreground">/month</span>
        </div>
        <CardDescription className="mt-3">{plan.description}</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="flex-grow pt-6">
        <ul className="space-y-3">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex">
              <Check className="h-5 w-5 text-business-500 mr-2 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className={`w-full ${plan.highlighted ? 'bg-business-600 hover:bg-business-700' : ''}`}>
          <Link to={`/checkout/${plan.id}`}>{plan.buttonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
