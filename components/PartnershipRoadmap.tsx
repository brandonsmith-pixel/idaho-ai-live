"use client";

import { useState } from 'react';
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';

export default function PartnershipRoadmap() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      month: "Month 1",
      title: "Discovery & Quick Wins",
      tasks: [
        "AI readiness assessment",
        "Identify top 3 automation opportunities",
        "Deploy first AI solution",
        "Immediate ROI demonstration"
      ],
      result: "20% efficiency gain"
    },
    {
      month: "Months 2-3",
      title: "Full Implementation",
      tasks: [
        "Scale successful pilots",
        "Integrate with existing systems",
        "Train your team",
        "Establish KPI dashboards"
      ],
      result: "50% process automation"
    },
    {
      month: "Months 4-6",
      title: "Optimization & Scaling",
      tasks: [
        "Fine-tune AI models",
        "Expand to new departments",
        "Advanced analytics deployment",
        "Predictive capabilities"
      ],
      result: "300% ROI achieved"
    },
    {
      month: "Year 1+",
      title: "Innovation Partnership",
      tasks: [
        "Continuous improvement",
        "New AI opportunities",
        "Competitive advantage building",
        "Strategic AI roadmap"
      ],
      result: "Market leadership"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
            Your AI Journey with <span className="text-blue-700">Idaho AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just vendors. We're your long-term AI partners, committed to your continuous success.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="hidden md:flex justify-between mb-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 h-1 bg-blue-700 -translate-y-1/2 transition-all duration-500"
                 style={{ width: `${(activePhase + 1) * 25}%` }}></div>
            {phases.map((phase, index) => (
              <button
                key={index}
                onClick={() => setActivePhase(index)}
                className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  index <= activePhase ? 'bg-blue-700 text-white' : 'bg-white border-2 border-gray-300 text-gray-400'
                }`}
              >
                {index <= activePhase ? <CheckCircle className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
              </button>
            ))}
          </div>

          {/* Phase Details */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-blue-700 font-bold">{phases[activePhase].month}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                  {phases[activePhase].title}
                </h3>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Expected Result</p>
                <p className="text-xl font-bold text-green-600">{phases[activePhase].result}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {phases[activePhase].tasks.map((task, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{task}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition inline-flex items-center justify-center">
                Schedule Your Roadmap Session
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-bold hover:border-blue-700 hover:text-blue-700 transition">
                Download Success Stories
              </button>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden mt-8 space-y-2">
            {phases.map((phase, index) => (
              <button
                key={index}
                onClick={() => setActivePhase(index)}
                className={`w-full text-left p-4 rounded-lg transition-all ${
                  index === activePhase ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                <span className="font-bold">{phase.month}</span> - {phase.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}