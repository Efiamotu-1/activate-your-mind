import bookCover from '../assets/book-cover-2.jpeg'
import bookCover2 from '../assets/book-cover-2.jpeg'

export default function HeroSection() {
  return (
    <div className='p-6 md:mt-20 mt-12'>
      <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Dominant Typography like Tony's */}
            <div className="order-2 lg:order-1 space-y-8">
              {/* Massive Headline - Tony Robbins style */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] tracking-tight">
                The Exact Mental Scripts That Turn Life's{" "}
                <span className="text-accent-400 drop-shadow-2xl">Worst Moments</span>{" "}
                Into Your{" "}
                <span className="text-burnt-400 drop-shadow-2xl">Greatest Comebacks</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-medium max-w-3xl">
                When affirmations fail and motivation fades, these step-by-step mental exercises give you the precise words and actions to rebuild your confidence, clarity, and inner strength.
              </p>
              
              {/* Single Primary CTA - Tony's approach */}
              <div className="flex flex-col md:flex-row gap-4 items-center">

                <div className="pt-4">
                    <button className="bg-accent-500 hover:bg-accent-400 text-white px-12 py-6 rounded-xl text-2xl font-blac transition-all duration-200 shadow-2xl hover:shadow-accent-500/25 hover:scale-105 transform uppercase tracking-wide">
                    Buy the Book Now - $19.95
                    </button>
                </div>
                
                {/* Secondary action - subtle */}
                <div className="pt-4">
                    <button className="text-white/80 hover:text-white text-lg font-medium">
                    Join Newsletter
                    </button>
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