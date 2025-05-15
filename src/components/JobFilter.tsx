
import { useState } from "react";
import { X } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface JobFilterProps {
  onClose: () => void;
}

const JobFilter = ({ onClose }: JobFilterProps) => {
  const { toast } = useToast();
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [jobType, setJobType] = useState("");
  const [startDate, setStartDate] = useState("");
  
  const handleApplyFilters = () => {
    toast({
      title: "Filters Applied",
      description: "Your job search has been filtered based on your preferences",
    });
    onClose();
  };
  
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
      <div className="bg-white rounded-t-2xl w-full h-[90vh] overflow-auto animate-slide-in-bottom">
        <div className="sticky top-0 bg-white z-10">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold">Filter Jobs</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        
        <div className="p-5 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Location</h3>
            <input
              type="text"
              placeholder="Enter city, state or 'Remote'"
              className="input-field w-full"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Job Industry</h3>
            <select 
              className="input-field w-full"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="">Select Industry</option>
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="education">Education</option>
              <option value="marketing">Marketing</option>
              <option value="design">Design</option>
              <option value="sales">Sales</option>
              <option value="customer_service">Customer Service</option>
            </select>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Salary Range</h3>
            <select 
              className="input-field w-full"
              value={salaryRange}
              onChange={(e) => setSalaryRange(e.target.value)}
            >
              <option value="">Select Salary Range</option>
              <option value="0-50000">$0 - $50,000</option>
              <option value="50000-80000">$50,000 - $80,000</option>
              <option value="80000-100000">$80,000 - $100,000</option>
              <option value="100000-150000">$100,000 - $150,000</option>
              <option value="150000+">$150,000+</option>
            </select>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Job Type</h3>
            <RadioGroup 
              className="space-y-3"
              value={jobType}
              onValueChange={setJobType}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="full-time" id="full-time" />
                <Label htmlFor="full-time">Full-time</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="part-time" id="part-time" />
                <Label htmlFor="part-time">Part-time</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="internship" id="internship" />
                <Label htmlFor="internship">Internship</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="freelance" id="freelance" />
                <Label htmlFor="freelance">Freelance</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Start Date</h3>
            <select 
              className="input-field w-full"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            >
              <option value="">Select Start Date</option>
              <option value="immediately">Immediately</option>
              <option value="1week">Within 1 Week</option>
              <option value="2weeks">Within 2 Weeks</option>
              <option value="1month">Within 1 Month</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
        </div>
        
        <div className="sticky bottom-0 p-4 bg-white border-t flex gap-3">
          <button 
            className="flex-1 py-3 border border-border rounded-lg text-foreground font-medium"
            onClick={onClose}
          >
            Reset
          </button>
          <button 
            className="flex-1 py-3 bg-primary rounded-lg text-white font-medium"
            onClick={handleApplyFilters}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobFilter;
