
import React from "react";
import { Info, Video } from "lucide-react";

interface VideoResumeStepProps {
  handleSubmit: () => void;
}

const VideoResumeStep = ({ handleSubmit }: VideoResumeStepProps) => {
  return (
    <div className="space-y-4">
      <div className="bg-gray-50 rounded-xl p-5 text-center space-y-4">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
          <Video size={32} className="text-primary" />
        </div>
        <h3 className="text-lg font-medium">Video Resume</h3>
        <p className="text-gray-600 text-sm">
          Create a 60-second video resume to introduce yourself to potential employers.
          A good video resume can significantly increase your chances of getting noticed.
        </p>
        
        <div className="flex gap-3">
          <button 
            type="button"
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
            type="button"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary rounded-lg text-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
            Record New
          </button>
        </div>
        
        <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 mt-4">
          <div className="flex items-start gap-2">
            <Info size={20} className="text-primary shrink-0 mt-0.5" />
            <div className="text-left text-sm">
              <p className="font-medium mb-1">Tips for a great video resume:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Keep it under 60 seconds</li>
                <li>Use good lighting and clear audio</li>
                <li>Dress professionally</li>
                <li>Highlight key skills and experiences</li>
                <li>Express why you're a great candidate</li>
              </ul>
            </div>
          </div>
        </div>
        
        <p className="text-xs text-gray-500">
          You can skip this step and add a video resume later from your profile
        </p>
      </div>
    </div>
  );
};

export default VideoResumeStep;
