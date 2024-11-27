import React from 'react';
import { MapPin, Coffee, User, ShoppingBag } from 'lucide-react';
import { Link } from '../ui/Link';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Coffee className="h-8 w-8 text-green-700" />
              <span className="ml-2 text-xl font-bold text-gray-900">Starbucks</span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                <Link href="/menu">Menu</Link>
                <Link href="/rewards">Rewards</Link>
                <Link href="/gift-cards">Gift Cards</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/stores" className="flex items-center">
              <MapPin className="h-5 w-5" />
              <span className="ml-1">Find a store</span>
            </Link>
            <Link href="/account" className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-5 w-5" />
            </Link>
            <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingBag className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}