import React from 'react';
import { twMerge } from 'tailwind-merge';

// Sri Lankan client testimonials data based on actual projects
const reviews = [
  {
    name: "Dinesh Jayawardena",
    username: "@markets_lk",
    body: "The marketplace platform exceeded all expectations! User-friendly interface, powerful search capabilities, and seamless mobile experience. Our listings have grown by 300% in just 3 months.",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dinesh",
    project: "Online Marketplace - Markets.lk",
    rating: 5,
    company: "Markets.lk"
  },
  {
    name: "Sunil Delwaththa",
    username: "@delwatthafarm",
    body: "Transformed our farm's online presence completely! The website beautifully showcases our fresh produce and the SEO optimization brought us customers from across Sri Lanka. Outstanding work!",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sunil",
    project: "Agricultural E-Commerce Platform",
    rating: 5,
    company: "Delwaththa Farm"
  },
  {
    name: "Anjali Perera",
    username: "@familyroadtrack",
    body: "The promotional website for our Family Road Track app is stunning! The Three.js animations and modern design perfectly capture our brand essence. App downloads increased by 250%!",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali",
    project: "App Promotional Website",
    rating: 5,
    company: "Family Road Track"
  },
  {
    name: "Kasun Silva",
    username: "@theauraclothing",
    body: "Our fashion store looks absolutely premium! The React-based design is sleek, fast, and converts visitors into customers. The developer truly understood our brand vision.",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kasun",
    project: "Fashion E-Commerce Store",
    rating: 5,
    company: "The Aura Clothing"
  },
  {
    name: "Chaminda Rathnayake",
    username: "@hotelgrandguardian",
    body: "The comprehensive hotel management system revolutionized our operations! From front office to inventory management, everything is integrated seamlessly. Delivered on time and within budget!",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chaminda",
    project: "Hotel Management System",
    rating: 5,
    company: "Grand Guardian Hotel"
  },
  {
    name: "Nadeeka Fernando",
    username: "@chillmount",
    body: "The web-based POS system has streamlined our entire business workflow. Inventory tracking, sales processing, and reporting are now effortless. Highly recommend!",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nadeeka",
    project: "Web-Based POS System",
    rating: 5,
    company: "ChillMount"
  },
  {
    name: "Dr. Lakshitha Bandara",
    username: "@dailyhealth",
    body: "Our health platform is now a trusted resource for thousands of Sri Lankans! The SEO optimization and user-friendly design have made us a leading health information website.",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lakshitha",
    project: "Daily Health Web Platform",
    rating: 5,
    company: "Daily Health"
  },
  {
    name: "Harini Wickramasinghe",
    username: "@dailyhealthshop",
    body: "The online shop integration with our health platform works flawlessly! Secure checkout, easy product management, and excellent API integration with payment gateways.",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Harini",
    project: "Health Products E-Commerce",
    rating: 5,
    company: "Daily Health Shop"
  },
  {
    name: "Roshan Gunasekara",
    username: "@roshang_tech",
    body: "Developed a custom inventory management system for our electronics business. The real-time tracking and automated reporting features have saved us countless hours weekly.",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Roshan",
    project: "Inventory Management System",
    rating: 5,
    company: "TechHub Electronics"
  },
  {
    name: "Sanduni Dissanayake",
    username: "@sandunid_edu",
    body: "The school management portal is exactly what we needed! Student records, attendance tracking, and parent communication all in one place. Parents love the mobile-friendly design!",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanduni",
    project: "School Management Portal",
    rating: 5,
    company: "Colombo International School"
  },
  {
    name: "Nuwan Rajapaksa",
    username: "@nuwan_restaurant",
    body: "Our restaurant's online ordering system is a game-changer! Seamless integration with our kitchen operations and the real-time order tracking keeps customers happy and engaged.",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nuwan",
    project: "Restaurant Online Ordering System",
    rating: 5,
    company: "Spice Garden Restaurant"
  },
  {
    name: "Dilini Mendis",
    username: "@dilini_realestate",
    body: "The real estate listing platform has transformed how we showcase properties! Virtual tours, advanced search filters, and mobile optimization brought us 400% more leads!",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dilini",
    project: "Real Estate Platform",
    rating: 5,
    company: "Metro Properties"
  },
  {
    name: "Tharindu Samaraweera",
    username: "@tharindu_logistics",
    body: "The logistics tracking system provides complete visibility of our fleet and deliveries. Real-time GPS integration and automated route optimization reduced our costs by 30%!",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tharindu",
    project: "Logistics Management System",
    rating: 5,
    company: "Swift Logistics Lanka"
  },
  {
    name: "Ishara Perera",
    username: "@ishara_wellness",
    body: "Our spa booking platform is elegant and efficient! Customers can easily book appointments, choose services, and make payments online. Bookings increased by 200% in the first month!",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ishara",
    project: "Spa Booking Platform",
    rating: 5,
    company: "Serenity Spa & Wellness"
  },
  {
    name: "Ravindu Kumara",
    username: "@ravindu_fitness",
    body: "The gym membership management system is fantastic! Member check-ins, class scheduling, and payment processing all automated. Staff efficiency has improved dramatically!",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ravindu",
    project: "Gym Management System",
    rating: 5,
    company: "PowerHouse Fitness"
  },
  {
    name: "Nethmi Jayasuriya",
    username: "@nethmi_travel",
    body: "Our travel agency website is beautiful and functional! Package browsing, custom itinerary builder, and secure booking system. International inquiries have tripled since launch!",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nethmi",
    project: "Travel Agency Platform",
    rating: 5,
    company: "Island Escapes Travel"
  }
];

