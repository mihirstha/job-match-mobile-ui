
import React from "react";
import { GraduationCap } from "lucide-react";

interface EducationStepProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  updateNestedFormData: (category: string, field: string, value: any) => void;
}

const EducationStep = ({ formData, updateFormData, updateNestedFormData }: EducationStepProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="educationLevel" className="text-sm font-medium">
          Highest Education Level
        </label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <GraduationCap size={18} />
          </div>
          <select
            id="educationLevel"
            value={formData.education.level}
            onChange={(e) => updateNestedFormData("education", "level", e.target.value)}
            className="input-field pl-10"
            required
          >
            <option value="">Select your highest education</option>
            <option value="High School">High School</option>
            <option value="Associate">Associate Degree</option>
            <option value="Bachelor">Bachelor's Degree</option>
            <option value="Master">Master's Degree</option>
            <option value="PhD">PhD</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="institution" className="text-sm font-medium">
          Institution
        </label>
        <input
          id="institution"
          type="text"
          placeholder="Enter institution name"
          value={formData.education.institution}
          onChange={(e) => updateNestedFormData("education", "institution", e.target.value)}
          className="input-field"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="field" className="text-sm font-medium">
          Field of Study
        </label>
        <input
          id="field"
          type="text"
          placeholder="e.g. Computer Science, Business"
          value={formData.education.field}
          onChange={(e) => updateNestedFormData("education", "field", e.target.value)}
          className="input-field"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="yearCompleted" className="text-sm font-medium">
          Year Completed/Expected
        </label>
        <input
          id="yearCompleted"
          type="text"
          placeholder="e.g. 2022"
          value={formData.education.yearCompleted}
          onChange={(e) => updateNestedFormData("education", "yearCompleted", e.target.value)}
          className="input-field"
        />
      </div>
    </div>
  );
};

export default EducationStep;
