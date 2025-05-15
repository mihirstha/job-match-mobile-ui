
import React from "react";
import { X, Plus } from "lucide-react";

interface SkillsStepProps {
  formData: any;
  customSkill: string;
  setCustomSkill: (value: string) => void;
  updateFormData: (field: string, value: any) => void;
}

const SkillsStep = ({ formData, customSkill, setCustomSkill, updateFormData }: SkillsStepProps) => {
  // Predefined skills list
  const suggestedSkills = [
    "JavaScript", "React", "Node.js", "Python", "SQL", "Java", "C++", "Product Management",
    "UX/UI Design", "Figma", "Marketing", "SEO", "Content Writing", "Sales", "Customer Support",
    "Project Management", "Agile", "Scrum", "HTML", "CSS", "PHP", "Data Analysis", "Machine Learning"
  ];

  const handleAddSkill = () => {
    if (customSkill.trim() && !formData.skills.includes(customSkill.trim())) {
      updateFormData("skills", [...formData.skills, customSkill.trim()]);
      setCustomSkill("");
    }
  };
  
  const handleRemoveSkill = (skill: string) => {
    updateFormData("skills", formData.skills.filter(s => s !== skill));
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Skills</label>
        <p className="text-xs text-muted-foreground mb-2">
          Select skills from the suggestions or add your own
        </p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {formData.skills.map((skill) => (
            <div 
              key={skill} 
              className="bg-primary/10 text-primary text-sm px-2 py-1 rounded-full flex items-center"
            >
              {skill}
              <button 
                type="button" 
                className="ml-1 text-primary hover:text-primary/80"
                onClick={() => handleRemoveSkill(skill)}
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <input
            type="text"
            placeholder="Add a custom skill"
            value={customSkill}
            onChange={(e) => setCustomSkill(e.target.value)}
            className="input-field flex-1"
          />
          <button
            type="button"
            className="p-2 bg-primary text-white rounded-lg"
            onClick={handleAddSkill}
          >
            <Plus size={20} />
          </button>
        </div>
        
        <div className="max-h-40 overflow-y-auto border border-border rounded-lg p-2">
          <div className="flex flex-wrap gap-2">
            {suggestedSkills.map((skill) => (
              <button
                key={skill}
                type="button"
                className={`text-sm px-3 py-1 rounded-full ${
                  formData.skills.includes(skill)
                    ? "bg-primary text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => {
                  if (!formData.skills.includes(skill)) {
                    updateFormData("skills", [...formData.skills, skill]);
                  } else {
                    handleRemoveSkill(skill);
                  }
                }}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="bio" className="text-sm font-medium">
          Professional Bio/Summary
        </label>
        <textarea
          id="bio"
          placeholder="Write a short professional summary about yourself"
          rows={4}
          value={formData.bio}
          onChange={(e) => updateFormData("bio", e.target.value)}
          className="input-field w-full"
        ></textarea>
        <p className="text-xs text-muted-foreground">
          This will be displayed on your profile to potential employers
        </p>
      </div>
    </div>
  );
};

export default SkillsStep;
