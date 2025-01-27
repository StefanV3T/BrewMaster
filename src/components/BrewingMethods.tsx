import React from 'react';
import { Clock } from 'lucide-react';

const methods = [
  {
    title: 'Pour over',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'A manual brewing method that involves pouring hot water over ground coffee in a filter.',
    duration: '3-4 minutes',
  },
  {
    title: 'French press',
    image: 'https://images.unsplash.com/photo-1519082274554-1ca37fb8abb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'A classic immersion brewing method using a plunger to separate grounds from coffee.',
    duration: '4-5 minutes',
  },
  {
    title: 'Espresso',
    image: 'https://images.unsplash.com/photo-1595928642581-f50f4f3453a5?q=80&w=2055&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'High-pressure brewing method producing concentrated coffee shots.',
    duration: '25-30 seconds',
  },
];

const BrewingMethods = () => {
  return (
    <section id="methods" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Brewing methods
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover different ways to brew your perfect cup of coffee. Each method brings out unique flavors and characteristics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methods.map((method) => (
            <div key={method.title} className="card group">
              <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                <img
                  src={method.image}
                  alt={method.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <p className="text-gray-600 mb-4">{method.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                <span>{method.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrewingMethods;