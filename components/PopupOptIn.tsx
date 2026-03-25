"use client";

import { useState, useEffect } from 'react';
import { X, Mail, Gift } from 'lucide-react';

export default function PopupOptIn() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already seen/dismissed the popup
    const hasSeenPopup = localStorage.getItem('idaho-ai-popup-seen');
    
    if (!hasSeenPopup) {
      // Show popup after 30 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 30000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('idaho-ai-popup-seen', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Popup Opt-in',
          business: 'Quick Signup',
          email,
          phone,
          challenge: 'popup',
          details: 'Quick popup opt-in for updates'
        })
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          handleClose();
        }, 3000);
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative animate-fade-up">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
        
        {!isSubmitted ? (
          <div className="p-8">
            <div className="text-center mb-6">
              <Gift className="w-12 h-12 text-blue-700 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Wait! Get Your Free AI Checklist
              </h3>
              <p className="text-gray-600">
                10 AI automations every Idaho business needs (save 20+ hours/week)
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone (optional for SMS tips)"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition"
              >
                Send My Free Checklist
              </button>
              
              <p className="text-xs text-center text-gray-500">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center">
            <Mail className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Check Your Email!
            </h3>
            <p className="text-gray-600">
              Your AI checklist is on its way.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}