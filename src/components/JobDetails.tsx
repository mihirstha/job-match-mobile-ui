
import { X, Building, MapPin, Clock, DollarSign, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface JobDetailsProps {
  job: any;
  onClose: () => void;
}

const JobDetails = ({ job, onClose }: JobDetailsProps) => {
  const { toast } = useToast();
  
  const handleApply = () => {
    toast({
      title: "Application Submitted",
      description: `You've applied to ${job.title} at ${job.company}`,
    });
    onClose();
  };
  
  const handleSave = () => {
    toast({
      title: "Job Saved",
      description: `${job.title} at ${job.company} has been saved`,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
      <div className="bg-white rounded-t-2xl w-full h-[90vh] overflow-auto animate-slide-in-bottom">
        <div className="sticky top-0 bg-white z-10">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold">Job Details</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        
        <div className="p-5 pb-32">
          <div className="relative h-48 bg-gray-100 rounded-lg mb-4">
            <img 
              src={job.image} 
              alt={job.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
              <h1 className="text-white text-xl font-bold">{job.title}</h1>
              <p className="text-white/90">{job.company}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <MapPin size={16} />
                <span className="text-sm">Location</span>
              </div>
              <p className="font-medium">{job.location}</p>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <DollarSign size={16} />
                <span className="text-sm">Salary</span>
              </div>
              <p className="font-medium">{job.salary}</p>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <Briefcase size={16} />
                <span className="text-sm">Job Type</span>
              </div>
              <p className="font-medium">{job.type}</p>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <Clock size={16} />
                <span className="text-sm">Posted</span>
              </div>
              <p className="font-medium">{job.posted}</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">About the Role</h3>
            <p className="text-gray-700">{job.description}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Experience</h3>
            <p className="text-gray-700">{job.experience}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">About the Company</h3>
            <div className="flex items-center gap-3 mb-2">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: job.logoColor }}
              >
                {job.logo}
              </div>
              <div>
                <p className="font-semibold">{job.company}</p>
                <p className="text-sm text-gray-600">{job.location}</p>
              </div>
            </div>
            <p className="text-gray-700">A leading company in the technology sector, focused on innovative solutions and digital transformation.</p>
          </div>
        </div>
        
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t flex gap-3">
          <button 
            className="flex-1 py-3 border border-primary rounded-lg text-primary font-medium"
            onClick={handleSave}
          >
            Save
          </button>
          <button 
            className="flex-1 py-3 bg-primary rounded-lg text-white font-medium"
            onClick={handleApply}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