const firstRow = reviews.slice(0, 5);
const secondRow = reviews.slice(5, 11);
const thirdRow = reviews.slice(11);

const Marquee = ({ children, reverse = false, pauseOnHover = false, className = "" }) => {
  return (
    <div
      className={twMerge(
        "flex w-full overflow-hidden [--duration:40s]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex min-w-full shrink-0 items-center justify-around gap-4 py-4 animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]",
          reverse && "animate-marquee-reverse"
        )}
      >
        {children}
      </div>
      <div
        className={twMerge(
          "flex min-w-full shrink-0 items-center justify-around gap-4 py-4 animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]",
          reverse && "animate-marquee-reverse"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
};

const ReviewCard = ({ img, name, username, body, project, rating, company }) => {
  return (
    <figure
      className="relative h-full w-80 cursor-pointer overflow-hidden rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 hover:border-yellow-500/40"
    >
      <div className="flex flex-row items-center gap-3 mb-4">
        <div className="relative">
          <img
            className="rounded-full ring-2 ring-yellow-500/30"
            width="48"
            height="48"
            alt={name}
            src={img}
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-neutral-900"></div>
        </div>
        <div className="flex flex-col flex-1">
          <figcaption className="text-base font-semibold text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-yellow-500/60">{username}</p>
          {company && (
            <p className="text-xs text-neutral-500 mt-0.5">{company}</p>
          )}
        </div>
        <div className="flex gap-0.5">
          {[...Array(rating)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
      </div>
      
      <blockquote className="text-sm text-gray-300 leading-relaxed mb-3">
        "{body}"
      </blockquote>
      
      <div className="flex items-center gap-2 mt-4 pt-3 border-t border-yellow-500/10">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
          {project}
        </span>
      </div>
      
      {/* Verified Badge */}
      <div className="absolute top-4 right-4">
        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 border border-green-500/30">
          <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-xs text-green-400 font-medium">Verified</span>
        </div>
      </div>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="w-full py-20">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee var(--duration) linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse var(--duration) linear infinite;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-yellow-500 font-semibold text-sm">Client Testimonials</span>
          </div>
          
          <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent mb-4">
            Hear From My Clients
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real feedback from real clients across Sri Lanka. See what business owners and entrepreneurs have to say about working with me.
          </p>
        </div>
        
        <div className="relative flex flex-col items-center justify-center w-full overflow-hidden gap-4">
          <Marquee pauseOnHover className="[--duration:35s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          
          <Marquee reverse pauseOnHover className="[--duration:35s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          
          <Marquee pauseOnHover className="[--duration:35s]">
            {thirdRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          
          <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-black via-black/80 to-transparent"></div>
        </div>
        
        <div className="text-center mt-16 space-y-4">
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500">35+</div>
              <div className="text-sm text-gray-500 mt-1">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-neutral-800"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500">40+</div>
              <div className="text-sm text-gray-500 mt-1">Projects Completed</div>
            </div>
            
          </div>
          
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Trusted by businesses across Sri Lanka since 2022
          </p>
        </div>
      </div>
    </div>
  );
}