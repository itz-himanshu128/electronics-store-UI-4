import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../products';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import { Category } from '../types';

const Catalog: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [sortOrder, setSortOrder] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  useEffect(() => {
    // Sync state with URL param if it changes externally
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    let filtered = products;
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    if (sortOrder === 'price-asc') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-desc') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }
    
    return filtered;
  }, [selectedCategory, sortOrder]);

  return (
    <>
      <SEO 
        title="Catalog" 
        description="Browse our extensive catalog of electronics, lights, fans, and wiring." 
      />
      
      <div className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900">Product Catalog</h1>
          <p className="text-gray-600 mt-2">Find exactly what you need for your project.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg border border-gray-200 sticky top-24">
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => handleCategoryChange('All')}
                  className={`block w-full text-left px-2 py-1.5 rounded transition-colors ${selectedCategory === 'All' ? 'bg-blue-50 text-primary font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  All Products
                </button>
                {Object.values(Category).map(cat => (
                  <button 
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`block w-full text-left px-2 py-1.5 rounded transition-colors ${selectedCategory === cat ? 'bg-blue-50 text-primary font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <p className="text-gray-600">{filteredProducts.length} products found</p>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-sm font-medium text-gray-700">Sort by:</label>
                <select 
                  id="sort"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as any)}
                  className="border-gray-300 border rounded-md text-sm py-1.5 px-3 focus:ring-primary focus:border-primary"
                >
                  <option value="default">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-lg border border-gray-200">
                <p className="text-gray-500 text-lg">No products found in this category.</p>
                <button 
                  onClick={() => handleCategoryChange('All')}
                  className="mt-4 text-primary hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;