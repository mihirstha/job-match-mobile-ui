
import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

interface PersonalInfoStepProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

const PersonalInfoStep = ({ formData, updateFormData }: PersonalInfoStepProps) => {
  const [dateError, setDateError] = useState<string | null>(null);
  
  // Validate date of birth to ensure user is at least 16 years old
  const validateDateOfBirth = (dateValue: string) => {
    const today = new Date();
    const birthDate = new Date(dateValue);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    if (age < 16) {
      setDateError("You must be at least 16 years old to register");
      return false;
    } else {
      setDateError(null);
      return true;
    }
  };
  
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = e.target.value;
    if (validateDateOfBirth(dateValue)) {
      updateFormData("dateOfBirth", dateValue);
    } else {
      // Still update the form data to show the selected date
      updateFormData("dateOfBirth", dateValue);
    }
  };
  
  // Set maximum date (16 years ago from today)
  const getMaxDate = () => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 16);
    return today.toISOString().split('T')[0];
  };

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
            value={formData.dateOfBirth || ""}
            onChange={handleDateChange}
            className={`input-field pl-10 ${dateError ? 'border-red-500' : ''}`}
            max={getMaxDate()}
            required
          />
        </div>
        {dateError && (
          <p className="text-xs text-red-500 mt-1">{dateError}</p>
        )}
        <p className="text-xs text-gray-500 mt-1">You must be at least 16 years old to register</p>
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
