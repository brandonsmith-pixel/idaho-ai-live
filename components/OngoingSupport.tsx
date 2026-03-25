import { Headphones, BarChart3, Users, Zap, Clock, Shield } from 'lucide-react';

export default function OngoingSupport() {
  const services = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 AI Monitoring",
      description: "Your AI never sleeps. Neither does our monitoring. Real-time alerts and proactive fixes.",
      features: ["System health dashboard", "Performance metrics", "Instant notifications"]
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Dedicated Success Manager",
      description: "Your personal AI strategist. Monthly check-ins, quarterly reviews, always available.",
      features: ["Direct phone line", "Weekly reports", "Strategic planning"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Continuous Optimization",
      description: "AI gets smarter over time. We ensure yours keeps improving month after month.",
      features: ["Model retraining", "A/B testing", "ROI optimization"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Unlimited Updates",
      description: "Business changes. Your AI adapts. Unlimited tweaks and adjustments included.",
      features: ["Process updates", "New integrations", "Feature additions"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Training",
      description: "Your team becomes AI-fluent. Ongoing training ensures maximum adoption.",
      features: ["Monthly workshops", "Video library", "Best practices"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Stay protected and compliant. We handle security so you can focus on growth.",
      features: ["Security audits", "Compliance updates", "Data backups"]
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-900/50 text-blue-300 px-4 py-2 rounded-full mb-6 text-sm font-medium">
            <Headphones className="w-4 h-4" />
            <span>Your AI Team, Not Just Another Vendor</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            We're Your <span className="text-blue-400">AI Department</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Think of us as your in-house AI team. Always improving, always available, 
            always focused on your success. No retainers, just results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-all group">
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            All Support Included. No Surprises.
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            One transparent price. Unlimited support. Your success is our success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">
              See Support Plans
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-700 transition">
              Talk to Success Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}