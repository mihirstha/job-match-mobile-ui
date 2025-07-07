import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Shield, Zap, Clock, CheckCircle, Plus, Users, MapPin } from "lucide-react";

const Welcome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Welcome to Job Matchy Nepal",
      subtitle: "Your Gateway to Career Success",
      description: "Find your perfect job match with our innovative platform designed for Nepal's job market.",
      icon: <Plus className="w-6 h-6 text-primary" />,
      color: "from-blue-50 to-cyan-50"
    },
    {
      title: "Easy Swipe Matching",
      subtitle: "Find Jobs Effortlessly",
      description: "Swipe right to show interest, swipe left to skip. Simple and intuitive job discovery.",
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      color: "from-orange-50 to-yellow-50"
    },
    {
      title: "Verified Profiles",
      subtitle: "Trust and Safety First",
      description: "All profiles are verified for credibility and safety. Trust the process.",
      icon: <Shield className="w-6 h-6 text-green-500" />,
      color: "from-green-50 to-emerald-50"
    },
    {
      title: "Flexible Work Options",
      subtitle: "From Full-Time to One-Day Gigs",
      description: "Full-time, part-time, internships, or same-day hiring - we support all work arrangements.",
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      color: "from-purple-50 to-pink-50"
    }
  ];
  
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  // Auto advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Zap className="w-5 h-5 text-primary" />,
      title: "Easy Swipe Module",
      description: "Discover jobs with simple swipe gestures - right for interest, left to skip."
    },
    {
      icon: <Shield className="w-5 h-5 text-green-500" />,
      title: "Verified Profiles",
      description: "All employers and job seekers are verified for your safety and trust."
    },
    {
      icon: <Clock className="w-5 h-5 text-purple-500" />,
      title: "Flexible Work Opportunities",
      description: "From full-time careers to part-time gigs and same-day jobs."
    }
  ];

  return (
    <div className="mobile-container bg-white relative overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-4 relative z-10">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/6d023d51-3e36-4395-81d8-133349e7eb9a.png" 
            alt="Job Matchy Nepal Logo" 
            className="h-8 object-contain"
          />
        </div>
        <Link 
          to="/login" 
          className="text-primary font-medium hover:text-primary/80 transition-colors text-sm"
        >
          Skip
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col h-full">
        {/* Hero Section with Slides */}
        <div className={`relative bg-gradient-to-br ${slides[currentSlide].color} px-6 py-8 transition-all duration-500`}>
          <div className="text-center space-y-4">
            {/* Feature Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4">
              {slides[currentSlide].icon}
            </div>
            
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">
                {slides[currentSlide].title}
              </h1>
              <p className="text-primary font-semibold text-lg">
                {slides[currentSlide].subtitle}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "bg-primary w-6" 
                    : "bg-white/50 w-2 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="flex-1 px-6 py-6 space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="p-6 space-y-3 bg-white border-t border-gray-100">
          <Link
            to="/signup"
            className="block w-full py-4 bg-gradient-to-r from-primary to-blue-500 rounded-xl text-white font-semibold text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Started - Register Free
          </Link>
          <Link
            to="/login"
            className="block w-full py-4 border-2 border-primary rounded-xl text-primary font-semibold text-center bg-white hover:bg-primary/5 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Already an Account? Sign In
          </Link>
          
          {/* Trust indicators */}
          <div className="flex items-center justify-center space-x-6 pt-2">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-500">100% Free</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-xs text-gray-500">Verified</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-xs text-gray-500">Secure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
