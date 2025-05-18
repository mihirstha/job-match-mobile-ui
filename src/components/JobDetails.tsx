import { useState } from "react";
import { X, MapPin, Clock, Briefcase, ArrowRight, Heart, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { type JobListing } from "@/data/jobListings";

interface JobDetailsProps {
  job: JobListing & { applicationIntent?: boolean; requiresVideoResume?: boolean };
  onClose: () => void;
}

const JobDetails = ({ job, onClose }: JobDetailsProps) => {
  const { toast } = useToast();
  const [applicationStep, setApplicationStep] = useState(job.applicationIntent ? 'confirm' : null);
  
  const handleApply = () => {
    setApplicationStep('confirm');
  };
  
  const handleConfirmApplication = () => {
    if (job.requiresVideoResume) {
      setApplicationStep('video');
    } else {
      completeApplication();
    }
  };
  
  const completeApplication = () => {
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
  
  const handleReject = () => {
    toast({
      title: "Job Rejected",
      description: `${job.title} has been rejected`,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center">
      <div className="bg-white rounded-t-2xl w-full max-h-[90vh] overflow-auto animate-slide-in-bottom">
        {applicationStep === null && (
          <>
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
                <p className="text-gray-700 mb-4">{job.description}</p>
                
                <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {job.responsibilities && job.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
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
                <p className="text-gray-700">A leading company in Nepal, focused on innovative solutions and digital transformation.</p>
              </div>
            </div>
            
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t flex gap-3">
              <button 
                className="flex-1 py-3 border border-red-500 rounded-lg text-red-500 font-medium flex items-center justify-center"
                onClick={handleReject}
              >
                <X size={18} className="mr-1" />
                Reject
              </button>
              <button 
                className="flex-1 py-3 bg-primary rounded-lg text-white font-medium flex items-center justify-center"
                onClick={handleApply}
              >
                <Star size={18} className="mr-1" aria-label="Apply" />
                Apply
              </button>
              <button 
                className="flex-1 py-3 border border-green-500 rounded-lg text-green-500 font-medium flex items-center justify-center"
                onClick={handleSave}
              >
                <Heart size={18} className="mr-1" />
                Save
              </button>
            </div>
          </>
        )}

        {applicationStep === 'confirm' && (
          <>
            <div className="sticky top-0 bg-white z-10">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-semibold">Confirm Application</h2>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            
            <div className="p-5 pb-32">
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-lg mb-1">{job.title}</h3>
                <p className="text-gray-600">{job.company} • {job.location}</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Application Details</h3>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <p className="text-gray-500 text-sm">Name</p>
                      <p className="font-medium">Aarav Sharma</p>
                    </div>
                    <div className="border-b pb-4">
                      <p className="text-gray-500 text-sm">Email</p>
                      <p className="font-medium">aarav.sharma@example.com</p>
                    </div>
                    <div className="border-b pb-4">
                      <p className="text-gray-500 text-sm">Phone</p>
                      <p className="font-medium">+977 98XXXXXXXX</p>
                    </div>
                    <div className="border-b pb-4">
                      <p className="text-gray-500 text-sm">Experience</p>
                      <p className="font-medium">8 years</p>
                    </div>
                    <div className="border-b pb-4">
                      <p className="text-gray-500 text-sm">Skills</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">React</span>
                        <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">TypeScript</span>
                        <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Node.js</span>
                      </div>
                    </div>
                    <div className="pb-4">
                      <p className="text-gray-500 text-sm">Education</p>
                      <p className="font-medium">Master of Computer Science, Kathmandu University</p>
                    </div>
                    
                    {/* Video Resume Note placed here between Education and Confirm button */}
                    {job.requiresVideoResume && (
                      <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200 mb-6">
                        <p className="text-sm text-yellow-800">
                          <span className="font-medium">Note:</span> This job requires a video resume. You'll be prompted to record or upload one after confirming.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t">
              <button 
                className="w-full py-3 bg-primary rounded-lg text-white font-medium flex items-center justify-center"
                onClick={handleConfirmApplication}
              >
                Confirm and Continue
                <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </>
        )}

        {applicationStep === 'video' && (
          <>
            <div className="sticky top-0 bg-white z-10">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-semibold">Video Resume</h2>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            
            <div className="p-5 pb-32">
              <div className="space-y-6">
                <div className="bg-primary/5 rounded-xl p-5 text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <polygon points="23 7 16 12 23 17 23 7"></polygon>
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium">Video Resume</h3>
                  <p className="text-gray-600 text-sm">
                    Create a 60-second video resume to introduce yourself to potential employers.
                    A good video resume can significantly increase your chances of getting noticed.
                  </p>
                  
                  <div className="flex gap-3">
                    <button 
                      className="flex-1 flex items-center justify-center gap-2 py-3 border border-primary rounded-lg text-primary"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                      Upload Video
                    </button>
                    <button 
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary rounded-lg text-white"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                        <circle cx="12" cy="13" r="4"></circle>
                      </svg>
                      Record New
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t space-y-3">
              <button 
                className="w-full py-3 bg-primary rounded-lg text-white font-medium"
                onClick={completeApplication}
              >
                Submit Application
              </button>
              
              <button 
                className="w-full py-3 border border-gray-300 rounded-lg text-gray-600 font-medium"
                onClick={() => setApplicationStep('confirm')}
              >
                Back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default JobDetails;
