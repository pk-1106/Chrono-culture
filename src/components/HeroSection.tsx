import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cultural-heritage.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 bg-gradient-cultural opacity-20"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-8 animate-in fade-in duration-1000">
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl">
            Cultural
            <br />
            <span className="bg-gradient-heritage bg-clip-text text-transparent">
              Heritage
            </span>
            <br />
            of India
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Discover the rich tapestry of traditions, art, architecture, and customs 
            that make India's cultural heritage truly magnificent
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button variant="heritage" size="lg" className="text-lg px-8 py-6">
              Explore States
            </Button>
            <Button variant="royal" size="lg" className="text-lg px-8 py-6">
              Learn Traditions
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Cultural Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-heritage-gold/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-12 h-12 bg-heritage-saffron/30 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 right-8 w-8 h-8 bg-heritage-emerald/25 rounded-full animate-ping"></div>
    </section>
  );
};

export default HeroSection;