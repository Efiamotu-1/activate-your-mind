import bookCover from '../assets/book-cover-1.jpeg'
import { Check, ShieldCheck, Info } from 'lucide-react';

interface SalesProps {
  className?: string;
  paypalLink?: string; // Will be provided by client
}

export default function Sales({ className = "" }: SalesProps) {
  return (
    <section id="sales" className={`py-16 md:py-24 px-6 bg-gradient-to-b from-burgundy-900/30 to-black ${className}`}>
      <div className="max-w-full md:max-w-6xl mx-auto">
        
        {/* Main Sales Container */}
        <div className="bg-gradient-to-br from-burgundy-900/30 to-burnt-900/30 rounded-3xl p-8 md:p-12 border-2 border-accent-400/30 relative overflow-hidden">
          
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-burgundy-500/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Book & Pricing */}
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="relative">
                  <img 
                    src={bookCover}
                    alt="Activate Your Mind by Stacey Craft"
                    className="w-64 md:w-80 h-auto object-cover rounded-2xl shadow-2xl"
                  />
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-400/30 to-burgundy-500/30 rounded-2xl blur-xl -z-10 transform scale-110"></div>
                  
                  {/* Price badge */}
                  <div className="absolute -top-4 -right-4 bg-accent-500 text-black px-6 py-3 rounded-full font-black text-xl shadow-2xl animate-pulse">
                    Only $17.99
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Sales Copy & CTA */}
            <div className="space-y-8">
              
              {/* Headline */}
    <div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                  Transform Your Life 
                  <span className="text-accent-400"> Today</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Get instant access to wisdom that has helped transform countless lives
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-6">What You Get Instantly:</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <p className="text-gray-200 text-lg">
                      <span className="font-semibold text-white">Complete "Activate Your Mind" workbook</span> with over 100 powerful mental equivalents
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <p className="text-gray-200 text-lg">
                      <span className="font-semibold text-white">Interactive format</span> with space to write, reflect, and create your transformation
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <p className="text-gray-200 text-lg">
                      <span className="font-semibold text-white">Daily practice system</span> to rebuild your inner foundation from the ground up
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <p className="text-gray-200 text-lg">
                      <span className="font-semibold text-white">Lifetime access</span> to your personal transformation toolkit
                    </p>
                  </div>
                </div>
              </div>

              {/* Urgency & Scarcity */}
              <div className="bg-gradient-to-r from-burgundy-900/80 to-burnt-900/80 rounded-xl p-6 border border-accent-400/30">
                <p className="text-accent-300 font-bold text-lg mb-2">
                  🔥 Limited Time: Special Launch Price
                </p>
                <p className="text-gray-200">
                  Regular price $39.95 - Get it now for only <span className="text-accent-400 font-bold text-xl">$17.99</span>
                </p>
              </div>

              {/* Main CTA Button */}
              <div className="space-y-4">
                <a 
                href="https://www.amazon.com/dp/B0FMP27L3L?ref=cm_sw_r_ffobk_cso_cp_apin_dp_1RTG4715N85JHQEACJBM_1&ref_=cm_sw_r_ffobk_cso_cp_apin_dp_1RTG4715N85JHQEACJBM_1&social_share=cm_sw_r_ffobk_cso_cp_apin_dp_1RTG4715N85JHQEACJBM_1&bestFormat=true&csmig=1"
                 target="_blank" 
                 >
              <button
                  type="submit"
                  className="w-full bg-accent-500 hover:bg-accent-400 disabled:bg-accent-600 text-white px-8 py-4 rounded-xl text-md md:text-2xl  transition-all duration-200 hover:scale-105 shadow-2xl hover:shadow-accent-500/25 uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Get Instant Access - $17.99
                </button>
                  </a> 
                
                <p className="text-center text-gray-400 text-sm pt-4">
                  Secure payment via Amazon • Instant digital delivery
                </p>
              </div>

              {/* Guarantee */}
              <div className="text-center bg-black/30 rounded-xl p-4 border border-white/10">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <ShieldCheck className="w-6 h-6 text-accent-400" />
                  <span className="text-white font-bold">30-Day Money Back Guarantee</span>
                </div>
                <p className="text-gray-300 text-sm">
                  If you're not completely satisfied, get a full refund. No questions asked.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Trust Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            Join thousands who have already started their transformation journey
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-accent-400" />
              <span>Instant Digital Access</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-accent-400" />
              <span>Secure Amazon Checkout</span>
            </div>
            <div className="flex items-center space-x-2">
              <Info className="w-5 h-5 text-accent-400" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

    </div>
    </section>
  )
}