
import { useState } from "react";
import { Search } from "lucide-react";
import MobileNavbar from "@/components/MobileNavbar";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock job data - in a real app this would come from an API
  const jobListings = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp",
      location: "Remote",
      salary: "$120k - $150k",
      type: "Full-time",
      posted: "2 days ago",
      logo: "T",
      logoColor: "#56c1ff"
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "DesignStudio",
      location: "New York, NY",
      salary: "$90k - $110k",
      type: "Full-time",
      posted: "1 week ago",
      logo: "D",
      logoColor: "#004d80"
    },
    {
      id: 3,
      title: "Product Manager",
      company: "ProductLabs",
      location: "San Francisco, CA",
      salary: "$130k - $160k",
      type: "Full-time",
      posted: "3 days ago",
      logo: "P",
      logoColor: "#6366f1"
    },
    {
      id: 4,
      title: "Frontend Developer",
      company: "WebWizards",
      location: "Remote",
      salary: "$80k - $100k",
      type: "Contract",
      posted: "Just now",
      logo: "W",
      logoColor: "#8b5cf6"
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Austin, TX",
      salary: "$110k - $140k",
      type: "Full-time",
      posted: "5 days ago",
      logo: "C",
      logoColor: "#ec4899"
    }
  ];

  const filteredJobs = jobListings.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mobile-container">
      <div className="mobile-page">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Find Jobs</h1>
              <p className="text-muted-foreground">Discover your perfect career match</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-semibold">JD</span>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Search job titles, companies, or locations..."
              className="w-full pl-9 pr-3 py-3 rounded-lg border border-border bg-background"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2">
            <button className="btn-primary whitespace-nowrap text-sm py-2">
              All Jobs
            </button>
            <button className="btn-outline whitespace-nowrap text-sm py-2">
              Remote
            </button>
            <button className="btn-outline whitespace-nowrap text-sm py-2">
              Full-time
            </button>
            <button className="btn-outline whitespace-nowrap text-sm py-2">
              Contract
            </button>
            <button className="btn-outline whitespace-nowrap text-sm py-2">
              Tech
            </button>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold">Recommended for you</h2>
            
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div 
                  key={job.id} 
                  className="bg-white rounded-lg border border-border p-4 space-y-3 shadow-sm animate-slide-in-bottom"
                  style={{animationDelay: `${job.id * 100}ms`}}
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
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <span className="text-xs text-muted-foreground">{job.posted}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{job.salary}</span>
                    <button className="text-xs font-medium text-primary">View Details</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No jobs match your search</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
};

export default Home;
