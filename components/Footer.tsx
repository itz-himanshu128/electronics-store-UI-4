import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
            <span className="text-accent">⚡</span> ElectroMart
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Powering homes and industries across India with premium electrical solutions since 2010. Authorized dealers for top brands.
          </p>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-accent transition-colors">Full Catalog</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-accent transition-colors">Track Order</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Bulk Inquiries</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Returns & Refund</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all" aria-label="Twitter">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all" aria-label="Instagram">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
          <div className="text-sm text-gray-400">
            <p className="mb-1">Shop No. 42, Electronics Market,</p>
            <p>Indiranagar, Bangalore - 560038</p>
            <p className="mt-2 text-white font-medium">+91 98765 43210</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} ElectroMart Retail. All rights reserved. Made for India.</p>
      </div>
    </footer>
  );
};

export default Footer;