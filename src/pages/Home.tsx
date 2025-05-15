
import { useState, useRef } from "react";
import { Filter, Heart, X } from "lucide-react";
import MobileNavbar from "@/components/MobileNavbar";
import { useToast } from "@/hooks/use-toast";
import JobDetails from "@/components/JobDetails";
import JobFilter from "@/components/JobFilter";

const Home = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  const cardRef = useRef(null);
  const { toast } = useToast();
  
  // Mock job data - in a real app this would come from an API
  const jobListings = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp Nepal",
      location: "Kathmandu, Nepal",
      salary: "₹120k - ₹150k",
      type: "Full-time",
      posted: "2 days ago",
      experience: "5+ years",
      skills: ["React", "TypeScript", "Redux", "Node.js"],
      logo: "T",
      logoColor: "#56c1ff",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      description: "We are looking for an experienced React developer to join our team. You will be responsible for building and maintaining our web applications.",
      responsibilities: [
        "Develop new user-facing features using React.js",
        "Build reusable components and libraries for future use",
        "Translate designs and wireframes into high-quality code",
        "Optimize components for maximum performance",
        "Collaborate with the design team to implement UI/UX features"
      ],
      requiresVideoResume: true
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "DesignStudio Nepal",
      location: "Pokhara, Nepal",
      salary: "₹90k - ₹110k",
      type: "Full-time",
      posted: "1 week ago",
      experience: "3+ years",
      skills: ["Figma", "Adobe XD", "Sketch", "User Research"],
      logo: "D",
      logoColor: "#004d80",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      description: "Looking for a talented UX/UI designer to create beautiful and functional interfaces for our clients.",
      responsibilities: [
        "Create user-centered designs by understanding business requirements",
        "Translate requirements into style guides, design systems, design patterns and attractive user interfaces",
        "Create original graphic designs (e.g. images, sketches and tables)",
        "Prepare and present rough drafts to stakeholders",
        "Identify and troubleshoot UX problems (e.g. responsiveness)"
      ],
      requiresVideoResume: false
    },
    {
      id: 3,
      title: "Product Manager",
      company: "ProductLabs Nepal",
      location: "Lalitpur, Nepal",
      salary: "₹130k - ₹160k",
      type: "Full-time",
      posted: "3 days ago",
      experience: "4+ years",
      skills: ["Product Strategy", "Roadmapping", "Agile", "User Stories"],
      logo: "P",
      logoColor: "#6366f1",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      description: "Join our team as a Product Manager to lead our product development efforts and ensure we're building the right solutions for our customers.",
      responsibilities: [
        "Define the product vision, strategy, and roadmap",
        "Gather and analyze feedback from customers, stakeholders and potential users",
        "Work closely with engineering teams to deliver features",
        "Define product features according to customer needs",
        "Lead the product development lifecycle from conception to launch"
      ],
      requiresVideoResume: true
    },
    {
      id: 4,
      title: "Frontend Developer",
      company: "WebWizards Nepal",
      location: "Bhaktapur, Nepal",
      salary: "₹80k - ₹100k",
      type: "Contract",
      posted: "Just now",
      experience: "2+ years",
      skills: ["JavaScript", "HTML", "CSS", "React"],
      logo: "W",
      logoColor: "#8b5cf6",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      description: "We're looking for a Frontend Developer to help build responsive and interactive web applications for our clients.",
      responsibilities: [
        "Implement responsive designs that work across various screen sizes",
        "Optimize applications for maximum speed and scalability",
        "Collaborate with back-end developers and web designers",
        "Develop new user-facing features",
        "Build reusable code for future use"
      ],
      requiresVideoResume: false
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "CloudTech Nepal",
      location: "Kathmandu, Nepal",
      salary: "₹110k - ₹140k",
      type: "Full-time",
      posted: "5 days ago",
      experience: "3+ years",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      logo: "C",
      logoColor: "#ec4899",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      description: "Join our DevOps team to help build and maintain our cloud infrastructure and deployment pipelines.",
      responsibilities: [
        "Build and implement CI/CD pipelines",
        "Automate infrastructure deployment using IaC tools",
        "Monitor system performance and troubleshoot issues",
        "Implement security best practices",
        "Collaborate with development teams to improve deployment processes"
      ],
      requiresVideoResume: true
    }
  ];

  const filteredJobs = jobListings;

  const handleCardSwipe = (direction) => {
    if (currentIndex >= filteredJobs.length) return;
    
    const job = filteredJobs[currentIndex];
    
    if (direction === "right") {
      toast({
        title: "Job Saved",
        description: `${job.title} at ${job.company} has been saved`,
      });
    } else if (direction === "left") {
      toast({
        title: "Job Rejected",
        description: `${job.title} has been rejected`,
      });
    } else if (direction === "up") {
      toast({
        title: "Application Initiated",
        description: `Starting application for ${job.title} at ${job.company}`,
      });
      
      // Instead of just showing toast, now we'll navigate to job details with application intent
      setSelectedJob({...job, applicationIntent: true});
      setShowDetails(true);
      return; // Don't move to next card yet since we're starting application flow
    }

    // Move to next card
    setCurrentIndex(currentIndex + 1);
  };
  
  const handleCardClick = (job) => {
    setSelectedJob(job);
    setShowDetails(true);
  };
  
  const handleTouchStart = useRef({ x: 0, y: 0 });
  const handleTouchMove = useRef({ x: 0, y: 0 });
  
  const onTouchStart = (e) => {
    handleTouchStart.current = { 
      x: e.touches[0].clientX, 
      y: e.touches[0].clientY 
    };
  };
  
  const onTouchMove = (e) => {
    handleTouchMove.current = { 
      x: e.touches[0].clientX, 
      y: e.touches[0].clientY 
    };
    
    if (cardRef.current) {
      const deltaX = handleTouchMove.current.x - handleTouchStart.current.x;
      const deltaY = handleTouchMove.current.y - handleTouchStart.current.y;
      
      cardRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${deltaX * 0.1}deg)`;
    }
  };
  
  const onTouchEnd = () => {
    if (!cardRef.current) return;
    
    const deltaX = handleTouchMove.current.x - handleTouchStart.current.x;
    const deltaY = handleTouchMove.current.y - handleTouchStart.current.y;
    
    cardRef.current.style.transition = 'transform 0.5s ease';
    
    if (deltaX > 100) {
      // Right swipe
      cardRef.current.style.transform = 'translateX(1000px) rotate(30deg)';
      handleCardSwipe("right");
    } else if (deltaX < -100) {
      // Left swipe
      cardRef.current.style.transform = 'translateX(-1000px) rotate(-30deg)';
      handleCardSwipe("left");
    } else if (deltaY < -100) {
      // Up swipe
      cardRef.current.style.transform = 'translateY(-1000px)';
      handleCardSwipe("up");
    } else {
      // Reset position
      cardRef.current.style.transform = 'translate(0px, 0px) rotate(0deg)';
    }
    
    setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.style.transition = '';
        cardRef.current.style.transform = 'translate(0px, 0px) rotate(0deg)';
      }
    }, 500);
  };

  return (
    <div className="mobile-container">
      <div className="mobile-page">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/7eff5569-5ee3-4e6a-9f7b-ff9e7644f1a1.png" 
                alt="Job Matchy Nepal Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold">Job Matchy Nepal</h1>
                <p className="text-muted-foreground">Find your perfect job match</p>
              </div>
            </div>
            <button 
              className="p-3 rounded-lg border border-border bg-background flex items-center justify-center"
              onClick={() => setShowFilter(true)}
            >
              <Filter size={20} className="text-primary" />
            </button>
          </div>

          {currentIndex < filteredJobs.length ? (
            <div className="h-[450px] relative flex items-center justify-center">
              <div 
                ref={cardRef}
                className="absolute bg-white rounded-xl border border-border overflow-hidden shadow-lg w-full"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                onClick={() => handleCardClick(filteredJobs[currentIndex])}
              >
                <div className="relative h-52 bg-gray-100">
                  <img 
                    src={filteredJobs[currentIndex].image} 
                    alt={filteredJobs[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/60"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-semibold">{filteredJobs[currentIndex].title}</h3>
                    <p>{filteredJobs[currentIndex].company}</p>
                  </div>
                </div>
                
                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <span className="text-gray-600">Location:</span>
                        <span className="font-medium">{filteredJobs[currentIndex].location}</span>
                      </div>
                    </div>
                    <span className="text-primary font-medium">{filteredJobs[currentIndex].salary}</span>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-1">
                      <span className="text-gray-600">Experience:</span>
                      <span className="font-medium">{filteredJobs[currentIndex].experience}</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 mb-1">Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {filteredJobs[currentIndex].skills.map((skill, index) => (
                        <span 
                          key={index} 
                          className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-5 w-full flex justify-between px-8 z-10">
                <button 
                  className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center"
                  onClick={() => handleCardSwipe("left")}
                >
                  <X size={24} className="text-red-500" />
                </button>
                
                <button 
                  className="w-14 h-14 rounded-full bg-primary shadow-lg flex items-center justify-center"
                  onClick={() => handleCardSwipe("up")}
                >
                  <span className="text-white font-semibold text-sm">Apply</span>
                </button>
                
                <button 
                  className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center"
                  onClick={() => handleCardSwipe("right")}
                >
                  <Heart size={24} className="text-green-500" />
                </button>
              </div>
            </div>
          ) : (
            <div className="h-[450px] flex items-center justify-center">
              <div className="text-center p-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Filter size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">No more jobs</h3>
                <p className="text-muted-foreground mt-2">You've seen all available jobs matching your criteria</p>
                <button 
                  className="btn-primary mt-4"
                  onClick={() => setCurrentIndex(0)}
                >
                  Start Over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {showDetails && selectedJob && (
        <JobDetails job={selectedJob} onClose={() => setShowDetails(false)} />
      )}
      
      {showFilter && (
        <JobFilter onClose={() => setShowFilter(false)} />
      )}
      
      <MobileNavbar />
    </div>
  );
};

export default Home;
