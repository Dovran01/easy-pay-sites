
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <Card className="h-full transition-all hover:shadow-md hover:border-business-300">
      <CardHeader>
        <div className="mb-4 inline-flex items-center justify-center p-2 bg-business-100 rounded-md">
          <Icon className="h-6 w-6 text-business-600" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
