
import { useState } from "react";
import MobileNavbar from "@/components/MobileNavbar";
import JobDetails from "@/components/JobDetails";

const JobsApplied = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  
  // Mock applied job data
  const appliedJobs = [
    {
      id: 2,
      title: "UX/UI Designer",
      company: "DesignStudio Nepal",
      location: "Pokhara, Nepal",
      appliedDate: "May 12, 2025",
      status: "Under Review",
      logo: "D",
      logoColor: "#004d80",
      salary: "₹90k - ₹1.1 lakhs",
      type: "Full-time",
      experience: "3+ years",
      skills: ["Figma", "Adobe XD", "Sketch", "User Research"],
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
      id: 5,
      title: "DevOps Engineer",
      company: "CloudTech Nepal",
      location: "Kathmandu, Nepal",
      appliedDate: "May 10, 2025",
      status: "Shortlisted",
      logo: "C",
      logoColor: "#ec4899",
      salary: "₹1.1 lakhs - ₹1.4 lakhs",
      type: "Full-time",
      experience: "3+ years",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
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
    },
    {
      id: 1,
      title: "Frontend Developer",
      company: "WebWizards Nepal",
      location: "Bhaktapur, Nepal",
      appliedDate: "May 5, 2025",
      status: "Selected",
      logo: "W",
      logoColor: "#8b5cf6",
      salary: "₹80k - ₹1 lakh",
      type: "Contract",
      experience: "2+ years",
      skills: ["JavaScript", "HTML", "CSS", "React"],
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
      id: 3,
      title: "Product Manager",
      company: "ProductLabs Nepal",
      location: "Lalitpur, Nepal",
      appliedDate: "April 30, 2025",
      status: "Fulfilled",
      logo: "P",
      logoColor: "#6366f1",
      salary: "₹1.3 lakhs - ₹1.6 lakhs",
      type: "Full-time",
      experience: "4+ years",
      skills: ["Product Strategy", "Roadmapping", "Agile", "User Stories"],
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
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Selected":
        return "bg-green-100 text-green-800";
      case "Shortlisted":
        return "bg-blue-100 text-blue-800";  
      case "Under Review":
        return "bg-yellow-100 text-yellow-800";
      case "Fulfilled":
        return "bg-purple-100 text-purple-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };
  
  const handleViewDetails = (job) => {
    setSelectedJob(job);
    setShowDetails(true);
  };

  return (
    <div className="mobile-container">
      <div className="mobile-page pb-20">
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold">Applied Jobs</h1>
            <p className="text-muted-foreground">Track your job applications</p>
          </div>

          {appliedJobs.length > 0 ? (
            <div className="space-y-4">
              {appliedJobs.map((job) => (
                <div 
                  key={job.id} 
                  className="bg-white rounded-lg border border-border p-4 space-y-3 shadow-sm"
                  onClick={() => handleViewDetails(job)}
                >
                  <div className="flex gap-3">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: job.logoColor }}
                    >
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{job.location}</span>
                    <span className="text-sm text-muted-foreground">Applied on {job.appliedDate}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pt-1">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(job.status)}`}>
                      {job.status}
                    </span>
                    <button 
                      className="text-xs font-medium text-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewDetails(job);
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg">No applications yet</h3>
              <p className="text-muted-foreground text-center max-w-xs">
                Start applying to jobs to track your applications here
              </p>
              <button 
                className="btn-primary"
                onClick={() => window.location.href = "/"}
              >
                Browse Jobs
              </button>
            </div>
          )}
        </div>
      </div>
      
      {showDetails && selectedJob && (
        <JobDetails job={selectedJob} onClose={() => setShowDetails(false)} />
      )}
      
      <MobileNavbar />
    </div>
  );
};

export default JobsApplied;
