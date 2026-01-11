import React from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

const Footer = () => {
  const contactInfo = {
    email: "sachithgamage2310@gmail.com",
    github: "github.com/Sachithgamage12",
    linkedin: "linkedin.com/in/sachithgamage",
    phone: "+94 74-177-3588"
  };

  const socialLinks = [
    {
      name: "Email",
      href: `mailto:${contactInfo.email}`,
      icon: Mail,
      color: "hover:text-red-400"
    },
    {
      name: "GitHub",
      href: `https://${contactInfo.github}`,
      icon: Github,
      color: "hover:text-purple-400"
    },
    {
      name: "LinkedIn",
      href: `https://${contactInfo.linkedin}`,
      icon: Linkedin,
      color: "hover:text-blue-400"
    },
    {
      name: "Phone",
      href: `tel:${contactInfo.phone}`,
      icon: Phone,
      color: "hover:text-green-400"
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-neutral-900 to-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Decorative top border */}
        <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Sachith Gamage
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Building innovative solutions with passion and precision. Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
<div className="space-y-4">
  <h4 className="text-lg font-semibold text-neutral-200">Quick Links</h4>
  <div className="flex flex-col space-y-2">
    <a href="#home" className="text-neutral-400 hover:text-cyan-400 transition-colors text-sm">
      Home
    </a>
    <a href="#about" className="text-neutral-400 hover:text-cyan-400 transition-colors text-sm">
      About
    </a>
    <a href="#projects" className="text-neutral-400 hover:text-cyan-400 transition-colors text-sm">
      Projects
    </a>
    <a href="#experiences" className="text-neutral-400 hover:text-cyan-400 transition-colors text-sm">
      Experiences
    </a>
    <a href="#contact" className="text-neutral-400 hover:text-cyan-400 transition-colors text-sm">
      Contact
    </a>
  </div>
</div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-neutral-200">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-neutral-400 hover:text-cyan-400 transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="break-all">{contactInfo.email}</span>
              </a>
              <a 
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-2 text-neutral-400 hover:text-cyan-400 transition-colors text-sm group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{contactInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-neutral-800 text-neutral-400 ${social.color} transition-all hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20`}
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-neutral-500 text-sm text-center md:text-right">
            <p>© 2023-{currentYear} Sachith Gamage. All rights reserved.</p>
            <p className="text-xs mt-1 text-neutral-600">
              Crafted with passion & innovation
            </p>
          </div>
        </div>

        {/* Subtle glow effect */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-cyan-500/5 blur-3xl pointer-events-none" />
      </div>
    </footer>
  );
};

export default Footer;