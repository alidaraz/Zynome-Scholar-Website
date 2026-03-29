import React, { useState, useRef, useEffect } from 'react';

type Message = {
  text: string;
  sender: 'bot' | 'user';
  link?: string;
  linkText?: string;
};

// 🧠 THE "FOOLPROOF" KNOWLEDGE BASE
// Expanded with the Ultimate Keyword List for maximum intent coverage.
const KNOWLEDGE_BASE = [
  // 1. GREETINGS & DISCOVERY
  {
    keywords: ["hi", "hello", "hey", "salam", "morning", "evening", "start", "greetings", "help", "find scholarship"],
    response: "Assalam-o-Alaikum! 👋 I am Zynome AI. I can check your eligibility, help with SOPs, or guide you to fully funded scholarships. What is your goal today?",
    link: null,
    linkText: null
  },
  
  // 2. BRAND & PLATFORM INTENT
  {
    keywords: ["zynome", "ali daraz", "sohail khan", "founder", "company", "scientific", "life sciences", "about us", "who are you", "trust", "real", "legit", "scam", "fake"],
    response: "Zynome Scholar is a registered academic decision engine backed by Zynome Scientific & Life Sciences Enterprises. We bridge talent with opportunity, led by founders Ali Daraz and Sohail Khan. Check our 'Alumni' section for real success stories.",
    link: "#founders",
    linkText: "Meet the Founders"
  },

  // 3. PRICING & SERVICES (GENERAL)
  {
    keywords: ["price", "cost", "charge", "fee", "money", "paid", "package", "dollar", "rs", "rupee", "buy", "service", "premium"],
    response: "We have student-friendly plans: \n1. SOP/CV Review: $25 (Best Seller) \n2. Visa Mock Interview: $40 \n3. 'Done-For-You' Application: $199 (We apply for you).",
    link: "#services",
    linkText: "View Pricing Table"
  },

  // 4. DONE-FOR-YOU SERVICE (HIGH TICKET)
  {
    keywords: ["done for you", "apply for me", "full service", "guaranteed", "we apply", "expert handling", "fill form", "submission", "apply on my behalf", "done-for-you"],
    response: "Our 'Done-For-You' service ($199) is our premium offering. We handle everything: form filling, document upload, and emails to professors for 3 universities.",
    link: "https://wa.me/message/ID5GXUUKX36CM1",
    linkText: "Book Premium Service"
  },

  // 5. SOP, CV & DOCUMENTS
  {
    keywords: ["sop", "essay", "statement", "motivation", "letter", "writing", "review", "edit", "personal statement", "cv", "resume", "plagiarism", "ats", "proposal", "recommendation"],
    response: "Your SOP is the #1 reason for rejection. Don't risk it! Our PhD scholars will fix your grammar, flow, and scientific tone ($25). We also optimize CVs for ATS.",
    link: "https://wa.me/message/ID5GXUUKX36CM1",
    linkText: "Book SOP Polish"
  },

  // 6. VISA & INTERVIEW PREP
  {
    keywords: ["visa", "interview", "embassy", "bank", "statement", "funds", "mock", "checklist", "immigration", "appointment"],
    response: "The Visa Interview is the final boss. We offer a 30-minute Mock Interview ($40) with former scholars to prep you for tricky questions and provide a document checklist.",
    link: "https://wa.me/message/ID5GXUUKX36CM1",
    linkText: "Book Mock Interview"
  },

  // 7. ENGLISH LANGUAGE (IELTS/EPC)
  {
    keywords: ["ielts", "toefl", "english", "language", "epc", "proficiency", "without ielts", "moi", "certificate", "duolingo", "medium of instruction"],
    response: "Many universities in Italy and Hungary accept the 'English Proficiency Certificate' (EPC) from your previous university instead of IELTS. Our Calculator checks this for you!",
    link: "#eligibility",
    linkText: "Check Without IELTS"
  },

  // 8. ELIGIBILITY & CGPA
  {
    keywords: ["cgpa", "gpa", "grade", "marks", "low", "percent", "2.5", "3.0", "score", "eligibility", "chance", "probability", "profile"],
    response: "Low CGPA? Don't worry. You can cover it with a strong SOP and Research Proposal. If your CGPA is below 2.5, we recommend focusing on Hungary or China.",
    link: "#eligibility",
    linkText: "Calculate Success Chance"
  },

  // 9. SCHOLARSHIP TYPES (FULLY FUNDED)
  {
    keywords: ["fully funded", "free", "scholarship", "stipend", "waiver", "allowance", "tuition", "100%", "fund", "grant", "financial aid"],
    response: "Fully Funded means: 100% Free Tuition, Monthly Cash Stipend (€500-€1200), and often Free Accommodation. We specialize in finding these opportunities.",
    link: "#signup",
    linkText: "Find Free Scholarships"
  },

  // 10. DEGREE LEVELS & FIELDS
  {
    keywords: ["masters", "ms", "msc", "phd", "doctoral", "postdoc", "fellowship", "undergraduate", "bachelor", "internship", "research", "stem", "biology", "engineering", "data science"],
    response: "We cover all levels (Undergrad to Postdoc) and fields (STEM, Arts, Business). Just select your opportunity type in the search bar to find matches.",
    link: "#top",
    linkText: "Search Opportunities"
  },

  // 11. DESTINATIONS
  {
    keywords: ["italy", "germany", "uk", "usa", "canada", "australia", "china", "hungary", "turkey", "europe", "asia", "abroad", "foreign", "study in"],
    response: "Italy and Germany offer the most 'Fully Funded' options (Free Tuition + Stipend). USA/UK are competitive but prestigious. We can help you apply to any of these.",
    link: "#services",
    linkText: "Start Application"
  },

  // 12. RESOURCES & LEARNING
  {
    keywords: ["video", "youtube", "tutorial", "guide", "resource", "pdf", "template", "checklist", "workshop", "webinar", "learn", "masterclass"],
    response: "We have a library of free resources: Winning SOP Templates, Visa Checklists, and our Masterclass videos on YouTube.",
    link: "#resources",
    linkText: "View Free Resources"
  },

  // 13. DIVERSITY & SPECIAL GROUPS
  {
    keywords: ["women", "female", "minority", "refugee", "disability", "developing country", "diversity"],
    response: "We encourage diversity! Many scholarships specifically target women in STEM and students from developing countries. Our AI highlights these opportunities.",
    link: "#top",
    linkText: "Search Now"
  },

  // 14. DEADLINES
  {
    keywords: ["deadline", "date", "late", "time", "when", "schedule", "calendar", "timeline", "last date"],
    response: "Deadlines vary by country. Italy usually opens March-May. Germany is year-round. Hungary closes in Jan. Don't wait—preparing documents takes 2 months!",
    link: null,
    linkText: null
  },

  // 15. CONTACT & SUPPORT
  {
    keywords: ["contact", "call", "number", "whatsapp", "human", "person", "talk", "chat", "support", "help"],
    response: "You can chat directly with our expert counselors or even our founders on WhatsApp for personalized support.",
    link: "https://wa.me/message/ID5GXUUKX36CM1",
    linkText: "Chat on WhatsApp"
  },

  // 16. NONSENSE / FALLBACK
  {
    keywords: ["joke", "stupid", "idiot", "weather", "love", "marry", "politics", "song", "dance", "game"],
    response: "I am a highly trained Academic AI focused on your career. Let's get you a scholarship instead of chatting! 😉 What are your grades?",
    link: null,
    linkText: null
  }
];

