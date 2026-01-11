import { useRef, useState, useEffect } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState("languages");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = {
    languages: ["PHP", "JavaScript", "Java", "SQL", "HTML5", "CSS3"],
    frontend: ["React.js", "Next.js", "Angular", "TypeScript", "Bootstrap", "Tailwind"],
    backend: ["Node.js", "Express.js", "PHP MVC", "REST APIs", "Google APIs"],
    database: ["MySQL", "MariaDB", "MongoDB", "Firebase", "SQLite"],
    tools: ["Git", "Docker", "AWS", "VS Code", "Figma", "GA4", "AdSense"],
  };

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 - Enhanced Hero Introduction */}
        <div className={`flex items-end grid-default-color grid-1 transition-all duration-1000 relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <img
  src="assets/My Image.jpg"
  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-auto sm:w-44 md:w-56 md:top-6 lg:w-72 lg:top-8 transition-transform duration-700 hover:scale-105 md:hover:scale-110 lg:hover:scale-105 rounded-lg shadow-2xl"
/>
          <div className="z-10 space-y-3">
            <p className="headtext animate-fade-in">Hi, I'm Sachith Gamage</p>
            <p className="subtext leading-relaxed">
              Full Stack Web Developer with <span className="text-yellow-500 font-semibold">3+ years</span> of professional experience designing, developing, and deploying scalable web applications.
 Using  <span className="text-yellow-500 font-semibold">modern AI technologies </span>, I deliver projects quickly and efficiently with high accuracy and minimal development time, ensuring every application is reliable, innovative, and production-ready.<span className="text-yellow-500 font-semibold">Diploma in Software Engineering completed</span>, with extensive professional experience in web application development.
            </p>
           
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 - Interactive Tech Skills Showcase */}
        <div className={`grid-default-color grid-2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col h-full p-4">
            <p className="text-2xl font-bold mb-4 text-center">Tech Stack</p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {Object.keys(skillCategories).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveSkillCategory(category)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-300 ${
                    activeSkillCategory === category
                      ? 'bg-white text-indigo-900 shadow-lg scale-105'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="flex flex-wrap gap-2 justify-center items-center h-full animate-fade-in">
                {skillCategories[activeSkillCategory].map((skill, idx) => (
                  <span
                    key={skill}
                    className="px-3 py-2 text-xs bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg backdrop-blur-sm border border-white/30 hover:border-white/60 hover:scale-110 transition-all duration-300 shadow-lg"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid 3 - Location & Availability */}
        <div className={`grid-black-color grid-3 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="z-10 w-[55%] space-y-2">
            <p className="headtext">Sri Lanka 🇱🇰</p>
            <p className="subtext">
              Open to work worldwide and ready to relocate
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400">Available for Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-gray-400">Visa Sponsorship Welcome</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-xs text-gray-400">Ready to Relocate</span>
              </div>
            </div>
          </div>
          <figure className="absolute left-[30%] top-[10%] hover:scale-110 transition-transform duration-500">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 - Call to Action with Email */}
        <div className={`grid-special-color grid-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col items-center justify-center gap-4 size-full p-4">
            <div className="text-center space-y-2">
              <p className="headtext">Let's Build Something Great</p>
              <p className="text-sm text-gray-300 max-w-xs">
                Specializing in end-to-end delivery, API integration & performance optimization
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => {
                  navigator.clipboard.writeText('sachithgamage2310@gmail.com');
                  const btn = event.target.closest('button');
                  const originalText = btn.textContent;
                  btn.textContent = 'Email Copied!';
                  setTimeout(() => {
                    btn.textContent = originalText;
                  }, 2000);
                }}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Copy My Email
              </button>
              <a 
                href="mailto:sachithgamage2310@gmail.com"
                className="text-xs text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                sachithgamage2310@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Grid 5 - Comprehensive Tech Arsenal */}
        <div className={`grid-default-color grid-5 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="z-10 w-full md:w-[55%] space-y-3 p-4">
            <p className="headText">Professional Capabilities</p>
            <div className="space-y-3 text-xs">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-semibold">Frontend Excellence</span>
                </div>
                <p className="text-gray-400 pl-4">React, Next.js, Angular, TypeScript, Tailwind CSS</p>
              </div>
              
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white font-semibold">Backend Mastery</span>
                </div>
                <p className="text-gray-400 pl-4">Node.js, Express, PHP, REST APIs, Authentication</p>
              </div>
              
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-white font-semibold">Database Expert</span>
                </div>
                <p className="text-gray-400 pl-4">MySQL, MongoDB, Firebase, MariaDB</p>
              </div>
              
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-white font-semibold">DevOps & Analytics</span>
                </div>
                <p className="text-gray-400 pl-4">Git, Docker, AWS, GA4, Domain Setup, Hosting</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125 hover:scale-130 transition-transform duration-500">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;