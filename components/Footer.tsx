import React from 'react';

// Define Props so Footer can talk to App.tsx
type FooterProps = {
  onNavigate: (page: string) => void;
};

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800" id="footer">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        
        {/* Column 1: Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🧬</span>
            <span className="text-xl font-bold text-white">Zynome<span className="text-indigo-500">Scholar</span></span>
          </div>
          <p className="leading-relaxed mb-4 text-xs">
            A joint initiative by <strong>Zynome Scientific</strong> and <strong>Life Sciences Enterprises</strong>.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3 flex-wrap">
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/alidaraz" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors" title="LinkedIn">
              <span className="font-bold font-serif">in</span>
            </a>
            
            {/* X (Twitter) */}
            <a href="#" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-black hover:text-white transition-colors" title="X (Twitter)">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>

            {/* Facebook */}
            <a href="#" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors" title="Facebook">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>

            {/* YouTube */}
            <a href="#" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors" title="YouTube">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/923124047864" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors" title="WhatsApp">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.015-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            </a>

            {/* Instagram */}
            <a href="#" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors" title="Instagram">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Platform Links (These go to Home Sections) */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Platform</h4>
          <ul className="space-y-4">
            <li><button onClick={() => onNavigate('home#services')} className="hover:text-white hover:underline">Premium Services</button></li>
            <li><button onClick={() => onNavigate('home#eligibility')} className="hover:text-white hover:underline">Eligibility Calculator</button></li>
            <li><button onClick={() => onNavigate('home#alumni')} className="hover:text-white hover:underline">Success Stories</button></li>
            <li><button onClick={() => onNavigate('home#resources')} className="hover:text-white hover:underline">Free Resources</button></li>
          </ul>
        </div>

        {/* Column 3: Legal Links (These open NEW pages) */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Legal</h4>
          <ul className="space-y-4">
            <li><button onClick={() => onNavigate('privacy')} className="hover:text-white hover:underline">Privacy Policy</button></li>
            <li><button onClick={() => onNavigate('terms')} className="hover:text-white hover:underline">Terms of Service</button></li>
            <li><button onClick={() => onNavigate('refund')} className="hover:text-white hover:underline">Refund Policy</button></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="text-indigo-500">📧</span>
              <a href="mailto:zynomescientific@gmail.com" className="hover:text-white">zynomescientific@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-indigo-500">📱</span>
              <a href="tel:+923124047864" className="hover:text-white text-lg font-mono">+92 312 4047864</a>
            </li>
          </ul>
        </div>
      </div>

      {/* 🟢 5. SEO KEYWORD DIRECTORY (The "Secret Sauce") */}
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800">
        <p className="text-xs font-bold text-slate-500 uppercase mb-4">Popular Searches</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-600">
          <a href="#" className="hover:text-slate-400">Fully Funded Scholarships in Italy 2026</a>
          <a href="#" className="hover:text-slate-400">Study in Germany Free</a>
          <a href="#" className="hover:text-slate-400">SOP Writing Services Pakistan</a>
          <a href="#" className="hover:text-slate-400">MBBS in China Scholarship</a>
          <a href="#" className="hover:text-slate-400">Italy Visa Appointment Help</a>
          <a href="#" className="hover:text-slate-400">Without IELTS Scholarships Europe</a>
          <a href="#" className="hover:text-slate-400">PhD Funding USA</a>
          <a href="#" className="hover:text-slate-400">English Proficiency Certificate Acceptability</a>
          <a href="#" className="hover:text-slate-400">DSU Scholarship Pisa</a>
          <a href="#" className="hover:text-slate-400">Turkiye Burslari Application</a>
          <a href="#" className="hover:text-slate-400">Chevening Consultants Lahore</a>
        </div>
        
        <div className="mt-8 text-center text-xs text-slate-600">
          © 2026 Zynome Scientific. All rights reserved. Built with ❤️ for Students.
        </div>
      </div>
    </footer>
  );
};