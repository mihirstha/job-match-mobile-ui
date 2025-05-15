
import { useState } from "react";
import { X, MapPin, Briefcase, Calendar, DollarSign } from "lucide-react";

interface JobFilterProps {
  onClose: () => void;
}

const JobFilter = ({ onClose }: JobFilterProps) => {
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [salary, setSalary] = useState([20000, 100000]);
  const [jobType, setJobType] = useState("");
  const [startDate, setStartDate] = useState("");

  const handleApplyFilters = () => {
    // In a real app, this would apply the filters to the job search
    onClose();
  };

  const handleReset = () => {
    setLocation("");
    setIndustry("");
    setSalary([20000, 100000]);
    setJobType("");
    setStartDate("");
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end animate-fade-in">
      <div className="bg-white rounded-t-2xl w-full h-[80vh] overflow-auto animate-slide-in-bottom">
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
          <div className="space-y-3">
            <label className="text-sm font-medium">Location</label>
            <div className="relative">
              <MapPin size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-3 py-3 rounded-lg border border-border bg-background"
              >
                <option value="">All locations in Nepal</option>
                <option value="kathmandu">Kathmandu</option>
                <option value="pokhara">Pokhara</option>
                <option value="lalitpur">Lalitpur</option>
                <option value="bhaktapur">Bhaktapur</option>
                <option value="biratnagar">Biratnagar</option>
                <option value="birgunj">Birgunj</option>
                <option value="remote">Remote</option>
              </select>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium">Job Industry</label>
            <div className="relative">
              <Briefcase size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full pl-10 pr-3 py-3 rounded-lg border border-border bg-background"
              >
                <option value="">All Industries</option>
                <option value="technology">Information Technology</option>
                <option value="education">Education</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance & Banking</option>
                <option value="tourism">Tourism & Hospitality</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="retail">Retail</option>
                <option value="agriculture">Agriculture</option>
              </select>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium">Salary Range (NPR)</label>
            <div className="px-3">
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>₹{salary[0].toLocaleString()}</span>
                <span>₹{salary[1].toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="10000"
                max="500000"
                step="10000"
                className="w-full accent-primary"
                value={salary[1]}
                onChange={(e) => setSalary([salary[0], parseInt(e.target.value)])}
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium">Job Type</label>
            <div className="grid grid-cols-2 gap-3">
              {["Full-time", "Part-time", "Internship", "Freelance"].map((type) => (
                <button
                  key={type}
                  className={`p-3 rounded-lg border text-center ${
                    jobType === type.toLowerCase()
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border"
                  }`}
                  onClick={() => setJobType(jobType === type.toLowerCase() ? "" : type.toLowerCase())}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium">Job Start Date</label>
            <div className="relative">
              <Calendar size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full pl-10 pr-3 py-3 rounded-lg border border-border bg-background"
              />
            </div>
          </div>

          <div className="pt-4 space-y-3">
            <button
              className="w-full py-3 bg-primary rounded-lg text-white font-medium"
              onClick={handleApplyFilters}
            >
              Apply Filters
            </button>
            <button
              className="w-full py-3 border border-border rounded-lg font-medium"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFilter;
