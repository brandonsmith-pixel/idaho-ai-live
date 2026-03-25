import { RefreshCw, Users, Calendar, TrendingUp, MessageCircle, Lightbulb } from 'lucide-react';

export default function EvolvingPartnership() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 animate-gradient-x"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Message */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur text-blue-200 px-4 py-2 rounded-full mb-6 text-sm font-medium">
              <RefreshCw className="w-4 h-4" />
              <span>Always Evolving, Always Improving</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Your Business Changes.<br />
              Your Needs Change.<br />
              <span className="text-blue-300">AI Changes.</span>
            </h2>
            
            <p className="text-2xl text-blue-100 max-w-3xl mx-auto mb-12">
              We're with you every step of the way. Not as vendors who disappear after delivery, 
              but as <span className="font-bold text-white">true partners</span> invested in your continuous success.
            </p>
          </div>

          {/* Monthly Partnership Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all">
              <Calendar className="w-12 h-12 text-blue-300 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Monthly Strategy Sessions</h3>
              <p className="text-blue-100 mb-4">
                Your dedicated AI Success Manager meets with you every month. No extra charge. 
                It's how we ensure your AI keeps delivering value as your business evolves.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start text-blue-200">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-1.5"></div>
                  Review performance metrics
                </li>
                <li className="flex items-start text-blue-200">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-1.5"></div>
                  Identify new opportunities
                </li>
                <li className="flex items-start text-blue-200">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-1.5"></div>
                  Adjust AI to your changing needs
                </li>
                <li className="flex items-start text-blue-200">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-1.5"></div>
                  Plan next month's optimizations
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all">
              <TrendingUp className="w-12 h-12 text-blue-300 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">AI That Grows With You</h3>
              <p className="text-blue-100 mb-4">
                As AI technology advances, so does your system. We continuously integrate the 
                latest breakthroughs, ensuring you're always ahead of the curve.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start text-blue-200">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-1.5"></div>
                  Automatic model upgrades
                </li>
                <li className="flex items-start text-blue-200">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-1.5"></div>
                  New feature rollouts
                </li>
                <li className="flex items-start text-blue-200">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-1.5"></div>
                  Industry-specific improvements
                </li>
                <li className="flex items-start text-blue-200">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-1.5"></div>
                  Proactive optimization suggestions
                </li>
              </ul>
            </div>
          </div>

          {/* Partnership Promise */}
          <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <Users className="w-16 h-16 text-white mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">
                The Idaho AI Partnership Promise
              </h3>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                "We succeed when you succeed. That's why we're not just service providers — 
                we're your AI department, your innovation partners, your competitive advantage. 
                Every month, every quarter, every year, we're here to ensure your AI investment 
                keeps delivering exponential returns."
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                <div className="bg-white/20 px-4 py-2 rounded-full text-white">
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  Direct Line to Your Team
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full text-white">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Monthly Strategy Sessions
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full text-white">
                  <Lightbulb className="w-4 h-4 inline mr-2" />
                  Continuous Innovation
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-blue-200 text-lg mb-6">
              Join 50+ Idaho businesses who've found their AI partner for life
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
            >
              Start Your Partnership Today
              <RefreshCw className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}