// One Click Questions List
const QUICK_QUESTIONS = [
  "🇮🇹 Italy Scholarships",
  "🇩🇪 DAAD Germany Guide",
  "✍️ SOP Polish ($25)",
  "🚀 Done-For-You App ($199)",
  "🛂 Visa Prep Help ($40)",
  "💰 Fully Funded Options"
];

const generateResponse = (input: string): Message => {
  const lower = input.toLowerCase();

  // Find the first matching category
  for (const category of KNOWLEDGE_BASE) {
    if (category.keywords.some(k => lower.includes(k))) {
      return { 
        text: category.response, 
        sender: 'bot', 
        link: category.link || undefined, 
        linkText: category.linkText || undefined 
      };
    }
  }

  // Fallback for completely unknown inputs
  return { 
    text: "That's a specific academic question. To give you the best advice, I need to see your CV. Can you send it to our team on WhatsApp?", 
    sender: 'bot', 
    link: "https://wa.me/message/ID5GXUUKX36CM1", 
    linkText: "Send CV on WhatsApp" 
  };
};

export const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! 🎓 I am Zynome AI. Ask me anything about Scholarships, Visas, or SOPs.", sender: 'bot' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { text: text, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Simulate thinking delay
    setTimeout(() => {
      const botResponse = generateResponse(text);
      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* TOGGLE BUTTON */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-28 right-6 z-[100] w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 ${isOpen ? 'bg-indigo-600 rotate-90' : 'bg-white text-indigo-600'}`}
      >
        {isOpen ? <span className="text-white text-2xl font-bold">✕</span> : <span className="text-3xl">🤖</span>}
        
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
          </span>
        )}
      </button>

      {/* CHAT WINDOW */}
      {isOpen && (
        <div className="fixed bottom-44 right-6 z-[100] w-[85vw] md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-fade-in-up h-[550px] max-h-[70vh]">
          
          {/* Header */}
          <div className="bg-slate-900 p-4 flex items-center gap-3 shadow-md">
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-xl shadow-inner border-2 border-slate-700">🤖</div>
            <div>
              <h3 className="text-white font-bold text-sm">Zynome AI Assistant</h3>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-slate-400 text-xs">Always Online</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 bg-slate-50 p-4 overflow-y-auto space-y-4 custom-scrollbar">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.sender === 'user' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-white text-slate-700 rounded-tl-none border border-slate-200'}`}>
                  {msg.text}
                  {msg.link && (
                    <a href={msg.link} target={msg.link.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer" className="block mt-3 bg-slate-100 text-indigo-700 text-center py-2 rounded-lg font-bold hover:bg-slate-200 transition-colors border border-indigo-100">
                      {msg.linkText} →
                    </a>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions / One Click Buttons */}
          <div className="p-2 bg-white border-t border-slate-100 overflow-x-auto flex gap-2 no-scrollbar scroll-smooth">
            {QUICK_QUESTIONS.map((q, i) => (
              <button 
                key={i} 
                onClick={() => sendMessage(q)}
                className="flex-shrink-0 bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-2 rounded-lg border border-indigo-100 hover:bg-indigo-100 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleFormSubmit} className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input 
              ref={inputRef}
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about SOP, Visa, Price..."
              className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 placeholder-slate-400"
            />
            <button type="submit" className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors shadow-lg transform active:scale-95">
              ➤
            </button>
          </form>
        </div>
      )}
    </>
  );
};