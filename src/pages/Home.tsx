
import { useState, useEffect } from "react";
import MobileNavbar from "@/components/MobileNavbar";
import JobDetails from "@/components/JobDetails";
import JobFilter from "@/components/JobFilter";
import { jobListings } from "@/data/jobListings";
import Header from "@/components/home/Header";
import JobCard from "@/components/home/JobCard";
import JobActions from "@/components/home/JobActions";
import NoMoreJobs from "@/components/home/NoMoreJobs";
import useJobSwipe from "@/hooks/useJobSwipe";
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [savedJobs, setSavedJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const { toast } = useToast();
  
  const filteredJobs = jobListings;
  
  // Load saved and applied job counts from localStorage on component mount
  useEffect(() => {
    const savedJobsData = localStorage.getItem('savedJobs');
    const appliedJobsData = localStorage.getItem('appliedJobs');
    
    if (savedJobsData) {
      setSavedJobs(JSON.parse(savedJobsData));
    }
    
    if (appliedJobsData) {
      setAppliedJobs(JSON.parse(appliedJobsData));
    }
  }, []);
  
  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setShowDetails(true);
  };
  
  const handleJobApply = (jobId) => {
    if (!appliedJobs.includes(jobId)) {
      const updatedAppliedJobs = [...appliedJobs, jobId];
      setAppliedJobs(updatedAppliedJobs);
      localStorage.setItem('appliedJobs', JSON.stringify(updatedAppliedJobs));
      
      // Create a notification for the job application
      addNotification({
        id: Date.now(),
        title: "Application Submitted",
        message: `Your application for ${filteredJobs.find(job => job.id === jobId)?.title} has been submitted successfully.`,
        time: "Just now",
        read: false,
        type: "application"
      });
      
      toast({
        title: "Application Submitted",
        description: "Your application has been submitted successfully.",
      });
    }
  };
  
  // Function to add a new notification
  const addNotification = (notification) => {
    const existingNotifications = JSON.parse(localStorage.getItem('notifications') || '[]');
    const updatedNotifications = [notification, ...existingNotifications];
    localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
    
    // Update notification count
    const unreadCount = updatedNotifications.filter(n => !n.read).length;
    localStorage.setItem('notificationCount', unreadCount.toString());
  };
  
  const { 
    currentIndex, 
    setCurrentIndex, 
    cardRef, 
    handleCardSwipe,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    savedJobCount,
    setSavedJobCount
  } = useJobSwipe({
    jobs: filteredJobs,
    onJobSelect: handleJobSelect,
    onJobApply: handleJobApply
  });
  
  const handleViewDetails = () => {
    if (currentIndex < filteredJobs.length) {
      handleJobSelect(filteredJobs[currentIndex]);
    }
  };
  
  const handleCardClick = (job) => {
    setSelectedJob(job);
    setShowDetails(true);
  };

  return (
    <div className="mobile-container">
      <div className="mobile-page">
        <div className="space-y-3">
          <Header onFilterClick={() => setShowFilter(true)} />

          {currentIndex < filteredJobs.length ? (
            <div className="h-[520px] max-h-[calc(100vh-200px)] relative flex items-center justify-center">
              <JobCard 
                job={filteredJobs[currentIndex]}
                cardRef={cardRef}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                onClick={() => handleCardClick(filteredJobs[currentIndex])}
              />

              <JobActions 
                onReject={() => handleCardSwipe("left")}
                onApply={() => handleCardSwipe("up")}
                onSave={() => handleCardSwipe("right")}
                onDetails={handleViewDetails}
              />
            </div>
          ) : (
            <NoMoreJobs onStartOver={() => setCurrentIndex(0)} />
          )}
        </div>
      </div>
      
      {showDetails && selectedJob && (
        <JobDetails job={selectedJob} onClose={() => setShowDetails(false)} />
      )}
      
      {showFilter && (
        <JobFilter onClose={() => setShowFilter(false)} />
      )}
      
      <MobileNavbar 
        savedJobCount={savedJobCount} 
        appliedJobCount={appliedJobs.length} 
      />
    </div>
  );
};

export default Home;
