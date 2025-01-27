import React, { useState } from 'react';
import { Coffee, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink href="/">
              <div className='flex items-center'>
            <Coffee className="h-8 w-8 text-coffee" />
            <span className="ml-2 text-xl font-serif font-bold">Brew Master</span>
              </div>

            </NavLink>

          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#methods">Brewing methods</NavLink>
            <NavLink href="#equipment">Equipment</NavLink>
            <NavLink href="#recipes">Recipes</NavLink>
            <NavLink href="#blog">Blog</NavLink>
          </div>

          <button
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#methods">Brewing methods</MobileNavLink>
            <MobileNavLink href="#equipment">Equipment</MobileNavLink>
            <MobileNavLink href="#recipes">Recipes</MobileNavLink>
            <MobileNavLink href="#blog">Blog</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-700 hover:text-coffee transition-colors duration-300"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-coffee hover:bg-gray-50 rounded-md"
  >
    {children}
  </a>
);

export default Navbar;