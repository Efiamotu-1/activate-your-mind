import bookCover from '../assets/book-cover-2.jpg'

export default function HeroSection() {
  return (
    <div className='p-6 mt-20'>
      <div className="max-w-full md:max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Dominant Typography like Tony's */}
            <div className="order-2 lg:order-1 space-y-8">
              {/* Massive Headline - Tony Robbins style */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] tracking-tight">
                The Exact Mental Scripts That Turn Life's Worst Moments
                Into Your Greatest Comeback
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-medium max-w-3xl">
                When affirmations fail and motivation fades, these step-by-step mental exercises give you the precise words and actions to rebuild your confidence, clarity, and inner strength.
              </p>
              
              <div className="pt-2 mb-2">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Ready to Transform Your Mindset?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#sales" 
                className="bg-black hover:bg-black/80 text-white px-8 py-3 rounded-lg font-bold transition-all duration-200 hover:scale-105 shadow-xl cursor-pointer"
              >
                Buy Now - $17.99
              </a>
              <a 
                href="#maillist" 
                className="bg-black hover:bg-black/80 text-white px-8 py-3 rounded-lg font-bold transition-all duration-200 hover:scale-105 shadow-xl cursor-pointer"
              >
                Join Newsletter
              </a>
            </div>
          </div>
        </div>
              
              {/* Social Proof - minimal like Tony's */}
              <div className="pt-4">
                <p className="text-accent-300 font-bold text-lg mb-4">
                  Perfect for readers who loved:
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="text-white/60 font-medium">Think & Grow Rich</span>
                  <span className="text-white/40">•</span>
                  <span className="text-white/60 font-medium">You Can Heal Your Life</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Book Image */}
            <div className="order-1 lg:order-2">
              <div className="flex flex-col gap-4">
                {/* Dramatic glow effect like Tony's product images */}
                <div className=""></div>
                
                {/* Book Cover */}
                <div className="">
                  <img 
                    src={bookCover} 
                    alt="Activate Your Mind by Stacey Craft - Transform Your Life"
                    className="w-full h-auto object-cover rounded-3xl shadow-2xl transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* <div className="">
                  <img 
                    src={bookCover2} 
                    alt="Activate Your Mind by Stacey Craft - Transform Your Life"
                    className="w-full h-auto object-cover rounded-3xl shadow-2xl transition-transform duration-700 hover:scale-105"
                  />
                </div> */}
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}