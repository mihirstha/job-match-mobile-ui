
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Heart, Zap, Gift } from "lucide-react";

const Welcome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mascotAnimation, setMascotAnimation] = useState("bounce");
  
  const slides = [
    {
      title: "Welcome to Job Matchy Nepal! 🎉",
      description: "Meet Owly, your friendly job hunting companion! Discover thousands of FREE job opportunities across Nepal with just a swipe",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      icon: <Gift className="w-8 h-8 text-yellow-500" />,
      feature: "100% FREE"
    },
    {
      title: "Swipe Your Way to Success! 💼",
      description: "No more endless scrolling! Our AI matches you with perfect jobs based on your skills. Swipe right to apply instantly - it's that easy!",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      icon: <Heart className="w-8 h-8 text-red-500" />,
      feature: "SMART MATCHING"
    },
    {
      title: "Apply with Lightning Speed! ⚡",
      description: "One tap, one application! Track your progress, get notifications, and land your dream job faster than ever before",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      feature: "INSTANT APPLY"
    }
  ];
  
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setMascotAnimation("pulse");
      setTimeout(() => setMascotAnimation("bounce"), 500);
    }
  };

  // Auto-animate mascot every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMascotAnimation(prev => prev === "bounce" ? "pulse" : "bounce");
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mobile-container bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-10 left-4 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-8 w-16 h-16 bg-yellow-200/30 rounded-full animate-bounce"></div>
      <div className="absolute bottom-40 left-8 w-12 h-12 bg-green-200/40 rounded-full animate-pulse"></div>
      
      <div className="flex flex-col h-full relative z-10">
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-600 font-medium">LIVE</span>
            </div>
            <Link 
              to="/login" 
              className="text-primary font-medium hover:text-primary/80 transition-colors"
            >
              Skip
            </Link>
          </div>
          
          {/* Logo and Mascot Section */}
          <div className="flex flex-col items-center justify-center py-4 space-y-4">
            <img 
              src="/lovable-uploads/6d023d51-3e36-4395-81d8-133349e7eb9a.png" 
              alt="Job Matchy Nepal Logo" 
              className="h-12 object-contain"
            />
            
            {/* Animated Mascot */}
            <div className="relative">
              <div className={`transform transition-all duration-500 ${
                mascotAnimation === "bounce" ? "animate-bounce" : "animate-pulse scale-110"
              }`}>
                <img 
                  src="/lovable-uploads/32c87b52-af97-4dc9-a773-03157b5f397d.png" 
                  alt="Owly Mascot" 
                  className="w-20 h-20 object-contain drop-shadow-lg"
                />
              </div>
              {/* Speech bubble */}
              <div className="absolute -top-8 -right-4 bg-white rounded-lg px-3 py-1 shadow-lg border border-primary/20 animate-fade-in">
                <span className="text-xs text-primary font-medium">Hi there! 👋</span>
                <div className="absolute bottom-0 left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col items-center justify-center p-5">
            {/* Feature Badge */}
            <div className="mb-4 flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-lg border border-primary/20">
              {slides[currentSlide].icon}
              <span className="text-sm font-bold text-gray-700">{slides[currentSlide].feature}</span>
            </div>

            <div 
              className="w-full h-64 rounded-2xl mb-6 overflow-hidden shadow-xl border-4 border-white relative"
              style={{
                backgroundImage: `url(${slides[currentSlide].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="h-full w-full bg-gradient-to-b from-transparent via-transparent to-black/70 flex items-end p-5">
                <div className="text-white">
                  <h2 className="text-2xl font-bold mb-2 animate-fade-in">{slides[currentSlide].title}</h2>
                  <p className="text-sm leading-relaxed animate-slide-in-bottom">{slides[currentSlide].description}</p>
                </div>
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm animate-pulse"></div>
            </div>
            
            {/* Progress indicators with animation */}
            <div className="flex space-x-3 mb-8">
              {slides.map((_, index) => (
                <div 
                  key={index}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? "bg-primary w-8 shadow-lg" 
                      : "bg-gray-300 w-3 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-3 gap-4 w-full mb-6">
              <div className="text-center p-3 bg-white/50 rounded-lg backdrop-blur-sm">
                <div className="text-2xl mb-1">🆓</div>
                <span className="text-xs font-medium text-gray-700">100% Free</span>
              </div>
              <div className="text-center p-3 bg-white/50 rounded-lg backdrop-blur-sm">
                <div className="text-2xl mb-1">👆</div>
                <span className="text-xs font-medium text-gray-700">Easy Swipe</span>
              </div>
              <div className="text-center p-3 bg-white/50 rounded-lg backdrop-blur-sm">
                <div className="text-2xl mb-1">⚡</div>
                <span className="text-xs font-medium text-gray-700">Instant Apply</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="p-5 pb-10 space-y-3">
          {currentSlide < slides.length - 1 ? (
            <button 
              onClick={nextSlide}
              className="w-full py-4 bg-gradient-to-r from-primary to-blue-500 rounded-2xl text-white font-bold flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Continue the Journey
              <ChevronRight size={24} className="ml-2 animate-bounce" />
            </button>
          ) : (
            <div className="space-y-3">
              <Link
                to="/login"
                className="block w-full py-4 bg-gradient-to-r from-primary to-blue-500 rounded-2xl text-white font-bold text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                🚀 Start Job Hunting Now!
              </Link>
              <Link
                to="/signup"
                className="block w-full py-4 border-2 border-primary rounded-2xl text-primary font-bold text-center bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                ✨ Create Free Account
              </Link>
              
              {/* Trust indicators */}
              <div className="flex items-center justify-center space-x-4 pt-2">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Secure</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Private</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Fast</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
