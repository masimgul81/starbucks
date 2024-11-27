import React from 'react';
import { Coffee } from 'lucide-react';
import { Link } from '../ui/Link';

const footerLinks = {
  'About Us': ['Our Company', 'Careers', 'Social Impact', 'Stories and News'],
  'Customer Service': ['Contact Us', 'FAQs', 'Store Locator', 'Gift Cards'],
  'Orders': ['Order on the App', 'Delivery', 'Order History', 'Nutrition Information'],
  'Legal': ['Privacy Policy', 'Terms of Use', 'Cookie Preferences']
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Coffee className="h-6 w-6 text-white" />
              <span className="ml-2 text-white font-bold">Starbucks</span>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Starbucks Coffee Company. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}