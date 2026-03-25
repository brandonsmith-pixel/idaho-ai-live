"use client";

import { useState } from 'react';
import { Mail, MessageSquare, Gift, CheckCircle, Sparkles } from 'lucide-react';

export default function MarketingOptIn() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would send to your marketing platform
    // For now, we'll send to the contact API
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Marketing Opt-in',
          business: 'Newsletter Signup',
          email,
          phone,
          challenge: 'newsletter',
          details: 'Opted in for AI tips and updates'
        })
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left side - Value Proposition */}
              <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 md:p-12 text-white">
                <div className="flex items-center space-x-2 mb-6">
                  <Gift className="w-8 h-8" />
                  <span className="text-xl font-bold">Exclusive Idaho AI Insights</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black mb-6">
                  Get Free AI Tips That Actually Work for Idaho Businesses
                </h3>
                
                <p className="text-lg text-blue-100 mb-8">
                  Join 500+ Idaho business owners getting weekly AI strategies, 
                  case studies, and exclusive automation templates.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-300 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Weekly AI Implementation Tips</p>
                      <p className="text-sm text-blue-200">Real strategies from real Idaho businesses</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-300 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Free Automation Templates</p>
                      <p className="text-sm text-blue-200">Copy-paste solutions for common tasks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-300 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Early Access to New AI Tools</p>
                      <p className="text-sm text-blue-200">Be first to try our latest innovations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-300 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Monthly AI Workshops</p>
                      <p className="text-sm text-blue-200">Free for subscribers (normally $197)</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-white/10 rounded-lg">
                  <p className="text-sm text-blue-200 italic">
                    "The weekly tips alone saved us $5,000 last month. This is gold for any Idaho business owner."
                  </p>
                  <p className="text-sm font-semibold mt-2">- Sarah M., Boise Retailer</p>
                </div>
              </div>
              
              {/* Right side - Opt-in Form */}
              <div className="p-8 md:p-12">
                {!isSubmitted ? (
                  <>
                    <div className="text-center mb-8">
                      <Sparkles className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Yes! Send Me Free AI Tips
                      </h3>
                      <p className="text-gray-600">
                        Get instant access to our AI Starter Pack (Value: $297)
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                          <Mail className="w-4 h-4 mr-2" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@business.com"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Mobile Phone (for SMS updates)
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(208) 555-1234"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Get time-sensitive AI opportunities via text
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <label className="flex items-start space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            defaultChecked
                            required
                          />
                          <span className="text-sm text-gray-700">
                            I agree to receive marketing emails and SMS messages from Idaho AI. 
                            I understand I can unsubscribe at any time. Message and data rates may apply.
                          </span>
                        </label>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full bg-blue-700 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-all transform hover:scale-105 shadow-lg"
                      >
                        Get My Free AI Starter Pack →
                      </button>
                      
                      <p className="text-center text-sm text-gray-500">
                        No spam. Unsubscribe anytime. Your info is safe with us.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Welcome to the Idaho AI Community!
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Check your email for your AI Starter Pack and first tips.
                    </p>
                    <p className="text-sm text-gray-500">
                      You'll receive your first SMS update within 24 hours.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>500+ Idaho Subscribers</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>TCPA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>CAN-SPAM Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Easy Unsubscribe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}