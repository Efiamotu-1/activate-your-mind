import bookCover from '../assets/book-cover-1.jpeg';

interface SalesProps {
  className?: string;
  paypalLink?: string; // Will be provided by client
}

export default function Sales({ className = "", paypalLink = "#" }: SalesProps) {
  return (
    <section className={`py-16 md:py-24 px-6 bg-gradient-to-b from-burgundy-900/30 to-black ${className}`}>
      <div className="max-w-6xl mx-auto">
        
        {/* Main Sales Container */}
        <div className="bg-gradient-to-br from-burgundy-800/60 to-burnt-800/60 rounded-3xl p-8 md:p-12 border-2 border-accent-400/30 relative overflow-hidden">
          
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
                    Only $19.95
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
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <p className="text-gray-200 text-lg">
                      <span className="font-semibold text-white">Complete "Activate Your Mind" workbook</span> with over 100 powerful mental equivalents
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <p className="text-gray-200 text-lg">
                      <span className="font-semibold text-white">Interactive format</span> with space to write, reflect, and create your transformation
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <p className="text-gray-200 text-lg">
                      <span className="font-semibold text-white">Daily practice system</span> to rebuild your inner foundation from the ground up
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
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
                  Regular price $39.95 - Get it now for only <span className="text-accent-400 font-bold text-xl">$19.95</span>
                </p>
              </div>

              {/* Main CTA Button */}
              <div className="space-y-4">
                <a 
                  href={paypalLink}
                  className="block w-full bg-accent-500 hover:bg-accent-400 text-black text-center px-8 py-6 rounded-2xl text-2xl font-black transition-all duration-200 hover:scale-105 shadow-2xl hover:shadow-accent-500/25 uppercase tracking-wide"
                >
                  Get Instant Access - $19.95
                </a>
                
                <p className="text-center text-gray-400 text-sm">
                  Secure payment via PayPal • Instant digital delivery
                </p>
              </div>

              {/* Guarantee */}
              <div className="text-center bg-black/30 rounded-xl p-4 border border-white/10">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <svg className="w-6 h-6 text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,16.6 15.6,17 15,17H9C8.4,17 8,16.6 8,16V13C8,12.4 8.4,11.5 9,11.5V10C9,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.2,8.7 10.2,10V11.5H13.8V10C13.8,8.7 12.8,8.2 12,8.2Z"/>
                  </svg>
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
              <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
              </svg>
              <span>Instant Digital Access</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
              </svg>
              <span>Secure PayPal Checkout</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
              </svg>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}