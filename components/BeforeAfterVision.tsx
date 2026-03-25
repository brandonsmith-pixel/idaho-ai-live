"use client";

import { useState } from 'react';
import { 
  AlertTriangle, 
  TrendingDown, 
  Clock, 
  XCircle, 
  Frown,
  CheckCircle,
  TrendingUp,
  Smile,
  Shield,
  Phone,
  ArrowRight
} from 'lucide-react';

export default function BeforeAfterVision() {
  const [showAfter, setShowAfter] = useState(false);

  const beforeScenarios = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working 70+ Hour Weeks",
      description: "While your competitors automate, you're drowning in manual tasks until 10 PM every night."
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Losing Customers Daily",
      description: "Competitors respond in seconds with AI. You respond in hours... if at all."
    },
    {
      icon: <XCircle className="w-6 h-6" />,
      title: "Making Costly Mistakes",
      description: "Human errors in data entry, scheduling, invoicing. Each mistake costs hundreds."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Falling Behind Fast",
      description: "Every Idaho business around you is adopting AI. You're becoming irrelevant."
    }
  ];

  const afterScenarios = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Home by 5 PM Daily",
      description: "AI handles the busy work. You focus on growth and actually see your family."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Winning More Business",
      description: "24/7 instant responses. Never miss a lead. Close deals while you sleep."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Zero Errors, Maximum Profit",
      description: "AI doesn't make mistakes. Perfect accuracy means more money in your pocket."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Leading Your Market",
      description: "You're the innovative business others fear. AI gives you an unfair advantage."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            The Clock Is Ticking on Your Business
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            In 2026, there are two types of Idaho businesses: 
            those using AI to work smarter, and those still doing everything manually. 
            <span className="text-red-400 font-bold"> Which one are you?</span>
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-full p-1 flex">
            <button
              onClick={() => setShowAfter(false)}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                !showAfter ? 'bg-red-600 text-white' : 'text-gray-400'
              }`}
            >
              Without Idaho AI
            </button>
            <button
              onClick={() => setShowAfter(true)}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                showAfter ? 'bg-green-600 text-white' : 'text-gray-400'
              }`}
            >
              With Idaho AI
            </button>
          </div>
        </div>

        {/* Scenarios */}
        <div className="max-w-5xl mx-auto">
          {!showAfter ? (
            <div className="space-y-6">
              {/* The Nightmare Scenario */}
              <div className="bg-red-950/50 border-2 border-red-900 rounded-2xl p-8 mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Frown className="w-8 h-8 text-red-500" />
                  <h3 className="text-2xl font-bold">Your Business in 6 Months (Without AI)</h3>
                </div>
                <p className="text-lg text-red-200 leading-relaxed">
                  You're working longer hours but seeing less growth. Your competitors are responding 
                  to customers instantly while you're still playing phone tag. Good employees are harder 
                  to find because they want to work somewhere modern. You're starting to wonder how long 
                  you can keep up. <span className="font-bold text-red-400">This is the reality for many 
                  Idaho businesses still doing things the old way.</span>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {beforeScenarios.map((scenario, index) => (
                  <div key={index} className="bg-gray-800 p-6 rounded-xl border border-red-900/50">
                    <div className="text-red-500 mb-3">{scenario.icon}</div>
                    <h4 className="text-xl font-bold mb-2">{scenario.title}</h4>
                    <p className="text-gray-400">{scenario.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 text-center mt-8">
                <p className="text-2xl font-bold text-red-400 mb-4">
                  "We waited too long to adopt AI. Now we're playing catch-up 
                  while our competitors have a two-year head start."
                </p>
                <p className="text-gray-500">- Local service business owner, Nampa</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* The Success Story */}
              <div className="bg-green-950/50 border-2 border-green-900 rounded-2xl p-8 mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Smile className="w-8 h-8 text-green-500" />
                  <h3 className="text-2xl font-bold">Your Business in 6 Months (With Idaho AI)</h3>
                </div>
                <p className="text-lg text-green-200 leading-relaxed">
                  You just landed a great new client—they were impressed by your quick response time 
                  and professional service. You're actually leaving the office at a reasonable hour 
                  most days. Revenue is steadily growing without burning yourself out. You feel confident 
                  about the future instead of stressed. <span className="font-bold text-green-400">The 
                  difference? You have AI handling the repetitive work and a partner keeping you current.</span>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {afterScenarios.map((scenario, index) => (
                  <div key={index} className="bg-gray-800 p-6 rounded-xl border border-green-900/50">
                    <div className="text-green-500 mb-3">{scenario.icon}</div>
                    <h4 className="text-xl font-bold mb-2">{scenario.title}</h4>
                    <p className="text-gray-400">{scenario.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 text-center mt-8">
                <p className="text-2xl font-bold text-green-400 mb-4">
                  "Idaho AI helped us automate our quotes and scheduling. 
                  We're getting more done with less stress."
                </p>
                <p className="text-gray-500">- Mike S., Boise Construction</p>
              </div>
            </div>
          )}
        </div>

        {/* The Critical Choice */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/50 to-blue-800/50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-black mb-6">
            {!showAfter ? 
              "Every Day You Wait, You Fall Further Behind" : 
              "You're One Phone Call Away From Transformation"
            }
          </h3>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {!showAfter ? 
              "Your competitors aren't waiting. They're implementing AI right now, stealing your customers, and leaving you in the dust. The question isn't IF you need AI—it's whether you'll act before it's too late." :
              "Imagine having a brilliant tech team on speed dial. Need a new automation? Call us. Want to beat a competitor's innovation? We're on it. Market changing? We've already adapted your AI. That's the Idaho AI partnership."
            }
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="text-left max-w-sm">
              <div className="flex items-center space-x-3 mb-3">
                <Phone className="w-8 h-8 text-blue-400" />
                <div>
                  <p className="font-bold text-lg">One Call Changes Everything</p>
                  <p className="text-gray-400">30-minute strategy session</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  See exactly how AI fits your business
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Get a custom ROI projection
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  No pressure, just honest advice
                </li>
              </ul>
            </div>

            <a 
              href="#contact" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center group"
            >
              Secure Your Competitive Edge Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}