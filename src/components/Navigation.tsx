interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-black/80 border-b border-white/10 ${className}`}>
      <div className="max-w-[1920px] mx-auto flex items-center justify-between px-4">
        {/* Brand - Minimal like Tony's */}
        <div className="text-xl md:text-2xl font-bold">
          <span className="bg-gradient-to-r from-accent-400 via-burgundy-400 to-burnt-400 bg-clip-text text-transparent animate-gradient-x">
            Stacey Craft - Activate Your Mind
          </span>
        </div>
        
        {/* Right side - Clean CTA like Tony's */}
        {/* <div className="hidden md:flex items-center">
          <button className="bg-accent-500 hover:bg-accent-400 text-black px-6 py-3 rounded-lg font-bold text-sm transition-all duration-200 hover:scale-105">
            BUY NOW - $17.99
          </button>
        </div> */}
        
        {/* Mobile CTA */}
        {/* <div className="md:hidden">
          <button className="bg-accent-500 hover:bg-accent-400 text-black px-4 py-2 rounded-lg font-bold text-xs">
            BUY NOW
          </button>
        </div> */}
      </div>
    </nav>
  );
}
