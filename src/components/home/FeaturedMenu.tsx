import React from 'react';

const featuredItems = [
  {
    id: 1,
    name: 'Caramel Frappuccino',
    description: 'Buttery caramel syrup meets coffee, milk and ice',
    price: '$4.95',
    image: 'https://images.unsplash.com/photo-1561501878-aabd62634533?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    name: 'Iced Green Tea Latte',
    description: 'Premium matcha green tea with milk',
    price: '$4.25',
    image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 3,
    name: 'Cold Brew',
    description: 'Slow-steeped, super-smooth cold brew coffee',
    price: '$3.95',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=400'
  }
];

export function FeaturedMenu() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div key={item.id} className="group">
              <div className="relative h-64 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg group-hover:opacity-75 transition-opacity"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
              <p className="text-gray-600 mt-1">{item.description}</p>
              <p className="text-green-700 font-medium mt-2">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}