
import MobileNavbar from "@/components/MobileNavbar";

const SavedJobs = () => {
  // Mock saved job data
  const savedJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp",
      location: "Remote",
      salary: "$120k - $150k",
      type: "Full-time",
      saved: "2 days ago",
      logo: "T",
      logoColor: "#56c1ff"
    },
    {
      id: 3,
      title: "Product Manager",
      company: "ProductLabs",
      location: "San Francisco, CA",
      salary: "$130k - $160k",
      type: "Full-time",
      saved: "Yesterday",
      logo: "P",
      logoColor: "#6366f1"
    }
  ];

  return (
    <div className="mobile-container">
      <div className="mobile-page">
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold">Saved Jobs</h1>
            <p className="text-muted-foreground">Jobs you've bookmarked for later</p>
          </div>

          {savedJobs.length > 0 ? (
            <div className="space-y-4">
              {savedJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-lg border border-border p-4 space-y-3 shadow-sm">
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
                      <button className="text-xs font-medium text-primary">Apply Now</button>
                      <button className="text-xs font-medium text-muted-foreground">Remove</button>
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
      <MobileNavbar />
    </div>
  );
};

export default SavedJobs;
