
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ProfileSetup = () => {
  const [jobPreferences, setJobPreferences] = useState({
    jobTypes: [],
    locationType: "",
    salary: "",
    location: "",
  });
  const { toast } = useToast();

  const handleJobTypeToggle = (type: string) => {
    setJobPreferences((prev) => {
      const updatedTypes = prev.jobTypes.includes(type)
        ? prev.jobTypes.filter((item) => item !== type)
        : [...prev.jobTypes, type];
      
      return { ...prev, jobTypes: updatedTypes };
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setJobPreferences((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (jobPreferences.jobTypes.length === 0) {
      toast({
        title: "Error",
        description: "Please select at least one job type.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Profile setup complete!",
      description: "Your preferences have been saved.",
    });
    
    // Redirect to home page
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };

  const jobTypes = [
    "Full-time",
    "Part-time",
    "Contract",
    "Internship",
    "Remote",
    "Freelance",
  ];

  return (
    <div className="mobile-container">
      <div className="mobile-page px-6 py-8">
        <div className="animate-fade-in space-y-6 w-full">
          <div>
            <h1 className="text-2xl font-bold">Complete Your Profile</h1>
            <p className="text-muted-foreground mt-1">Set your job preferences to get personalized recommendations</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-medium">
                Job Types
              </label>
              <p className="text-xs text-muted-foreground mb-3">
                Select all that you're interested in
              </p>
              <div className="grid grid-cols-2 gap-2">
                {jobTypes.map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => handleJobTypeToggle(type)}
                    className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                      jobPreferences.jobTypes.includes(type)
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-foreground"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="locationType" className="text-sm font-medium">
                Location Preference
              </label>
              <select
                id="locationType"
                name="locationType"
                value={jobPreferences.locationType}
                onChange={handleChange}
                className="input-field"
                required
              >
                <option value="">Select location preference</option>
                <option value="Remote">Remote Only</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On-site">On-site</option>
                <option value="Any">Any</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="location" className="text-sm font-medium">
                Preferred Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="e.g. New York, NY"
                value={jobPreferences.location}
                onChange={handleChange}
                className="input-field"
              />
              <p className="text-xs text-muted-foreground">
                Leave blank if you're open to any location
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="salary" className="text-sm font-medium">
                Expected Salary Range
              </label>
              <select
                id="salary"
                name="salary"
                value={jobPreferences.salary}
                onChange={handleChange}
                className="input-field"
                required
              >
                <option value="">Select salary range</option>
                <option value="0-30k">Less than $30,000</option>
                <option value="30k-50k">$30,000 - $50,000</option>
                <option value="50k-80k">$50,000 - $80,000</option>
                <option value="80k-100k">$80,000 - $100,000</option>
                <option value="100k-150k">$100,000 - $150,000</option>
                <option value="150k+">$150,000+</option>
              </select>
            </div>

            <div className="pt-4">
              <button type="submit" className="btn-primary w-full">
                Save Preferences
              </button>
            </div>
          </form>

          <div className="text-center">
            <button
              type="button"
              onClick={() => {
                window.location.href = "/";
              }}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              I'll do this later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
