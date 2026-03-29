import React from 'react';

const SERVICES = [
  {
    title: "SOP & CV Polish",
    price: "$25",
    desc: "We fix your grammar, flow, and scientific tone.",
    features: ["48-Hour Delivery", "Plagiarism Check", " ATS Optimization"],
    link: "https://wa.me/message/ID5GXUUKX36CM1",
    popular: false
  },
  {
    title: "The 'Done-For-You' Application",
    price: "$199",
    desc: "Sit back. We apply to 3 universities on your behalf.",
    features: ["We Fill the Forms", "We Upload Docs", "We Write the Emails", "Guaranteed Submission"],
    link: "https://wa.me/message/ID5GXUUKX36CM1",
    popular: true // Highlight this one
  },
  {
    title: "Visa Mock Interview",
    price: "$40",
    desc: "1-on-1 Zoom session to crack the embassy interview.",
    features: ["30-Min Live Call", "Real Questions", "Confidence Training"],
    link: "https://wa.me/message/ID5GXUUKX36CM1",
    popular: false
  }
];

export const Services: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">Premium Services 💎</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg">From editing to full submission—we handle it all.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {SERVICES.map((service, index) => (
          <div key={index} className={`relative bg-white dark:bg-slate-800 rounded-3xl p-8 border ${service.popular ? 'border-indigo-500 shadow-2xl scale-105 z-10 ring-4 ring-indigo-50 dark:ring-indigo-900/30' : 'border-slate-100 dark:border-slate-700 shadow-lg'} transition-all hover:-translate-y-2`}>
            {service.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-lg">
                Best Seller
              </div>
            )}
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 h-10">{service.desc}</p>
            <div className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-8">{service.price}</div>
            
            <ul className="space-y-4 mb-8">
              {service.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center flex-shrink-0">✓</div>
                  {feat}
                </li>
              ))}
            </ul>
            
            <a href={service.link} target="_blank" rel="noopener noreferrer" className={`block w-full text-center py-4 rounded-xl font-bold transition-all shadow-lg ${service.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200 dark:shadow-indigo-900/50' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'}`}>
              Book Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};