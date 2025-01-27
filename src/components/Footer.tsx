import { Coffee } from 'lucide-react';

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
          </div>

          <div>

          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2">
              <li><a href="#methods" className="text-gray-300 hover:text-white">Brewing methods</a></li>
              <li><a href="#equipment" className="text-gray-300 hover:text-white">Equipment</a></li>
              <li><a href="#recipes" className="text-gray-300 hover:text-white">Recipes</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-white">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Brew Master. All rights reserved.</p>
          <p>Realized by <a href="https://www.grufix.nl/" target='_blank'>Grufix</a></p> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;