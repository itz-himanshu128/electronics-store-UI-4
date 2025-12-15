import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Use a smaller image for the card grid to improve load time (w=500)
  const imageUrl = product.images[0].replace('w=800', 'w=500');

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 overflow-hidden flex flex-col h-full">
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-gray-100 group">
        <img 
          src={imageUrl} 
          alt={product.title} 
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {!product.stock && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            Out of Stock
          </div>
        )}
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-xs text-accent font-semibold mb-1 uppercase tracking-wider">
          {product.category}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
          <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
            {product.title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
          {product.short_desc}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
          <Link 
            to={`/product/${product.id}`} 
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-blue-800 rounded-md transition-colors shadow-sm"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;