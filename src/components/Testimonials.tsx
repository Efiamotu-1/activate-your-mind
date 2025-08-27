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
      quote: "Stacey Craft has created something truly remarkable. This isn't just another self-help book—it's a systematic approach to mental transformation that I recommend to my clients. The 'mental equivalents' methodology is both scientifically sound and spiritually grounding.",
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
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
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
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            What Industry <span className="text-accent-400">Experts</span> Are Saying
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
                  <svg key={i} className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
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
            <button className="bg-accent-500 hover:bg-accent-400 text-black px-10 py-5 rounded-xl text-xl font-black transition-all duration-200 hover:scale-105 shadow-2xl uppercase tracking-wide">
              Get Your Copy Now - $19.95
            </button>
            <button className="text-white/80 hover:text-white underline text-lg font-medium">
              Read more reviews →
            </button>
          </div>

          {/* Trust indicators */}
          {/* <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
              </svg>
              <span>30-Day Money Back Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5H5.21L4.27,3H1M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
              </svg>
              <span>Instant Digital Access</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,16.6 15.6,17 15,17H9C8.4,17 8,16.6 8,16V13C8,12.4 8.4,11.5 9,11.5V10C9,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.2,8.7 10.2,10V11.5H13.8V10C13.8,8.7 12.8,8.2 12,8.2Z"/>
              </svg>
              <span>Secure Payment</span>
            </div>
          </div> */}
        {/* </div> */}

      </div>
    </section>
  )
}