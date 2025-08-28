import bookCover from '../assets/book-cover-1.jpeg'
import { Play } from 'lucide-react';

interface IntroVideoProps {
  className?: string;
}

export default function IntroVideo({ className = "" }: IntroVideoProps) {
  return (
    <section className={`py-16 md:py-24 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Meet <span className="text-accent-400">Stacey Craft</span>
          </h2>
                      <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Discover why he wrote this book and how it can transform your life in just a few minutes
            </p>
        </div>

        {/* Video Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Video Wrapper with aspect ratio */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
            
            {/* Video Preview with Book Cover */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden cursor-pointer group">
              
              {/* Book Cover Background */}
              <img 
                src={bookCover}
                alt="Activate Your Mind by Stacey Craft - Video Preview"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Dark overlay for better contrast */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>
              
              {/* Video content overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-6 z-10">
                  
                  {/* Large Play Button */}
                  <div className="w-24 h-24 md:w-28 md:h-28 bg-accent-500 rounded-full flex items-center justify-center mx-auto hover:bg-accent-400 transition-all duration-300 group-hover:scale-110 shadow-2xl">
                    <Play className="w-10 h-10 md:w-12 md:h-12 text-black ml-1" fill="currentColor" />
                  </div>
                  
                  {/* Video Title */}
                  <div className="hidden md:block bg-black/80 backdrop-blur-sm rounded-xl p-6 mx-4 border border-accent-400/30">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Why I Wrote "Activate Your Mind"
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      Watch Stacey's personal story • 3:45 minutes
                    </p>
                  </div>
                  
                </div>
              </div>
              
              {/* Subtle border glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-accent-400/40 group-hover:border-accent-400/60 transition-colors duration-300"></div>
            </div>

            {/* When you have the actual video, replace the above div with something like: */}
            {/* 
            <iframe 
              className="absolute inset-0 w-full h-full rounded-2xl"
              src="YOUR_VIDEO_EMBED_URL"
              title="Stacey Craft - Why I Wrote Activate Your Mind"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            */}
          </div>

          {/* Video glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-400/20 to-burgundy-500/20 rounded-2xl blur-xl -z-10 transform scale-105"></div>
        </div>

        {/* Call-to-Action below video */}
        <div className="text-center mt-12 space-y-6">
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your transformation journey?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
                href="#sales" 
                className="bg-burgundy-900 hover:bg-burgundy-900/80 text-white px-8 py-3 rounded-lg font-bold transition-all duration-200 hover:scale-105 shadow-xl cursor-pointer"
              >
                Get the Book Now - $19.95
              </a>
            
          </div>
        </div>

    </div>
    </section>
  )
}