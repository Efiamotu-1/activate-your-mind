import staceyImage from '../assets/stacey.png';

interface AuthorBioProps {
  className?: string;
}

export default function AuthorBio({ className = "" }: AuthorBioProps) {
  return (
    <section id="author" className={`py-16 md:py-24 px-6 bg-gradient-to-b from-black to-burgundy-900/40 ${className}`}>
      <div className="max-w-full md:max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            About <span className="text-accent-400">Stacey Craft</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-burgundy-500 to-accent-500 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Author Image */}
          <div className="order-1 lg:order-1 flex justify-center">
            <div className="relative">
              {/* Author Image with Glow Effect */}
              <div className="relative">
                <img 
                  src={staceyImage}
                  alt="Stacey Craft - Author, Mindset Coach, and Creator of Mind Over Matter Workbook"
                  className="w-80 md:w-96 h-auto object-cover rounded-3xl shadow-2xl"
                />
                
                {/* Subtle glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-400/20 to-burgundy-500/20 rounded-3xl blur-2xl -z-10 transform scale-110"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent-400/80 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-burgundy-400/60 rounded-full blur-md animate-pulse delay-1000"></div>
            </div>
          </div>
          
          {/* Right Column - Author Bio */}
          <div className="order-2 lg:order-2 space-y-8 text-justify">
            
            {/* Professional Title & Credentials */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-accent-400 text-center">
                Influential Author • Mindset Coach • Creator
              </h3>
              <p className="text-xl md:text-2xl text-white font-semibold text-center">
                Creator of the "Mind Over Matter Workbook"
              </p>
            </div>

            {/* Main Biography */}
            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed text-justify">
              <p>
                Stacey Craft is an influential author, mindset coach, and creator of the <span className="text-accent-400 font-semibold">"Mind Over Matter Workbook,"</span> known for empowering individuals to achieve mental clarity, resilience, and intentional living through innovative self-development exercises and metaphysical teachings.
              </p>
              
              <p>
                His work bridges <span className="text-white font-semibold">contemporary psychology, spiritual principles, and practical manifestation techniques</span>, providing over 100 thought-provoking categories and tools that help readers re-engineer their mindsets for healing, growth, and proactive transformation.
              </p>
            </div>

            {/* Personal Journey & Credibility */}
            <div className="bg-gradient-to-br from-burgundy-900/30 to-burnt-900/30 rounded-xl p-6 border border-accent-400/30">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
                From Brokenness to Breakthrough
              </h4>
              <p className="text-gray-200 leading-relaxed mb-4">
                Stacey's credibility arises from his deep personal journey of overcoming brokenness, setbacks, and inner struggle. He openly acknowledges seasons of personal challenge broken, lost, and "sometimes unable to hold himself up" and attributes his profound transformation to spiritual faith, mentorship, and the supportive love of friends and family.
              </p>
              <p className="text-gray-200 leading-relaxed">
                Drawing inspiration from his own process of mental rebuilding, Stacey designed his workbook as a systematic guide to help others not only survive life's hardships but rebuild to full strength and thrive.
              </p>
            </div>

            {/* Expertise & Collaboration */}
            <div className="space-y-4">
              <h4 className="text-xl md:text-2xl font-bold text-white text-center">
                Expert Collaboration & Innovation
              </h4>
              <p className="text-gray-300 leading-relaxed">
                His teachings are informed by his collaborations with experts in consciousness and psychology, and he positions himself not only as an author but as a <span className="text-accent-300 font-semibold">companion of wisdom</span> for everyday people seeking renewal and wholeness in their inner life.
              </p>
            </div>

            {/* Pioneer Status */}
            <div className="bg-gradient-to-br from-burgundy-900/30 to-burnt-900/30 rounded-xl p-6 border border-accent-400/30">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
                A Pioneer in Mental Health Redefinition
              </h4>
              <p className="text-gray-200 leading-relaxed">
                Through <span className="text-accent-400 font-semibold ">"Activate Your Mind,"</span> he establishes himself as a pioneer in redefining mental health, focusing on proactive positivity, faith, and mindful transformation making him a trusted voice in the field of mindset creation and metaphysical self-healing.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center lg:text-left pt-6">
              <blockquote className="text-2xl md:text-3xl font-bold text-white leading-tight italic text-center">
                <span className="text-accent-400">"Your mind is the place where miracles, breakthroughs, and unshakable peace begin."</span>
              </blockquote>
            </div>

          </div>
        </div>

       
      </div>
    </section>
  )
}