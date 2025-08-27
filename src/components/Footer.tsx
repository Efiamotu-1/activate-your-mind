import { Twitter, Instagram, Youtube, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <span className="bg-gradient-to-r from-accent-400 via-burgundy-400 to-burnt-400 bg-clip-text text-transparent animate-gradient-x text-2xl font-bold">
                Stacey Craft - Activate Your Mind
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Transform your life through powerful mental exercises and spiritual principles. Join thousands who have already discovered the path to mental clarity, resilience, and intentional living.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-400 hover:text-accent-400 transition-colors">About the Book</a></li>
              <li><a href="#author" className="text-gray-400 hover:text-accent-400 transition-colors">About Stacey</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-accent-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-accent-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Social Icons */}
         
        </div>
        
          {/* CTA Section */}
          <div className="pt-2 mb-2">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Ready to Transform Your Mindset?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#sales" 
                className="bg-burgundy-900 hover:bg-burgundy-400 text-black px-8 py-3 rounded-lg font-bold transition-all duration-200 hover:scale-105 shadow-xl"
              >
                Buy Now - $19.95
              </a>
              <a 
                href="#maillist" 
                className="bg-burgundy-900 hover:bg-burgundy-500 text-white px-8 py-3 rounded-lg font-bold transition-all duration-200 hover:scale-105 shadow-xl"
              >
                Join Newsletter
              </a>
            </div>
          </div>
        </div>
      
        
        {/* Social Media & Copyright */}
        <div className="pt-8">
          <div className="flex flex-col justify-between items-center gap-6">
            
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
            
            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 Stacey Craft. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Activate Your Mind - Transform Your Life
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  )
}
