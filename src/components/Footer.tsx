import React from 'react';
import { Coffee, Mail, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Coffee className="h-8 w-8" />
              <span className="ml-2 text-xl font-serif font-bold">Brew Master</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering coffee enthusiasts to brew the perfect cup at home through
              expert guidance, quality equipment, and a passion for coffee.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#methods" className="text-gray-300 hover:text-white">Brewing Methods</a></li>
              <li><a href="#equipment" className="text-gray-300 hover:text-white">Equipment</a></li>
              <li><a href="#recipes" className="text-gray-300 hover:text-white">Recipes</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-white">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>support@brewmaster.com</li>
              <li>1-800-COFFEE</li>
              <li>123 Brew Street</li>
              <li>Coffee Town, CT 06510</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Brew Master. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;