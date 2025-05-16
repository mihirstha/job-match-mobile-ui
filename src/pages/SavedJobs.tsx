
import { useState } from "react";
import MobileNavbar from "@/components/MobileNavbar";
import JobDetails from "@/components/JobDetails";
import { useToast } from "@/hooks/use-toast";

const SavedJobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const { toast } = useToast();
  
  // Mock saved job data
  const [savedJobs, setSavedJobs] = useState([
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp Nepal",
      location: "Kathmandu, Nepal",
      salary: "₹1.2 lakhs - ₹1.5 lakhs",
      type: "Full-time",
      saved: "2 days ago",
      logo: "T",
      logoColor: "#56c1ff",
      experience: "5+ years",
      skills: ["React", "TypeScript", "Redux", "Node.js"],
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
      id: 3,
      title: "Product Manager",
      company: "ProductLabs Nepal",
      location: "Lalitpur, Nepal",
      salary: "₹1.3 lakhs - ₹1.6 lakhs",
      type: "Full-time",
      saved: "Yesterday",
      logo: "P",
      logoColor: "#6366f1",
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
  ]);
  
  const handleRemoveJob = (jobId, e) => {
    e.stopPropagation();
    setSavedJobs(savedJobs.filter(job => job.id !== jobId));
    toast({
      title: "Job removed",
      description: "The job has been removed from your saved list",
    });
  };
  
  const handleApplyNow = (job, e) => {
    e.stopPropagation();
    setSelectedJob({...job, applicationIntent: true});
    setShowDetails(true);
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
            <h1 className="text-2xl font-bold">Saved Jobs</h1>
            <p className="text-muted-foreground">Jobs you've bookmarked for later</p>
          </div>

          {savedJobs.length > 0 ? (
            <div className="space-y-4">
              {savedJobs.map((job) => (
                <div 
                  key={job.id} 
                  className="bg-white rounded-lg border border-border p-4 space-y-3 shadow-sm"
                  onClick={() => handleViewDetails(job)}
                >
                  <div className="flex justify-between">
                    <div className="flex gap-3">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                        style={{ backgroundColor: job.logoColor }}
                      >
                        {job.logo}
                      </div>
                      <div>
                        <h3 className="font-semibold line-clamp-1">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                      </div>
                    </div>
                    <button className="text-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">
                        {job.type}
                      </span>
                      <span className="bg-accent text-foreground text-xs px-2 py-1 rounded-full font-medium">
                        {job.location}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">Saved {job.saved}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{job.salary}</span>
                    <div className="flex gap-2">
                      <button 
                        className="text-xs font-medium text-primary"
                        onClick={(e) => handleApplyNow(job, e)}
                      >
                        Apply Now
                      </button>
                      <button 
                        className="text-xs font-medium text-muted-foreground"
                        onClick={(e) => handleRemoveJob(job.id, e)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg">No saved jobs yet</h3>
              <p className="text-muted-foreground text-center max-w-xs">
                Bookmark jobs you're interested in to review them later
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

export default SavedJobs;
