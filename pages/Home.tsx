import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../products';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import { Category } from '../types';

const Home: React.FC = () => {
  // Get featured products - select a mix of interesting items
  const featuredProducts = products.filter(p => ["P001", "P004", "P005", "P007"].includes(p.id));
  const categories = Object.values(Category);

  // Category images map - Updated for new electronics categories
  const categoryImages: Record<string, string> = {
    [Category.Lighting]: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=600&q=80",
    [Category.Fans]: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80",
    [Category.WiresAndCables]: "https://images.unsplash.com/photo-1544724569-5f546fd6dd2d?auto=format&fit=crop&w=600&q=80",
    [Category.SwitchesAndSockets]: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=600&q=80",
    [Category.CCTVAndSecurity]: "https://images.unsplash.com/photo-1558002038-109155714d9d?auto=format&fit=crop&w=600&q=80",
    [Category.PowerAndAccessories]: "https://images.unsplash.com/photo-1581092921461-eab62e97a783?auto=format&fit=crop&w=600&q=80"
  };

  return (
    <>
      <SEO 
        title="Home" 
        description="ElectroMart - Your trusted source for electronics, lighting, and electrical essentials in India." 
      />
      
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            High Quality Electricals <br className="hidden md:inline"/> For Modern Living
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
            From energy-efficient lighting to industrial wiring. We power your world with genuine products at wholesale prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/products" 
              className="px-8 py-4 bg-accent text-white font-bold text-lg rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Shop Catalog
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg rounded-full hover:bg-white hover:text-primary transition-all"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits / Taglines */}
      <section className="py-12 bg-white border-b border-gray-100 shadow-sm relative z-20 -mt-8 mx-4 md:mx-auto md:max-w-6xl rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
          <div className="p-4">
            <div className="w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-900">ISI Certified</h3>
            <p className="text-gray-600">100% genuine products with ISI and BIS certification marks.</p>
          </div>
          <div className="p-4 border-l-0 md:border-l border-r-0 md:border-r border-gray-100">
            <div className="w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-900">Energy Efficient</h3>
            <p className="text-gray-600">Save up to 40% on electricity bills with 5-star rated appliances.</p>
          </div>
          <div className="p-4">
            <div className="w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-900">Pan-India Delivery</h3>
            <p className="text-gray-600">Fast shipping to 19,000+ pin codes across India.</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Shop By Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((cat) => (
              <Link 
                key={cat} 
                to={`/products?category=${encodeURIComponent(cat)}`}
                className="group relative rounded-xl overflow-hidden aspect-[3/4] shadow-md hover:shadow-xl transition-all"
              >
                <img 
                    src={categoryImages[cat] || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"} 
                    alt={cat} 
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <span className="text-white font-bold text-base md:text-lg tracking-wide group-hover:text-accent transition-colors">{cat}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
                <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
                <p className="text-gray-500 mt-2">Top rated essentials by our customers</p>
            </div>
            <Link to="/products" className="text-primary font-bold hover:text-accent transition-colors flex items-center">
                View All Catalog 
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <img 
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1600&q=80" 
            alt="Warehouse" 
            className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Building Something Big?</h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
            We offer exclusive GST invoices and bulk discounts for contractors, builders, and corporate orders.
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-accent text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-lg">
            Request Bulk Quote
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;