import React from 'react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with ElectroMart. Use our contact form for inquiries, quotes, or support." 
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Get in Touch</h1>
          <p className="text-gray-600 text-center mb-10">Have a question about a product or need a quote? Fill out the form below.</p>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            {/* 
              Netlify Form Handling:
              To make this work in a React SPA on Netlify:
              1. Add <input type="hidden" name="form-name" value="contact" />
              2. Ensure the form has name="contact"
              3. You might need a static HTML copy of this form in index.html or a separate file for Netlify's bot to detect it during build.
              For this 'static site' requirement simulation, we assume the Netlify build process will see a pre-rendered version or we rely on standard submission.
            */}
            <form name="contact" method="POST" data-netlify="true" className="space-y-6">
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select 
                  id="subject" 
                  name="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow"
                >
                  <option value="general">General Inquiry</option>
                  <option value="quote">Request a Quote</option>
                  <option value="support">Product Support</option>
                  <option value="bulk">Bulk Order</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow"
                  placeholder="How can we help you today?"
                ></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;