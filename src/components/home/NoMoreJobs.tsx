
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NoMoreJobsProps {
  onStartOver: () => void;
}

const NoMoreJobs = ({ onStartOver }: NoMoreJobsProps) => {
  return (
    <div className="h-[500px] flex items-center justify-center">
      <div className="text-center p-6">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Filter size={32} className="text-primary" />
        </div>
        <h3 className="text-xl font-semibold">No more jobs</h3>
        <p className="text-muted-foreground mt-2">You've seen all available jobs matching your criteria</p>
        <Button 
          className="mt-4"
          onClick={onStartOver}
        >
          Start Over
        </Button>
      </div>
    </div>
  );
};

export default NoMoreJobs;
