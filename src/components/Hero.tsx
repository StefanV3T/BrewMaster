import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Master the art of coffee brewing
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            From bean to cup, discover the secrets of brewing the perfect coffee at home.
            Join us on a journey through different brewing methods, equipment guides, and expert tips.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#methods">
              <button className="btn-primary flex items-center gap-2">

                Get started <ArrowRight className="w-5 h-5" />

              </button>
            </a>
            <a href="#recipes">
              <button className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-300">
                See recipes
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#methods"
          className="text-white flex flex-col items-center gap-2 animate-bounce"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Hero;