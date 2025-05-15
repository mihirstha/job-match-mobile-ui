
import MobileNavbar from "@/components/MobileNavbar";

const JobsApplied = () => {
  // Mock applied job data
  const appliedJobs = [
    {
      id: 2,
      title: "UX/UI Designer",
      company: "DesignStudio",
      location: "New York, NY",
      appliedDate: "May 12, 2025",
      status: "Under Review",
      logo: "D",
      logoColor: "#004d80"
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Austin, TX",
      appliedDate: "May 10, 2025",
      status: "Interview",
      logo: "C",
      logoColor: "#ec4899"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Interview":
        return "bg-green-100 text-green-800";
      case "Under Review":
        return "bg-yellow-100 text-yellow-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <div className="mobile-container">
      <div className="mobile-page">
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold">Applied Jobs</h1>
            <p className="text-muted-foreground">Track your job applications</p>
          </div>

          {appliedJobs.length > 0 ? (
            <div className="space-y-4">
              {appliedJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-lg border border-border p-4 space-y-3 shadow-sm">
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
                    <button className="text-xs font-medium text-primary">View Details</button>
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
      <MobileNavbar />
    </div>
  );
};

export default JobsApplied;
