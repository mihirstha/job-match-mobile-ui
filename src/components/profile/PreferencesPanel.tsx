
import { useState } from "react";
import { Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { MultiSelect } from "@/components/ui/multi-select";

interface PreferencesPanelProps {
  initialPreferences: {
    location: string[];
    jobTypes: string[];
    industries: string[];
    minSalary: string;
    workEnvironment: string[];
  };
  onSave: (preferences: any) => void;
}

const PreferencesPanel = ({ initialPreferences, onSave }: PreferencesPanelProps) => {
  const [preferences, setPreferences] = useState(initialPreferences);
  const { toast } = useToast();
  
  const locations = [
    "Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur", "Biratnagar", 
    "Birgunj", "Dharan", "Nepalgunj", "Butwal", "Hetauda", "Dhangadhi",
    "Janakpur", "Itahari", "Kirtipur", "Remote"
  ];
  
  const industries = [
    "Technology", "Finance", "Healthcare", "Education", "Retail", 
    "Hospitality", "Manufacturing", "Agriculture", "Tourism", 
    "Construction", "E-commerce", "Telecommunications", "NGOs/INGOs",
    "Media", "Entertainment", "Real Estate", "Transportation", "Energy"
  ];
  
  const handleSavePreferences = () => {
    // Validate that at least 3 locations and industries are selected
    if (preferences.location.length < 3) {
      toast({
        title: "Validation Error",
        description: "Please select at least 3 preferred locations",
        variant: "destructive",
      });
      return;
    }
    
    if (preferences.industries.length < 3) {
      toast({
        title: "Validation Error",
        description: "Please select at least 3 preferred industries",
        variant: "destructive",
      });
      return;
    }
    
    onSave(preferences);
    
    toast({
      title: "Preferences Saved",
      description: "Your job preferences have been updated successfully.",
    });
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Job Preferences</h2>
      <p className="text-sm text-gray-500">Customize your job preferences to get better matches</p>
      
      <div className="space-y-6">
        <MultiSelect 
          label="Preferred Locations"
          options={locations}
          selectedValues={preferences.location}
          onChange={values => setPreferences({...preferences, location: values})}
          minSelected={3}
          placeholder="Select at least 3 locations"
          allowCustom={true}
        />
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Job Types</label>
          <div className="grid grid-cols-2 gap-2">
            {["Full-time", "Part-time", "Contract", "Internship", "Remote", "Freelance"].map((type) => (
              <div key={type} className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id={`type-${type}`} 
                  checked={preferences.jobTypes.includes(type)} 
                  onChange={(e) => {
                    if (e.target.checked) {
                      setPreferences({
                        ...preferences, 
                        jobTypes: [...preferences.jobTypes, type]
                      });
                    } else {
                      setPreferences({
                        ...preferences, 
                        jobTypes: preferences.jobTypes.filter(t => t !== type)
                      });
                    }
                  }}
                  className="w-4 h-4 accent-primary"
                />
                <label htmlFor={`type-${type}`} className="text-sm">{type}</label>
              </div>
            ))}
          </div>
        </div>
        
        <MultiSelect 
          label="Preferred Industries"
          options={industries}
          selectedValues={preferences.industries}
          onChange={values => setPreferences({...preferences, industries: values})}
          minSelected={3}
          maxSelected={10}
          placeholder="Select at least 3 industries"
          allowCustom={true}
        />
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Minimum Salary (NPR)</label>
          <input 
            type="text" 
            className="w-full p-3 rounded-lg border border-border"
            value={preferences.minSalary.replace("NPR ", "")}
            onChange={(e) => setPreferences({...preferences, minSalary: e.target.value})}
            placeholder="e.g., 50,000"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Work Environment</label>
          <div className="flex flex-wrap gap-2">
            {["In-Office", "Remote", "Hybrid"].map((env) => (
              <button
                key={env}
                className={`px-4 py-2 rounded-full text-sm border ${
                  preferences.workEnvironment.includes(env) 
                    ? "bg-primary text-white border-primary" 
                    : "border-gray-300"
                }`}
                onClick={() => {
                  if (preferences.workEnvironment.includes(env)) {
                    setPreferences({
                      ...preferences,
                      workEnvironment: preferences.workEnvironment.filter(e => e !== env)
                    });
                  } else {
                    setPreferences({
                      ...preferences,
                      workEnvironment: [...preferences.workEnvironment, env]
                    });
                  }
                }}
              >
                {env}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <button 
        className="btn-primary w-full flex items-center justify-center mt-4"
        onClick={handleSavePreferences}
      >
        <Save size={18} className="mr-2" />
        Save Preferences
      </button>
    </div>
  );
};

export default PreferencesPanel;
