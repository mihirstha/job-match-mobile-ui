
import { useState } from "react";
import { X, Plus, Check } from "lucide-react";

interface SkillsSelectProps {
  selectedSkills: string[];
  onChange: (skills: string[]) => void;
  suggestedSkills: string[];
  minSkills?: number;
}

const SkillsSelect = ({
  selectedSkills,
  onChange,
  suggestedSkills,
  minSkills = 3
}: SkillsSelectProps) => {
  const [showAddSkill, setShowAddSkill] = useState(false);
  const [customSkill, setCustomSkill] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const handleAddSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      return;
    }
    
    onChange([...selectedSkills, skill]);
    setCustomSkill("");
    setErrorMessage(null);
  };
  
  const handleRemoveSkill = (skill: string) => {
    if (selectedSkills.length <= minSkills) {
      setErrorMessage(`Please select at least ${minSkills} skills`);
      return;
    }
    
    onChange(selectedSkills.filter((s) => s !== skill));
  };
  
  const handleCustomSkillSubmit = () => {
    if (!customSkill.trim()) {
      return;
    }
    
    handleAddSkill(customSkill.trim());
    setShowAddSkill(false);
  };
  
  // Filter out already selected skills
  const availableSuggestedSkills = suggestedSkills.filter(
    skill => !selectedSkills.includes(skill)
  );

  return (
    <div className="space-y-4">
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium">Selected Skills</label>
          <span className="text-xs text-gray-500">
            {selectedSkills.length} selected
            {minSkills > 0 && ` (min ${minSkills})`}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2 min-h-[80px] border border-border rounded-lg p-3">
          {selectedSkills.length > 0 ? (
            selectedSkills.map((skill) => (
              <div
                key={skill}
                className="bg-primary/10 text-primary text-sm px-3 py-1.5 rounded-full flex items-center"
              >
                {skill}
                <button
                  type="button"
                  className="ml-1.5 text-primary hover:text-primary/80"
                  onClick={() => handleRemoveSkill(skill)}
                >
                  <X size={14} />
                </button>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-400 text-sm">
              No skills selected
            </div>
          )}
        </div>
        
        {errorMessage && (
          <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
        )}
      </div>

      {showAddSkill ? (
        <div className="flex space-x-2">
          <input
            type="text"
            value={customSkill}
            onChange={(e) => setCustomSkill(e.target.value)}
            placeholder="Enter skill name"
            className="flex-1 input-field"
            autoFocus
          />
          <button
            type="button"
            onClick={handleCustomSkillSubmit}
            className="px-4 bg-primary text-white rounded-lg"
          >
            <Check size={18} />
          </button>
          <button
            type="button"
            onClick={() => setShowAddSkill(false)}
            className="px-4 border border-border rounded-lg"
          >
            <X size={18} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setShowAddSkill(true)}
          className="flex items-center justify-center w-full py-2.5 border border-dashed border-primary/50 text-primary rounded-lg"
        >
          <Plus size={18} className="mr-1" />
          Add Custom Skill
        </button>
      )}

      <div>
        <label className="text-sm font-medium block mb-2">Suggested Skills</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {availableSuggestedSkills.slice(0, 12).map((skill) => (
            <button
              key={skill}
              type="button"
              onClick={() => handleAddSkill(skill)}
              className="py-2 px-3 border border-gray-200 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-center"
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSelect;
