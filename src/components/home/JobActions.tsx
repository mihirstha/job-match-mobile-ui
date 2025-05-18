
import { Heart, X, Star } from "lucide-react";

interface JobActionsProps {
  onReject: () => void;
  onApply: () => void;
  onSave: () => void;
  onDetails: () => void;
}

const JobActions = ({ onReject, onApply, onSave, onDetails }: JobActionsProps) => {
  return (
    <div className="absolute bottom-4 w-full flex justify-between px-8 z-10">
      <button 
        className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center"
        onClick={onReject}
        aria-label="Reject job"
      >
        <X size={24} className="text-red-500" />
      </button>
      
      <button 
        className="w-14 h-14 rounded-full bg-primary shadow-lg flex items-center justify-center"
        onClick={onApply}
        aria-label="Apply for job"
        title="Apply"
      >
        <Star size={24} className="text-white" />
      </button>
      
      <button 
        className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center"
        onClick={onSave}
        aria-label="Save job"
      >
        <Heart size={24} className="text-green-500" />
      </button>
    </div>
  );
};

export default JobActions;
