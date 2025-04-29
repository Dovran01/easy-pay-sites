
import { PricingPlan } from "../components/PricingCard";

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 29,
    description: 'Essential features for small businesses starting out',
    features: [
      'Up to 1,000 transactions/month',
      '2.9% + 30¢ per transaction',
      'Basic analytics dashboard',
      'Email support',
      'Accept credit cards & digital wallets',
    ],
    buttonText: 'Subscribe Now',
  },
  {
    id: 'pro',
    name: 'Professional',
    price: 59,
    description: 'Advanced features for growing businesses',
    features: [
      'Up to 5,000 transactions/month',
      '2.5% + 30¢ per transaction',
      'Advanced analytics & reporting',
      'Priority email & chat support',
      'Custom payment pages',
      'Recurring billing options',
    ],
    highlighted: true,
    buttonText: 'Subscribe Now',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 99,
    description: 'Comprehensive solution for larger businesses',
    features: [
      'Unlimited transactions',
      'Custom pricing available',
      'Advanced fraud protection',
      '24/7 phone, email & chat support',
      'Dedicated account manager',
      'Custom integration options',
      'Enterprise-grade security',
    ],
    buttonText: 'Subscribe Now',
  }
];
