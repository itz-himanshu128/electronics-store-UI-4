import React from 'react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about ElectroMart's history, our commitment to quality electronics, and visit our store." 
      />
      
      <div className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About ElectroMart</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Lighting up homes and businesses across India since 2010.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-16 after:h-1 after:bg-accent">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Founded in 2010 in the bustling market of Bangalore, ElectroMart began as a small family-owned shop supplying basic wiring and bulbs to local contractors. Over the last decade, we have grown into one of South India's premier electronics retailers.
              </p>
              <p>
                We believe in quality without compromise. That's why we only stock products from certified manufacturers like Havells, Philips, and Anchor that meet rigorous ISI safety standards. Whether you are a homeowner looking for a single bulb or a contractor wiring an apartment complex, we treat every customer with the same dedication and respect.
              </p>
              <p>
                Our mission is to light up your world efficiently, safely, and affordably.
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <img src="https://images.unsplash.com/photo-1604066867775-43f48e3957d8?auto=format&fit=crop&w=800&q=80" alt="ElectroMart Store Team" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-accent text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="text-5xl font-extrabold text-gray-900 mb-2">15+</div>
            <div className="text-gray-500 font-medium uppercase tracking-wide">Years Experience</div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="text-5xl font-extrabold text-gray-900 mb-2">5000+</div>
            <div className="text-gray-500 font-medium uppercase tracking-wide">Products SKUs</div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-accent text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="text-5xl font-extrabold text-gray-900 mb-2">10k+</div>
            <div className="text-gray-500 font-medium uppercase tracking-wide">Happy Customers</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Visit Our Showroom</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      Shop No. 42, Ground Floor,<br/>
                      Electronics Market, Indiranagar,<br/>
                      Bangalore, Karnataka 560038
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Hours</h3>
                    <p className="text-gray-600">Mon - Sat: 9:30 AM - 8:30 PM</p>
                    <p className="text-gray-600">Sun: Closed</p>
                  </div>
                </div>
                <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">080-2525-4444</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 h-64 md:h-auto relative min-h-[300px]">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.001696423076!2d77.64115441482193!3d12.971598790855742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a78f813153%3A0x43ad7590d86b4558!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1625561024045!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy" 
                title="Google Map"
                className="absolute inset-0"
               />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;