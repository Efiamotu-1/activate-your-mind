import { Star } from 'lucide-react'

interface TestimonialsProps {
  className?: string;
}

export default function Testimonials({ className = "" }: TestimonialsProps) {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      title: "Clinical Psychologist & Author",
      company: "Mind Wellness Institute",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      quote: "Stacey Craft has created something truly remarkable. This isn't just another self-help book it's a systematic approach to mental transformation that I recommend to my clients. The 'mental equivalents' methodology is both scientifically sound and spiritually grounding.",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Thompson",
      title: "Life Coach & Motivational Speaker",
      company: "Breakthrough Leadership Academy",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "I've been in the personal development field for over 15 years, and 'Activate Your Mind' stands out as a game-changer. The interactive format keeps readers engaged while the powerful declarations create lasting change. This book delivers real results.",
      rating: 5
    },
    {
      id: 3,
      name: "Dr. Elena Rodriguez",
      title: "Neuroscientist & Wellness Expert",
      company: "Brain Health Research Center",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      quote: "From a neuroscience perspective, Craft's approach to mental restructuring aligns perfectly with what we know about neuroplasticity. The daily practice format helps rewire neural pathways for lasting positive change. Brilliant work.",
      rating: 5
    },
    {
      id: 4,
      name: "James Parker",
      title: "Executive Coach & Business Consultant",
      company: "Peak Performance Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "I've recommended 'Activate Your Mind' to countless executives struggling with burnout and mental fatigue. The systematic approach to rebuilding one's inner foundation has proven invaluable for high-performers seeking sustainable success.",
      rating: 5
    },
    {
      id: 5,
      name: "Rev. Dr. Angela Foster",
      title: "Spiritual Director & Bestselling Author",
      company: "Healing Hearts Ministry",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      quote: "Stacey has masterfully woven together spiritual wisdom and practical application. This book meets people exactly where they are in their healing journey and provides a clear path forward. A must-read for anyone seeking transformation.",
      rating: 5
    },
    {
      id: 6,
      name: "Dr. Michael Chen",
      title: "Psychiatrist & Mindfulness Expert",
      company: "Integrated Mental Health Clinic",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      quote: "The combination of reflective writing and powerful declarations creates a therapeutic experience that goes beyond traditional self-help. I've seen remarkable improvements in patients who've incorporated these practices into their daily routine.",
      rating: 5
    }
  ];

  return (
    <section className={`py-16 md:py-24 md:px-12 px-6  ${className}`}>
      <div className="max-w-full mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            What <span className="text-accent-400">Industry Experts</span> Are Saying
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
            Leading professionals in psychology, coaching, and spiritual development praise Stacey Craft's groundbreaking approach
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-burgundy-500 to-accent-500 mx-auto"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gradient-to-br from-burgundy-900/30 to-burnt-900/30 rounded-2xl p-6 border border-accent-400/20 hover:border-accent-400/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-400" fill="currentColor" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-200 text-sm md:text-base leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Profile */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-accent-400/30"
                />
                <div>
                  <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                  <p className="text-accent-300 text-xs font-medium">{testimonial.title}</p>
                  <p className="text-gray-400 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        {/* <div className="text-center bg-gradient-to-r from-burgundy-800/50 to-burnt-800/50 rounded-2xl p-8 md:p-12 border border-accent-400/30">
          <h3 className="text-2xl md:text-4xl font-black text-white mb-4">
            Join Thousands Who Have Already Transformed Their Lives
          </h3>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don't just take their word for it. Experience the power of mental transformation yourself.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <button className="bg-accent-500 hover:bg-accent-400 text-black px-10 py-5 rounded-xl text-xl font-black transition-all duration-200 hover:scale-105 shadow-2xl uppercase tracking-wide cursor-pointer">
                          Get Your Copy Now - $17.99
                        </button>
                        <button className="text-white/80 hover:text-white underline text-lg font-medium cursor-pointer transition-colors">
                          Read more reviews →
                        </button>
          </div>

          {/* Trust indicators */}
          {/* <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-accent-400" />
              <span>30-Day Money Back Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-5 h-5 text-accent-400" />
              <span>Instant Digital Access</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-accent-400" />
              <span>Secure Payment</span>
            </div>
          </div> */}
        {/* </div> */}

      </div>
    </section>
  )
}