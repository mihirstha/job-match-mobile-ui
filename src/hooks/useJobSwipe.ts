
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface UseJobSwipeProps {
  jobs: any[];
  onJobSelect: (job: any) => void;
  onJobApply?: (jobId: any) => void;
}

const useJobSwipe = ({ jobs, onJobSelect, onJobApply }: UseJobSwipeProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<string | null>(null);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [savedJobCount, setSavedJobCount] = useState(0);
  const { toast } = useToast();
  
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Load saved jobs from localStorage on initialization
  useEffect(() => {
    const savedJobsFromStorage = localStorage.getItem('savedJobs');
    if (savedJobsFromStorage) {
      const parsedSavedJobs = JSON.parse(savedJobsFromStorage);
      setSavedJobCount(parsedSavedJobs.length);
    }
  }, []);
  
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
    setDirection(null);
  };
  
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;
    
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);
    
    // Determine swipe direction
    if (absDeltaX > 10 || absDeltaY > 10) {
      if (absDeltaX > absDeltaY) {
        setDirection(deltaX > 0 ? 'right' : 'left');
      } else {
        setDirection(deltaY < 0 ? 'up' : 'down');
      }
    }
    
    if (direction === 'left' || direction === 'right') {
      setOffsetX(deltaX * 0.5);
      setOffsetY(0);
    } else if (direction === 'up') {
      setOffsetY(deltaY * 0.5);
      setOffsetX(0);
    }
    
    if (direction) {
      cardRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${offsetX * 0.03}deg)`;
      
      if (direction === 'right') {
        cardRef.current.style.boxShadow = '0 0 10px rgba(52, 211, 153, 0.7)';
      } else if (direction === 'left') {
        cardRef.current.style.boxShadow = '0 0 10px rgba(239, 68, 68, 0.7)';
      } else if (direction === 'up') {
        cardRef.current.style.boxShadow = '0 0 10px rgba(59, 130, 246, 0.7)';
      }
    }
  };
  
  const onTouchEnd = () => {
    if (!cardRef.current) return;
    
    // Reset card position and style
    cardRef.current.style.transition = 'transform 0.3s ease';
    cardRef.current.style.transform = 'translate(0px, 0px)';
    cardRef.current.style.boxShadow = '';
    
    // Check if the swipe was strong enough to trigger an action
    const swipeThreshold = 100;
    
    if (Math.abs(offsetX) > swipeThreshold || Math.abs(offsetY) > swipeThreshold) {
      handleCardSwipe(direction);
    }
    
    // Reset offsets
    setTimeout(() => {
      setOffsetX(0);
      setOffsetY(0);
      cardRef.current.style.transition = '';
    }, 300);
  };
  
  const handleCardSwipe = (direction: string) => {
    if (!direction || currentIndex >= jobs.length) return;
    
    const currentJob = jobs[currentIndex];
    
    if (direction === 'right') {
      // Save job
      const savedJobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');
      
      if (!savedJobs.includes(currentJob.id)) {
        savedJobs.push(currentJob.id);
        localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
        setSavedJobCount(savedJobs.length);
        
        toast({
          title: "Job Saved",
          description: "This job has been added to your saved list.",
        });
      }
    } else if (direction === 'up') {
      // Apply for job
      if (onJobApply) {
        onJobApply(currentJob.id);
      }
    }
    
    // Move to the next card
    setCurrentIndex(currentIndex + 1);
  };
  
  return {
    currentIndex,
    setCurrentIndex,
    cardRef,
    handleCardSwipe,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    savedJobCount,
    setSavedJobCount
  };
};

export default useJobSwipe;
