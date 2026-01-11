import React, { useEffect, useRef, useState } from "react";

const experiences = [
  {
    date: "June 2022 - June 2024",
    title: "Laya Beach Wadduwa",
    job: "Web Developer & Graphic Designer",
    contents: [
      "Developed and launched the official hotel website, improving online presence and customer engagement.",
      "Designed and implemented a hotel billing and management system to streamline daily operations.",
      "Built admin dashboards for reservation management, guest data, and reporting.",
      "Designed UI/UX assets, banners, and marketing visuals to enhance brand consistency and usability."
    ]
  },
  {
    date: "June 2024 - Dec 2025",
    title: "UcodeX Software Company",
    job: "Full Stack Web Developer",
    contents: [
      "Developed secure full-stack e-commerce platforms with authentication, payment workflows, and admin dashboards.",
      "Designed and implemented e-channeling platforms enabling online appointment scheduling and user management.",
      "Developed POS systems supporting billing, inventory control, sales tracking, and reporting.",
      "Created dynamic dashboards and analytics to improve operational efficiency and business decision making.",
      "Integrated third-party APIs, payment gateways, Google Analytics (GA4) for traffic and performance tracking, and Google AdSense for website monetization.",
      "Optimized website performance, SEO, and page load speed, improving user engagement and retention."
    ]
  },
  {
    date: "Dec 2025 - Present",
    title: "Freelance",
    job: "Full Stack Web Developer",
    contents: [
      "Designed and developed a complete Hotel Management System with role-based dashboards for reservations, billing, guest management, and reporting.",
      "Delivered end-to-end solution including backend logic, database design, and responsive frontend interfaces.",
      "Optimized system performance and ensured mobile and desktop compatibility.",
      "Deployed production system with domain and hosting setup."
    ]
  }
];

const Timeline = ({ data }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      const start = windowHeight * 0.1;
      const end = windowHeight * 0.5;
      
      let progress = 0;
      if (elementTop < start) {
        progress = Math.min((start - elementTop) / (elementHeight - end + start), 1);
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full py-20 px-4"id="experiences">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-20 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          My Work Experience
        </h2>
        
        <div className="relative pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-32 md:gap-10 group"
              style={{
                opacity: Math.min(1, scrollProgress * 3 - index * 0.3),
                transform: `translateY(${Math.max(0, 50 - scrollProgress * 200 + index * 30)}px)`,
                transition: 'all 0.5s ease-out'
              }}
            >
              <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
                <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-slate-900 border-2 border-purple-500/50 group-hover:border-purple-400 transition-all duration-300">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 group-hover:scale-125 transition-transform duration-300" />
                </div>
                
                <div className="hidden md:flex flex-col gap-2 md:pl-20 text-left">
                  <h3 className="text-lg font-semibold text-purple-400">{item.date}</h3>
                  <h3 className="text-3xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">{item.title}</h3>
                  <h3 className="text-xl text-slate-400">{item.job}</h3>
                </div>
              </div>

              <div className="relative w-full pl-20 pr-4 md:pl-4">
                <div className="block mb-6 md:hidden">
                  <h3 className="text-sm font-semibold text-purple-400 mb-2">{item.date}</h3>
                  <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                  <h3 className="text-lg text-slate-400">{item.job}</h3>
                </div>
                
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 group-hover:border-purple-500/50 group-hover:shadow-xl group-hover:shadow-purple-500/10 transition-all duration-300">
                  {item.contents.map((content, idx) => (
                    <div key={idx} className="flex gap-3 mb-4 last:mb-0">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                      <p className="text-slate-300 leading-relaxed">
                        {content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          <div className="absolute md:left-1 left-1 top-0 w-[2px] h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-700 to-transparent" />
            <div 
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-transparent rounded-full transition-all duration-500"
              style={{
                height: `${scrollProgress * 100}%`,
                opacity: Math.min(1, scrollProgress * 2)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="w-full">
      <Timeline data={experiences} />
    </div>
  );
}