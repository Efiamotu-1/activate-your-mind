import { useState } from 'react'
import { Check, ShieldCheck } from 'lucide-react';

interface MaillistProps {
  className?: string;
}

export default function Maillist({ className = "" }: MaillistProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '' });
    }, 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };





  return (
    <section id="maillist" className={`py-16 md:py-24 px-6 bg-gradient-to-b from-burgundy-900/40 to-black ${className}`}>
      <div className="max-w-full md:max-w-6xl mx-auto">
        
        {/* Main Container */}
        <div className="bg-gradient-to-br from-burgundy-900/30 to-burnt-900/30 rounded-3xl p-8 md:p-12 border-2 border-accent-400/30 relative overflow-hidden">
          
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-burgundy-500/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Lead Magnet Offer */}
            <div className="space-y-8">
              
              {/* Headline */}
              <div>
               
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Join thousands of readers who are already transforming their lives with daily inspiration and practical wisdom.
                </p>
              </div>

              {/* What You'll Get */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-6">What You'll Receive Instantly:</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <p className="text-gray-200 text-lg">
                      <span className="font-semibold text-white">Free Chapter</span> from "Activate Your Mind" - Experience the transformation firsthand
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <p className="text-gray-200 text-lg">
                      <span className="font-semibold text-white">Daily Inspiration</span> - Powerful quotes and mental exercises delivered to your inbox
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <p className="text-gray-200 text-lg">
                      <span className="font-semibold text-white">Exclusive Bonuses</span> - Special content not available anywhere else
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <p className="text-gray-200 text-lg">
                      <span className="font-semibold text-white">Early Access</span> to new releases, special offers, and community events
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
             

            </div>
            
            {/* Right Column - Email Form */}
            <div className="space-y-8">
              
              {/* Form Header */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Start Your Transformation Journey
                </h3>
                <p className="text-gray-300 text-lg">
                  Join our community of conscious creators and change-makers.
                </p>
              </div>

              {/* Email Capture Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-black/50 border-2 border-accent-400/30 rounded-xl text-white placeholder-gray-400 focus:border-accent-400 focus:outline-none transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
    <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-black/50 border-2 border-accent-400/30 rounded-xl text-white placeholder-gray-400 focus:border-accent-400 focus:outline-none transition-colors duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent-500 hover:bg-accent-400 disabled:bg-accent-600 text-white px-8 py-4 rounded-xl text-md md:text-2xl transition-all duration-200 hover:scale-105 shadow-2xl hover:shadow-accent-500/25 uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Get Free Chapter + Bonuses'}
                </button>

                   {isSubmitted && (
                  <div className="mt-4 text-center text-gray-300">
                    <p>Thank you for subscribing, Welcome to the Family! 🎉</p>
                    <p>Your free chapter and exclusive bonuses are on their way to your inbox.</p>
                  </div>
                )}

                {/* Privacy Notice */}
                <p className="text-center text-gray-400 text-sm">
                  🔒 We respect your privacy. Unsubscribe at any time.
                </p>

              </form>

              {/* Trust Indicators */}
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-accent-400" />
                    <span>No Spam Ever</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-5 h-5 text-accent-400" />
                    <span>Instant Access</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      
    </div>
    </section>
  )
}