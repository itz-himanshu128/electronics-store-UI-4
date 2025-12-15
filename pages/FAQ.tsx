import React, { useState } from 'react';
import SEO from '../components/SEO';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <svg 
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes, we offer competitive pricing for contractors and bulk orders. Please contact our sales team via the Contact page for a custom quote."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 14 days of purchase for unused items in their original packaging. Defective items can be exchanged within the warranty period."
    },
    {
      question: "Do you provide installation services?",
      answer: "We currently strictly sell products. However, we can recommend certified local electricians for your installation needs."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-5 business days. Express options are available at checkout for 1-2 day delivery in select areas."
    },
    {
      question: "Are your products covered by warranty?",
      answer: "Yes, all our electrical appliances and LED products come with standard manufacturer warranties ranging from 1 to 5 years depending on the product."
    }
  ];

  return (
    <>
      <SEO 
        title="FAQ" 
        description="Frequently Asked Questions about shipping, returns, and products at ElectroMart." 
      />
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-600">Common questions about our products and services.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a href="/contact" className="text-primary font-semibold hover:text-accent transition-colors">
            Contact Support &rarr;
          </a>
        </div>
      </div>
    </>
  );
};

export default FAQ;