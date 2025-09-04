
import { Star, FileText, Check } from 'lucide-react'

interface AboutBookProps {
  className?: string;
}

export default function AboutBook({ className = "" }: AboutBookProps) {
  return (
    <section id="about" className={`py-16 md:py-24 px-6 ${className}`}>
      <div className="max-w-full mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            About <span className="text-accent-400">The Book</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-burgundy-500 to-accent-500 mx-auto"></div>
        </div>

        <div className="grid md:w-[80%] mx-auto gap-16 items-center">
          

          
          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            
            {/* Opening Questions */}
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-accent-300 font-medium leading-relaxed italic text-center">
                What if your thoughts could actually rewrite your life? What if your mind became the place where miracles, breakthroughs, and unshakable peace begin?
              </p>
            </div>

            {/* Main Description */}
            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed text-justify">
              <p>
                <span className="text-accent-400 font-bold">Activate Your Mind</span> isn't just another book it's a daily invitation to real transformation. Inside, you'll find powerful declarations meant to help you align your thoughts, your emotions, and your spirit with the life you truly want.
              </p>
              
              <p>
                These aren't surface-level affirmations they're <span className="text-white font-semibold">deep, soul-rooted truths</span> designed to spark healing, restore vision, and awaken your inner strength.
              </p>
              
              <p>
                Each page is a conversation. One side speaks directly to your soul offering mental shifts and spiritual reminders. The other side is for you: a space to write, reflect, respond, and speak life in your own voice.
              </p>
              
              <p>
                This rhythm of <span className="text-accent-300 font-semibold">reading and writing, receiving and creating</span> helps you develop a new inner language. A new way of seeing yourself. A new reality, built from the inside out.
              </p>
            </div>

            {/* Personal Message */}
            <div className="bg-gradient-to-r from-burgundy-900/50 to-burnt-900/50 rounded-xl p-6 border border-accent-400/30">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4">
                Wherever you are in your journey whether you're healing, rebuilding, or stretching toward something greater this book will walk with you.
              </p>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                It will gently remind you of your power, call you to higher thoughts, and encourage you to speak life over yourself daily.
              </p>
            </div>

            {/* Call to Action Quote */}
            <div className="text-center">
              <blockquote className="text-2xl md:text-3xl font-bold text-white leading-tight">
                <span className="text-accent-400">"Speak it.</span>{" "}
                <span className="text-accent-400">Write it.</span>{" "}
                <span className="text-accent-400">Believe it.</span>{" "}
                <span className="text-white">And watch yourself become it."</span>
              </blockquote>
            </div>

            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                      <button className="bg-accent-500 hover:bg-accent-400 text-black px-8 py-4 rounded-xl text-lg font-bold transition-all duration-200 hover:scale-105 shadow-xl cursor-pointer">
                          Start Your Transformation - $19.95
                        </button>
                        <button className="text-white/80 hover:text-white underline text-lg font-medium cursor-pointer transition-colors">
                          Read a free sample →
                        </button>
            </div> */}

          </div>
        </div>

        {/* Key Benefits Section */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            What You'll Discover Inside
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-burgundy-900 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-white" fill="currentColor" />
              </div>
              <h4 className="text-xl font-bold text-white">Powerful Declarations</h4>
              <p className="text-gray-300">Soul-rooted truths that go deeper than surface affirmations</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-burgundy-900 rounded-full flex items-center justify-center mx-auto">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white">Interactive Format</h4>
              <p className="text-gray-300">Space to write, reflect, and create your own transformation</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-burgundy-900 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white">Daily Practice</h4>
              <p className="text-gray-300">Build a new inner language and reality from the inside out</p>
            </div>
          </div>
        </div>

    </div>
    </section>
  )
}