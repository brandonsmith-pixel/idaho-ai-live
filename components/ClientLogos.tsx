"use client";

import { useEffect, useRef } from 'react';

export default function ClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Placeholder logos - in production these would be actual client logos
  const clients = [
    { name: "Boise Medical Group", industry: "Healthcare" },
    { name: "Sun Valley Resorts", industry: "Tourism" },
    { name: "Idaho Potato Co", industry: "Agriculture" },
    { name: "Coeur d'Alene Realty", industry: "Real Estate" },
    { name: "Gem State Construction", industry: "Construction" },
    { name: "Mountain View Dental", industry: "Healthcare" },
    { name: "Idaho First Bank", industry: "Finance" },
    { name: "Snake River Logistics", industry: "Transportation" }
  ];

  // Duplicate for infinite scroll
  const allClients = [...clients, ...clients];

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    let animationId: number;
    let scrollPos = 0;

    const animate = () => {
      scrollPos += 0.5;
      if (scrollPos >= scroll.scrollWidth / 2) {
        scrollPos = 0;
      }
      scroll.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="text-center text-gray-600 font-semibold mb-8">
          Trusted by 50+ Idaho Businesses
        </p>
        
        <div className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex space-x-12 overflow-x-hidden"
          >
            {allClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-gray-50 px-8 py-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="text-center">
                  <div className="w-32 h-12 bg-gray-200 rounded mb-2 flex items-center justify-center">
                    <span className="text-gray-500 font-bold text-sm">
                      {client.name.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">{client.industry}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
        
        <p className="text-center text-sm text-gray-500 mt-6">
          <a href="#" className="text-blue-700 hover:underline">See all success stories →</a>
        </p>
      </div>
    </section>
  );
}