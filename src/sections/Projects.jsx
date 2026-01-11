import React from "react";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-black border border-neutral-800 transition-all duration-500 hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1 flex flex-col h-full">
      {/* Image Section - Fixed aspect ratio container */}
      <div className="relative overflow-hidden bg-neutral-900 w-full" style={{ paddingTop: '60%' }}>
        <img 
          src={image} 
          alt={title} 
          className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-3 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-lg font-bold text-white group-hover:text-yellow-500 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-neutral-400 leading-relaxed text-xs">
          {description}
        </p>

        {/* Sub Descriptions */}
        {subDescription && subDescription.length > 0 && (
          <div className="space-y-1.5 flex-1">
            {subDescription.map((subDesc, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-yellow-500 mt-1.5 flex-shrink-0" />
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {subDesc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {tags.map((tag) => (
            <div
              key={tag.id}
              className="flex items-center gap-1 px-2 py-1 rounded-md bg-neutral-900 border border-yellow-500/30 transition-all duration-300 hover:border-yellow-500 hover:bg-yellow-500/10"
            >
              {tag.path && (
                <img
                  src={tag.path}
                  alt={tag.name}
                  className="w-3 h-3 rounded"
                />
              )}
              <span className="text-xs font-semibold text-yellow-500">{tag.name}</span>
            </div>
          ))}
        </div>

        {/* View Project Link - Always at bottom */}
        {href && (
          <div className="pt-3 mt-auto">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 text-xs font-semibold text-black bg-yellow-500 rounded-lg transition-all duration-300 hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-500/30 group/link"
            >
              <span>View Live Project</span>
              <svg 
                className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* Decorative Corner Accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

// Projects Section
const Projects = () => {
  const myProjects = [
     {
      id: 1,
      title: "Online Marketplace website",
      description: "A Sri Lankan online classifieds and marketplace platform that allows users to buy, sell, and advertise products and services across multiple categories through a modern and user-friendly web experience.",
      subDescription: [
        "Create and manage buy/sell listings across multiple categories",
        "Search, filter, and connect directly with sellers",
        "Secure user accounts with mobile-friendly design",
        "Featured listings, promotions, and SEO optimization"
      ],
      image: "assets/projects/markets.png",
      href: "https://markets.lk/",
      tags: [
        { id: 1, name: "HTML", path: null },
        { id: 2, name: "CSS", path: null },
        { id: 3, name: "Tailwind CSS", path: null },
        { id: 4, name: "PHP", path: null }, 
        { id: 5, name: "JavaScript", path: null },
        { id: 6, name: "Bootstrap", path: null },
        { id: 7, name: "MongoDB", path: null },
        { id: 8, name: "Google APIs", path: null }
      ]
    },
    {
      id: 2,
      title: "Agricultural E-Commerce Platform",
      description: "A Sri Lankan agricultural and farm-based platform that showcases fresh produce, farming services, and sustainable practices through a clean and user-friendly web experience.",
      subDescription: [
        "Showcase farm products, services, and seasonal harvests",
        "Browse offerings and connect directly with the farm",
        "Mobile-friendly design with secure contact features",
        "SEO-optimized content for better online visibility"
      ],
      image: "assets/projects/farm.png",
      href: "https://delwaththafarm.com/",
      tags: [
        { id: 1, name: "HTML", path: null },
        { id: 2, name: "CSS", path: null },
        { id: 3, name: "Tailwind CSS", path: null },
        { id: 4, name: "PHP", path: null },
        { id: 5, name: "JavaScript", path: null },
        { id: 6, name: "Bootstrap", path: null },
        { id: 7, name: "MongoDB", path: null },
        { id: 8, name: "Figma", path: null },
        { id: 9, name: "SEO", path: null }
      ]
    },
    {
      id: 3,
      title: "APP Promote Website",
      description: "A promotional platform designed to introduce and market a family-focused road trip mobile application through a modern and user-friendly web experience.",
      subDescription: [
        "Present key app features and family travel benefits",
        "Encourage app downloads with clear call-to-actions",
        "Mobile-optimized design for app-focused audiences",
        "SEO-driven content to improve app visibility and reach"
      ],
      image: "assets/projects/frt.png",
      href: "https://familyroadtrack.com/",
      tags: [
        { id: 1, name: "HTML", path: null },
        { id: 2, name: "CSS", path: null },
        { id: 3, name: "Tailwind CSS", path: null },
        { id: 4, name: "PHP", path: null },
        { id: 5, name: "React.js", path: null },
        { id: 6, name: "Vite", path: null },
        { id: 7, name: "JavaScript", path: null },
        { id: 8, name: "Bootstrap", path: null },
        { id: 9, name: "Three.js", path: null },
        { id: 10, name: "SEO", path: null }
      ]
    },
    {
      id: 4,
      title: "Premium Fashion & Apparel Online Store",
      description: "An online fashion and apparel platform offering premium clothing and accessories designed for modern individuals seeking quality, style, and comfort.",
      subDescription: [
        "Browse curated collections of men's, women's, and unisex fashion",
        "Shop premium clothing with streamlined product browsing",
        "Secure and responsive design for seamless shopping",
        "Featured styles, new arrivals, and quality craftsmanship"
      ],
      image: "assets/projects/aura.png",
      href: "https://theauraclothing.com/",
      tags: [
        { id: 1, name: "HTML", path: null },
        { id: 2, name: "CSS", path: null },
        { id: 3, name: "Tailwind CSS", path: null },
        { id: 4, name: "PHP", path: null },
        { id: 5, name: "React.js", path: null },
        { id: 6, name: "Vite", path: null },
        { id: 7, name: "JavaScript", path: null },
        { id: 8, name: "Bootstrap", path: null },
        { id: 9, name: "Three.js", path: null },
        { id: 10, name: "SEO", path: null }
      ]
    },
    {
      id: 5,
      title: "Premium Hotel Management system",
      description: "A comprehensive web-based hotel management system for Grand Guardian Hotel, Rathnapura, covering front office, back office, inventory, logistics, and accounts, delivered with a secure and user-friendly interface.",
      subDescription: [
        "Manage room bookings, reservations, and front office operations",
        "Handle stores, purchasing, inventory, and supply chain efficiently",
        "Secure, responsive interface compliant with Sri Lankan data standards",
        "Production-ready MVP built within 3 months (June–September 2025)"
      ],
      image: "assets/projects/hgg.png",
      href: "https://hotelgrandguardian.org/",
      tags: [
        { id: 1, name: "HTML", path: null },
        { id: 2, name: "CSS", path: null },
        { id: 3, name: "JavaScript", path: null },
        { id: 4, name: "React.js", path: null },
        { id: 5, name: "Node.js", path: null },
        { id: 6, name: "Express.js", path: null },
        { id: 7, name: "MySQL", path: null },
        { id: 8, name: "REST API", path: null },
        { id: 9, name: "WebSockets", path: null },
        { id: 10, name: "Cloud Hosting", path: null }
      ]
    },
    {
      id: 6,
      title: "Web-Based POS System",
      description: "A secure and efficient web-based Point of Sale (POS) system for businesses, managing sales, inventory, and transactions through a modern, user-friendly interface.",
      subDescription: [
        "Handle sales, invoices, and payment processing seamlessly",
        "Manage inventory, stock levels, and product categories",
        "Responsive design accessible on desktop and mobile devices",
        "Optimized for performance, security, and easy business operations"
      ],
      image: "assets/projects/cm.png",
      href: "https://chillmount.org/",
      tags: [
        { id: 1, name: "HTML", path: null },
        { id: 2, name: "CSS", path: null },
        { id: 3, name: "JavaScript", path: null },
        { id: 4, name: "React.js", path: null },
        { id: 5, name: "PHP", path: null },
        { id: 6, name: "MySQL", path: null },
        { id: 7, name: "REST API", path: null }
      ]
    },
    {
      id: 7,
      title: "Daily Health Web Platform",
      description: "A web-based health and wellness platform providing daily tips, articles, and resources to promote healthy living through a modern and user-friendly interface.",
      subDescription: [
        "Access daily health tips, nutrition advice, and wellness articles",
        "Browse categories like fitness, diet, mental health, and lifestyle",
        "Mobile-friendly design for convenient access on any device",
        "SEO-optimized content to enhance reach and audience engagement"
      ],
      image: "assets/projects/dh.png",
      href: "https://dailyhealth.lk/",
      tags: [
        { id: 1, name: "HTML", path: null },
        { id: 2, name: "CSS", path: null },
        { id: 3, name: "JavaScript", path: null },
        { id: 4, name: "PHP", path: null },
        { id: 5, name: "MySQL", path: null },
        { id: 6, name: "REST API", path: null }
      ]
    },
    {
      id: 8,
      title: "Daily Health Shop Online Store",
      description: "An online health and wellness shop offering a range of products such as supplements, vitamins, and natural health goods through a modern and user-friendly web experience.",
      subDescription: [
        "Browse and purchase health supplements and wellness products",
        "Secure shopping with easy product discovery and checkout",
        "Responsive design for seamless use on any device",
        "SEO-optimized content to enhance visibility and reach"
      ],
      image: "assets/projects/hgs.png",
      href: "https://dailyhealth.lk/dailyhealthshop/",
      tags: [
        { id: 1, name: "HTML", path: null },
        { id: 2, name: "CSS", path: null },
        { id: 3, name: "JavaScript", path: null },
        { id: 4, name: "PHP", path: null },
        { id: 5, name: "MySQL", path: null },
        { id: 6, name: "Google API", path: null },
        { id: 7, name: "REST API", path: null }
      ]
    }
  ];

  return (
    <section className="c-space section-spacing" id="projects">
      <h2 className="text-heading">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {myProjects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
      
      {/* Unpublished Projects Note */}
      <div className="mt-8 p-6 rounded-xl bg-neutral-900 border border-neutral-800">
        <div className="flex items-start gap-3">
          <svg className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Additional Projects</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              I have completed <span className="text-yellow-500 font-semibold">+25 additional projects</span> that are currently unpublished and under confidentiality agreements. These projects include enterprise solutions, custom web applications, and proprietary systems that I am not authorized to share publicly at this time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;