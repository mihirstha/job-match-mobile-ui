
import { Heart, X, Star } from "lucide-react";

interface JobActionsProps {
  onReject: () => void;
  onApply: () => void;
  onSave: () => void;
}

const JobActions = ({ onReject, onApply, onSave }: JobActionsProps) => {
  return (
    <div className="absolute bottom-10 w-full flex justify-between px-8 z-10">
      <button 
        className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center"
        onClick={onReject}
        aria-label="Reject job"
      >
        <X size={28} className="text-red-500" />
      </button>
      
      <button 
        className="w-16 h-16 rounded-full bg-primary shadow-lg flex items-center justify-center"
        onClick={onApply}
        aria-label="Apply for job"
        title="Apply"
      >
        <Star size={28} className="text-white" />
      </button>
      
      <button 
        className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center"
        onClick={onSave}
        aria-label="Save job"
      >
        <Heart size={28} className="text-green-500" />
      </button>
    </div>
  );
};

export default JobActions;
