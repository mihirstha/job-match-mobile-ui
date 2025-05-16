
import { useRef } from "react";
import { type JobListing } from "@/data/jobListings";

interface JobCardProps {
  job: JobListing;
  cardRef: React.RefObject<HTMLDivElement>;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchEnd: () => void;
  onClick: () => void;
}

const JobCard = ({ 
  job, 
  cardRef, 
  onTouchStart, 
  onTouchMove, 
  onTouchEnd, 
  onClick 
}: JobCardProps) => {
  return (
    <div 
      ref={cardRef}
      className="absolute bg-white rounded-xl border border-border overflow-hidden shadow-lg w-full h-[460px]"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onClick={onClick}
    >
      <div className="relative h-64 bg-gray-100">
        <img 
          src={job.image} 
          alt={job.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/60"></div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl font-semibold">{job.title}</h3>
          <p>{job.company}</p>
        </div>
      </div>
      
      <div className="p-4 space-y-3 pb-20">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <span className="text-gray-600">Location:</span>
              <span className="font-medium">{job.location}</span>
            </div>
          </div>
          <span className="text-primary font-medium">{job.salary}</span>
        </div>
        
        <div>
          <div className="flex items-center space-x-1">
            <span className="text-gray-600">Experience:</span>
            <span className="font-medium">{job.experience}</span>
          </div>
        </div>
        
        <div>
          <p className="text-gray-600 mb-1">Skills:</p>
          <div className="flex flex-wrap gap-1">
            {job.skills.map((skill, index) => (
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
  );
};

export default JobCard;
