import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight flex items-center gap-2">
           <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
           ElectroMart
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
          <Link to="/about" className="hover:text-accent transition-colors">About</Link>
          <Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link>
          <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-blue-900 px-4 py-4 space-y-3">
          <Link to="/" className="block hover:text-accent" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/products" className="block hover:text-accent" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
          <Link to="/about" className="block hover:text-accent" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/faq" className="block hover:text-accent" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
          <Link to="/contact" className="block hover:text-accent" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;