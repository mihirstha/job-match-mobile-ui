
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Welcome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Find Your Dream Job",
      description: "Discover thousands of job opportunities across Nepal with just a swipe",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Perfect Match",
      description: "Our AI matches you with the perfect job based on your skills and preferences",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Apply with Ease",
      description: "Apply to jobs with just one tap and track your applications",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div className="mobile-container bg-white">
      <div className="flex flex-col h-full">
        <div className="flex-1 flex flex-col">
          <div className="flex justify-end p-4">
            <Link 
              to="/login" 
              className="text-primary font-medium"
            >
              Skip
            </Link>
          </div>
          
          <div className="flex items-center justify-center py-6">
            <img 
              src="/lovable-uploads/6d023d51-3e36-4395-81d8-133349e7eb9a.png" 
              alt="Job Matchy Nepal Logo" 
              className="h-16 object-contain"
            />
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center p-5">
            <div 
              className="w-full h-64 rounded-2xl mb-8 overflow-hidden"
              style={{
                backgroundImage: `url(${slides[currentSlide].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="h-full w-full bg-gradient-to-b from-transparent to-black/50 flex items-end p-5">
                <div className="text-white">
                  <h2 className="text-2xl font-bold mb-2">{slides[currentSlide].title}</h2>
                  <p>{slides[currentSlide].description}</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2 mb-8">
              {slides.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentSlide ? "bg-primary w-6" : "bg-gray-300"
                  } transition-all`}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="p-5 pb-10">
          {currentSlide < slides.length - 1 ? (
            <button 
              onClick={nextSlide}
              className="w-full py-3 bg-primary rounded-lg text-white font-medium flex items-center justify-center"
            >
              Next
              <ChevronRight size={20} className="ml-1" />
            </button>
          ) : (
            <div className="space-y-3">
              <Link
                to="/login"
                className="block w-full py-3 bg-primary rounded-lg text-white font-medium text-center"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="block w-full py-3 border border-primary rounded-lg text-primary font-medium text-center"
              >
                Create Account
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
