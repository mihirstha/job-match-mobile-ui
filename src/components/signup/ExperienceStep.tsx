
import React from "react";
import { Briefcase } from "lucide-react";

interface ExperienceStepProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

const ExperienceStep = ({ formData, updateFormData }: ExperienceStepProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Do you have prior work experience?
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className={`p-3 rounded-lg border text-center ${
              formData.hasExperience === true
                ? "border-primary bg-primary/10 text-primary"
                : "border-border"
            }`}
            onClick={() => updateFormData("hasExperience", true)}
          >
            Yes
          </button>
          <button
            type="button"
            className={`p-3 rounded-lg border text-center ${
              formData.hasExperience === false
                ? "border-primary bg-primary/10 text-primary"
                : "border-border"
            }`}
            onClick={() => updateFormData("hasExperience", false)}
          >
            No
          </button>
        </div>
      </div>

      {formData.hasExperience && (
        <>
          <div className="space-y-2">
            <label htmlFor="jobTitle" className="text-sm font-medium">
              Current/Most Recent Job Title
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Briefcase size={18} />
              </div>
              <input
                id="jobTitle"
                type="text"
                placeholder="e.g. Software Engineer"
                value={formData.jobTitle}
                onChange={(e) => updateFormData("jobTitle", e.target.value)}
                className="input-field pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="industry" className="text-sm font-medium">
              Current Industry
            </label>
            <select
              id="industry"
              value={formData.industry}
              onChange={(e) => updateFormData("industry", e.target.value)}
              className="input-field"
            >
              <option value="">Select Industry</option>
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="education">Education</option>
              <option value="marketing">Marketing</option>
              <option value="hospitality">Hospitality</option>
              <option value="retail">Retail</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="agriculture">Agriculture</option>
              <option value="construction">Construction</option>
              <option value="telecom">Telecommunications</option>
              <option value="other">Other</option>
            </select>
          </div>
        </>
      )}

      <div className="space-y-2">
        <label htmlFor="preferredIndustry" className="text-sm font-medium">
          Preferred Industry for New Jobs
        </label>
        <select
          id="preferredIndustry"
          value={formData.preferredIndustry}
          onChange={(e) => updateFormData("preferredIndustry", e.target.value)}
          className="input-field"
        >
          <option value="">Select Preferred Industry</option>
          <option value="technology">Technology</option>
          <option value="healthcare">Healthcare</option>
          <option value="finance">Finance</option>
          <option value="education">Education</option>
          <option value="marketing">Marketing</option>
          <option value="hospitality">Hospitality</option>
          <option value="retail">Retail</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="agriculture">Agriculture</option>
          <option value="construction">Construction</option>
          <option value="telecom">Telecommunications</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="workEnvironment" className="text-sm font-medium">
          Preferred Work Environment
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            className={`p-2 rounded-lg border text-center text-sm ${
              formData.workEnvironment?.includes("remote")
                ? "border-primary bg-primary/10 text-primary"
                : "border-border"
            }`}
            onClick={() => {
              const environments = formData.workEnvironment || [];
              if (environments.includes("remote")) {
                updateFormData("workEnvironment", environments.filter(env => env !== "remote"));
              } else {
                updateFormData("workEnvironment", [...environments, "remote"]);
              }
            }}
          >
            Remote
          </button>
          <button
            type="button"
            className={`p-2 rounded-lg border text-center text-sm ${
              formData.workEnvironment?.includes("hybrid")
                ? "border-primary bg-primary/10 text-primary"
                : "border-border"
            }`}
            onClick={() => {
              const environments = formData.workEnvironment || [];
              if (environments.includes("hybrid")) {
                updateFormData("workEnvironment", environments.filter(env => env !== "hybrid"));
              } else {
                updateFormData("workEnvironment", [...environments, "hybrid"]);
              }
            }}
          >
            Hybrid
          </button>
          <button
            type="button"
            className={`p-2 rounded-lg border text-center text-sm ${
              formData.workEnvironment?.includes("onsite")
                ? "border-primary bg-primary/10 text-primary"
                : "border-border"
            }`}
            onClick={() => {
              const environments = formData.workEnvironment || [];
              if (environments.includes("onsite")) {
                updateFormData("workEnvironment", environments.filter(env => env !== "onsite"));
              } else {
                updateFormData("workEnvironment", [...environments, "onsite"]);
              }
            }}
          >
            On-site
          </button>
          <button
            type="button"
            className={`p-2 rounded-lg border text-center text-sm ${
              formData.workEnvironment?.includes("flexible")
                ? "border-primary bg-primary/10 text-primary"
                : "border-border"
            }`}
            onClick={() => {
              const environments = formData.workEnvironment || [];
              if (environments.includes("flexible")) {
                updateFormData("workEnvironment", environments.filter(env => env !== "flexible"));
              } else {
                updateFormData("workEnvironment", [...environments, "flexible"]);
              }
            }}
          >
            Flexible
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceStep;
