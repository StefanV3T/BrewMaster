import React from 'react';
import { Clock, Coffee, Droplet } from 'lucide-react';

const recipes = [
  {
    title: 'Classic Cappuccino',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    time: '5 mins',
    difficulty: 'Medium',
    ingredients: ['Espresso shot', 'Steamed milk', 'Milk foam'],
  },
  {
    title: 'Cold Brew',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    time: '12 hours',
    difficulty: 'Easy',
    ingredients: ['Coarse ground coffee', 'Cold water'],
  },
  {
    title: 'Pour Over',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    time: '4 mins',
    difficulty: 'Medium',
    ingredients: ['Medium ground coffee', 'Hot water', 'Filter'],
  },
];

const Recipes = () => {
  return (
    <section id="recipes" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Coffee recipes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master these classic coffee recipes and impress your friends and family
            with barista-quality drinks at home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div key={recipe.title} className="card group">
              <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {recipe.time}
                </div>
                <div className="flex items-center">
                  <Coffee className="w-4 h-4 mr-1" />
                  {recipe.difficulty}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Ingredients:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipes;