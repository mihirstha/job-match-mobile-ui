
import React from "react";
import { Calendar } from "lucide-react";

interface PersonalInfoStepProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

const PersonalInfoStep = ({ formData, updateFormData }: PersonalInfoStepProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="dateOfBirth" className="text-sm font-medium">
          Date of Birth
        </label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <Calendar size={18} />
          </div>
          <input
            id="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
            className="input-field pl-10"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Gender</label>
        <div className="grid grid-cols-3 gap-3">
          <button
            type="button"
            className={`p-3 rounded-lg border text-center ${
              formData.gender === "male"
                ? "border-primary bg-primary/10 text-primary"
                : "border-border"
            }`}
            onClick={() => updateFormData("gender", "male")}
          >
            Male
          </button>
          <button
            type="button"
            className={`p-3 rounded-lg border text-center ${
              formData.gender === "female"
                ? "border-primary bg-primary/10 text-primary"
                : "border-border"
            }`}
            onClick={() => updateFormData("gender", "female")}
          >
            Female
          </button>
          <button
            type="button"
            className={`p-3 rounded-lg border text-center ${
              formData.gender === "other"
                ? "border-primary bg-primary/10 text-primary"
                : "border-border"
            }`}
            onClick={() => updateFormData("gender", "other")}
          >
            Other
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoStep;
