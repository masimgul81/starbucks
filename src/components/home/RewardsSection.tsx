import React from 'react';
import { Star, Gift, Coffee } from 'lucide-react';
import { Link } from '../ui/Link';

const benefits = [
  {
    icon: <Star className="h-6 w-6" />,
    title: 'Earn Stars',
    description: 'Earn Stars with every purchase and redeem for free drinks and food.'
  },
  {
    icon: <Gift className="h-6 w-6" />,
    title: 'Free Birthday Reward',
    description: 'Celebrate with a free drink or food item of your choice.'
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    title: 'Free Refills',
    description: 'Get free refills of brewed coffee and tea during your visit.'
  }
];

export function RewardsSection() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Starbucks® Rewards</h2>
          <p className="mt-4 text-lg text-gray-600">
            Join Starbucks Rewards to earn Stars for free food and drinks, get access to mobile ordering, and more.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-green-700 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/rewards"
            className="inline-block bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800"
          >
            Join now
          </Link>
        </div>
      </div>
    </div>
  );
}