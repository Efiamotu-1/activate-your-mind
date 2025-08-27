// import './App.css'
import HeroSection from './components/HeroSection'
import Navigation from './components/Navigation'
import IntroVideo from './components/IntroVideo'
import AboutBook from './components/AboutBook'
import Testimonials from './components/Testimonials'
import Sales from './components/Sales'
import Maillist from './components/Maillist'
import AuthorBio from './components/AuthorBio'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-burgundy-900">
      {/* Atmospheric background elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-burgundy-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl"></div>
      </div> */}

      <Navigation />
      
              {/* Hero Section */}
        <section className="relative z-10 md:m-6 mx-2 rounded-lg bg-gradient-to-r from-burgundy-500/30 via-burnt-500/30 to-accent-500/30">
          <HeroSection />
        </section>

        {/* Intro Video Section */}
        <IntroVideo className="relative z-10" />
        
        {/* About the Book Section */}
        <AboutBook className="relative z-10" />
        
        {/* Testimonials Section */}
        <Testimonials className="relative z-10" />
        
              {/* Sales Section */}
      <Sales className="relative z-10" paypalLink="https://paypal.com/your-client-link" />
      
      {/* Email Capture Section */}
      <Maillist className="relative z-10" />
      
      {/* Author Bio Section */}
      <AuthorBio className="relative z-10" />
      
      {/* Footer Section */}
      <Footer />
      
    </div>
  )
}

export default App
