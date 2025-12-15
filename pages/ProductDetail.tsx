import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../products';
import SEO from '../components/SEO';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
        <Link to="/products" className="text-primary hover:underline mt-4 inline-block">Return to Catalog</Link>
      </div>
    );
  }

  // Schema.org Product Data
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": product.images,
    "description": product.short_desc,
    "sku": product.id,
    "brand": {
      "@type": "Brand",
      "name": "ElectroMart"
    },
    "offers": {
      "@type": "Offer",
      "url": window.location.href,
      "priceCurrency": "INR",
      "price": product.price,
      "availability": product.stock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };

  return (
    <>
      <SEO 
        title={product.title} 
        description={product.meta_description}
        jsonLd={jsonLd}
        type="product"
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-primary">Products</Link>
          <span className="mx-2">/</span>
          <Link to={`/products?category=${product.category}`} className="hover:text-primary">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image Gallery */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
             <img 
               src={product.images[0]} 
               alt={product.title} 
               className="w-full h-auto object-cover"
             />
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-2">
              <span className="inline-block px-3 py-1 bg-blue-50 text-primary text-xs font-semibold rounded-full uppercase tracking-wide">
                {product.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
            
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-gray-900 mr-4">₹{product.price.toLocaleString('en-IN')}</span>
              {product.stock ? (
                <span className="text-green-600 font-medium flex items-center">
                  <span className="w-2.5 h-2.5 bg-green-600 rounded-full mr-2"></span>
                  In Stock
                </span>
              ) : (
                <span className="text-red-600 font-medium flex items-center">
                  <span className="w-2.5 h-2.5 bg-red-600 rounded-full mr-2"></span>
                  Out of Stock
                </span>
              )}
            </div>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {product.long_desc}
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Technical Specifications</h3>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <div className="flex justify-between py-1 border-b border-gray-200 sm:col-span-2">
                  <dt className="text-gray-500">SKU</dt>
                  <dd className="font-medium text-gray-900">{product.id}</dd>
                </div>
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-1 border-b border-gray-200">
                    <dt className="text-gray-500">{key}</dt>
                    <dd className="font-medium text-gray-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="flex-1 bg-primary text-white text-center py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl"
              >
                Enquire Now
              </Link>
              <button 
                className="flex-1 bg-white border-2 border-primary text-primary font-bold py-4 rounded-lg hover:bg-blue-50 transition-colors"
                onClick={() => alert("Added to wishlist (Demo)")}
              >
                Add to Wishlist
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">
              Bulk discounts available for orders over 10 units. Contact us for details.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;