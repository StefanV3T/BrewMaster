import React, { useState } from 'react';
import { Coffee, Clock, ShoppingBag, ChevronDown, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrewingMethods from './components/BrewingMethods';
import Equipment from './components/Equipment';
import Recipes from './components/Recipes';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <BrewingMethods />
        <Equipment />
        <Recipes />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;