import React, { useState } from 'react';

const FAQS = [
  {
    q: "Is the scholarship search really free?",
    a: "Yes! 100%. The AI search engine is free for all students. We only charge for premium personal services like SOP Review and Interview Prep."
  },
  {
    q: "Can I apply if I have a low CGPA?",
    a: "Absolutely. Many scholarships focus on research potential or leadership rather than just grades. Our AI can filter opportunities specifically for your profile."
  },
  {
    q: "How does the SOP Review service work?",
    a: "You upload your draft, and our team of PhD scholars reviews it. We correct grammar, improve flow, and ensure it sounds 'scientific' enough to impress professors."
  },
  {
    q: "Do you guarantee a visa?",
    a: "No ethical company can guarantee a visa. However, our Mock Interview service has a 94% success rate because we prepare you for the exact questions officers ask."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Frequently Asked Questions 🤔</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Everything you need to know about Zynome Scholar.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-slate-800 rounded-xl shadow-sm border overflow-hidden cursor-pointer transition-all duration-300 ${openIndex === index ? 'border-indigo-500 dark:border-indigo-400 shadow-md' : 'border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600'}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="p-6 flex justify-between items-center bg-white dark:bg-slate-800 z-10 relative">
                <h3 className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-indigo-700 dark:text-indigo-400' : 'text-slate-800 dark:text-white'}`}>{faq.q}</h3>
                <span className={`text-indigo-600 dark:text-indigo-400 font-bold text-xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </div>
              
              <div className={`px-6 text-slate-600 dark:text-slate-300 leading-relaxed overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};