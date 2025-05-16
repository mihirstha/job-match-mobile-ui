
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { type JobListing } from "@/data/jobListings";

interface UseJobSwipeProps {
  jobs: JobListing[];
  onJobSelect: (job: JobListing) => void;
}

const useJobSwipe = ({ jobs, onJobSelect }: UseJobSwipeProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  const handleTouchStart = useRef({ x: 0, y: 0 });
  const handleTouchMove = useRef({ x: 0, y: 0 });
  
  const handleCardSwipe = (direction: "left" | "right" | "up") => {
    if (currentIndex >= jobs.length) return;
    
    const job = jobs[currentIndex];
    
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
      
      onJobSelect({...job, applicationIntent: true});
      return; // Don't move to next card yet since we're starting application flow
    }

    // Move to next card
    setCurrentIndex(currentIndex + 1);
  };
  
  const onTouchStart = (e: React.TouchEvent) => {
    handleTouchStart.current = { 
      x: e.touches[0].clientX, 
      y: e.touches[0].clientY 
    };
  };
  
  const onTouchMove = (e: React.TouchEvent) => {
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
  
  return {
    currentIndex,
    setCurrentIndex,
    cardRef,
    handleCardSwipe,
    onTouchStart,
    onTouchMove,
    onTouchEnd
  };
};

export default useJobSwipe;
