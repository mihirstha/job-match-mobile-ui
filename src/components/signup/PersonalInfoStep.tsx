
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
        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            className={`py-2 px-4 rounded-lg border ${
              formData.gender === "male" ? "bg-primary text-white" : "bg-white"
            }`}
            onClick={() => updateFormData("gender", "male")}
          >
            Male
          </button>
          <button
            type="button"
            className={`py-2 px-4 rounded-lg border ${
              formData.gender === "female" ? "bg-primary text-white" : "bg-white"
            }`}
            onClick={() => updateFormData("gender", "female")}
          >
            Female
          </button>
          <button
            type="button"
            className={`py-2 px-4 rounded-lg border ${
              formData.gender === "other" ? "bg-primary text-white" : "bg-white"
            }`}
            onClick={() => updateFormData("gender", "other")}
          >
            Other
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Do you have any disability?</label>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            className={`py-2 px-4 rounded-lg border ${
              formData.hasDisability === true ? "bg-primary text-white" : "bg-white"
            }`}
            onClick={() => updateFormData("hasDisability", true)}
          >
            Yes
          </button>
          <button
            type="button"
            className={`py-2 px-4 rounded-lg border ${
              formData.hasDisability === false ? "bg-primary text-white" : "bg-white"
            }`}
            onClick={() => updateFormData("hasDisability", false)}
          >
            No
          </button>
        </div>
        
        {formData.hasDisability && (
          <div className="mt-2">
            <label htmlFor="disabilityDetails" className="text-sm font-medium">
              Please specify (optional):
            </label>
            <textarea
              id="disabilityDetails"
              value={formData.disabilityDetails || ""}
              onChange={(e) => updateFormData("disabilityDetails", e.target.value)}
              className="input-field w-full mt-1"
              rows={3}
              placeholder="Provide details about your disability if you're comfortable sharing"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalInfoStep;
