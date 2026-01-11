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
    <div className="group relative overflow-hidden rounded-2xl bg-black border border-neutral-800 transition-all duration-500 hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative overflow-hidden h-64">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        {/* Floating Tech Tags on Image */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <div
              key={tag.id}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-sm border border-yellow-500/30 transition-all duration-300 hover:border-yellow-500 hover:bg-yellow-500/10"
            >
              {tag.path && (
                <img
                  src={tag.path}
                  alt={tag.name}
                  className="w-4 h-4 rounded"
                />
              )}
              <span className="text-xs font-semibold text-yellow-500">{tag.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-2xl font-bold text-white group-hover:text-yellow-500 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-neutral-400 leading-relaxed text-sm">
          {description}
        </p>

        {/* Sub Descriptions */}
        {subDescription && subDescription.length > 0 && (
          <div className="space-y-2 pt-2">
            {subDescription.map((subDesc, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {subDesc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* View Project Link */}
        {href && (
          <div className="pt-4">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-black bg-yellow-500 rounded-lg transition-all duration-300 hover:bg-yellow-400 hover:gap-3 group/link"
            >
              View Project
              <svg 
                className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* Decorative Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      href: "https://example.com/project1",
      tags: [
        { id: 1, name: "React", path: null },
        { id: 2, name: "Node.js", path: null },
        { id: 3, name: "MongoDB", path: null }
      ]
    },
    {
      id: 2,
      title: "AI Dashboard",
      description: "Intelligent analytics dashboard powered by machine learning algorithms for predictive insights.",
      subDescription: [
        "Real-time data visualization with D3.js",
        "Machine learning models for trend prediction"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      href: "https://example.com/project2",
      tags: [
        { id: 1, name: "Python", path: null },
        { id: 2, name: "TensorFlow", path: null },
        { id: 3, name: "React", path: null }
      ]
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking application with biometric authentication.",
      subDescription: [
        "Cross-platform development with React Native",
        "Bank-grade security with end-to-end encryption"
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      href: "https://example.com/project3",
      tags: [
        { id: 1, name: "React Native", path: null },
        { id: 2, name: "Firebase", path: null }
      ]
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Comprehensive social media tracking and analytics platform for brands and influencers.",
      subDescription: [
        "Track engagement across multiple platforms",
        "AI-powered sentiment analysis and reporting"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      href: "https://example.com/project4",
      tags: [
        { id: 1, name: "Vue.js", path: null },
        { id: 2, name: "Python", path: null }
      ]
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      description: "Personal fitness companion with workout planning and nutrition tracking capabilities.",
      subDescription: [
        "Real-time exercise tracking with wearable integration",
        "Custom meal plans and calorie counting"
      ],
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      href: "https://example.com/project5",
      tags: [
        { id: 1, name: "Flutter", path: null },
        { id: 2, name: "Firebase", path: null }
      ]
    },
    {
      id: 6,
      title: "Project Management Tool",
      description: "Collaborative project management platform with real-time updates and team communication.",
      subDescription: [
        "Kanban boards with drag-and-drop functionality",
        "Integrated chat and file sharing system"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      href: "https://example.com/project6",
      tags: [
        { id: 1, name: "Next.js", path: null },
        { id: 2, name: "PostgreSQL", path: null },
        { id: 3, name: "Socket.io", path: null }
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-neutral-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            My Selected <span className="text-yellow-500">Projects</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-yellow-500 to-transparent rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;