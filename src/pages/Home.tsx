
import { useState } from "react";
import MobileNavbar from "@/components/MobileNavbar";
import JobDetails from "@/components/JobDetails";
import JobFilter from "@/components/JobFilter";
import { jobListings } from "@/data/jobListings";
import Header from "@/components/home/Header";
import JobCard from "@/components/home/JobCard";
import JobActions from "@/components/home/JobActions";
import NoMoreJobs from "@/components/home/NoMoreJobs";
import useJobSwipe from "@/hooks/useJobSwipe";

const Home = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  
  const filteredJobs = jobListings;
  
  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setShowDetails(true);
  };
  
  const { 
    currentIndex, 
    setCurrentIndex, 
    cardRef, 
    handleCardSwipe,
    onTouchStart,
    onTouchMove,
    onTouchEnd
  } = useJobSwipe({
    jobs: filteredJobs,
    onJobSelect: handleJobSelect
  });
  
  const handleCardClick = (job) => {
    setSelectedJob(job);
    setShowDetails(true);
  };

  return (
    <div className="mobile-container">
      <div className="mobile-page">
        <div className="space-y-4">
          <Header onFilterClick={() => setShowFilter(true)} />

          {currentIndex < filteredJobs.length ? (
            <div className="h-[520px] relative flex items-center justify-center">
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
      
      <MobileNavbar />
    </div>
  );
};

export default Home;
