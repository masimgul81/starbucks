import React from 'react';
import { Link } from '../ui/Link';

export function Hero() {
  return (
    <div className="bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Summer's brightest new drinks
            </h1>
            <p className="text-lg text-gray-600">
              Introducing our new Frozen Lemonade Starbucks Refreshers® beverages, a sweet-and-tangy summer sensation.
            </p>
            <Link
              href="/menu"
              className="inline-block bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800"
            >
              Order now
            </Link>
          </div>
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800"
              alt="Starbucks drinks"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}