
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Phone, User, Calendar, GraduationCap, Briefcase, Video, ChevronRight, ChevronLeft, Info, X, Plus, Heart, MapPin } from "lucide-react";

// Signup steps components
import BasicInfoStep from "@/components/signup/BasicInfoStep";
import PersonalInfoStep from "@/components/signup/PersonalInfoStep";
import AddressStep from "@/components/signup/AddressStep";
import EducationStep from "@/components/signup/EducationStep";
import ExperienceStep from "@/components/signup/ExperienceStep";
import SkillsStep from "@/components/signup/SkillsStep";
import VideoResumeStep from "@/components/signup/VideoResumeStep";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    gender: "",
    province: "",
    city: "",
    address: "",
    education: {
      level: "",
      institution: "",
      field: "",
      yearCompleted: ""
    },
    hasExperience: null,
    workExperience: [],
    jobTitle: "",
    industry: "",
    preferredIndustry: "",
    skills: [],
    bio: ""
  });
  
  const [customSkill, setCustomSkill] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateNestedFormData = (category, field, value) => {
    setFormData(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  const handleNext = () => {
    // Basic validation based on current step
    if (step === 1 && (!formData.fullName || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword)) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }
    
    if (step === 1 && formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    if (step === 2 && (!formData.dateOfBirth || !formData.gender)) {
      toast({
        title: "Error",
        description: "Please provide your date of birth and gender",
        variant: "destructive",
      });
      return;
    }
    
    if (step === 3 && (!formData.province || !formData.city)) {
      toast({
        title: "Error",
        description: "Please select your province and city",
        variant: "destructive",
      });
      return;
    }
    
    // Move to next step
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    // Final validation
    if (formData.skills.length === 0) {
      toast({
        title: "Error",
        description: "Please add at least one skill",
        variant: "destructive",
      });
      return;
    }
    
    // Submit the form
    toast({
      title: "Account created!",
      description: "Welcome to Job Matchy Nepal. Let's find you the perfect job.",
    });
    
    // Redirect to home
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  // Render progress steps
  const renderStepIndicator = () => {
    return (
      <div className="flex justify-between items-center mb-4">
        {[1, 2, 3, 4, 5, 6, 7].map((stepNumber) => (
          <div key={stepNumber} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= stepNumber ? 'bg-primary text-white' : 'bg-accent text-foreground'
            }`}>
              {stepNumber}
            </div>
            {stepNumber < 7 && (
              <div className={`h-0.5 w-4 ${
                step > stepNumber ? 'bg-primary' : 'bg-border'
              }`}></div>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Render current step content
  const renderStepContent = () => {
    switch(step) {
      case 1:
        return (
          <BasicInfoStep 
            formData={formData} 
            updateFormData={updateFormData} 
          />
        );
      case 2:
        return (
          <PersonalInfoStep 
            formData={formData} 
            updateFormData={updateFormData} 
          />
        );
      case 3:
        return (
          <AddressStep 
            formData={formData} 
            updateFormData={updateFormData} 
          />
        );
      case 4:
        return (
          <EducationStep 
            formData={formData} 
            updateFormData={updateFormData} 
            updateNestedFormData={updateNestedFormData} 
          />
        );
      case 5:
        return (
          <ExperienceStep 
            formData={formData} 
            updateFormData={updateFormData} 
          />
        );
      case 6:
        return (
          <SkillsStep 
            formData={formData} 
            customSkill={customSkill}
            setCustomSkill={setCustomSkill}
            updateFormData={updateFormData} 
          />
        );
      case 7:
        return (
          <VideoResumeStep 
            handleSubmit={handleSubmit} 
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="mobile-container">
      <div className="mobile-page justify-center px-6">
        <div className="animate-fade-in space-y-6 w-full max-w-sm mx-auto">
          <div className="text-center">
            <div className="inline-block rounded-2xl bg-primary/10 p-2 mb-3">
              <img 
                src="/lovable-uploads/7eff5569-5ee3-4e6a-9f7b-ff9e7644f1a1.png" 
                alt="Job Matchy Nepal Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold">
              {step === 1 && "Create Account"}
              {step === 2 && "Personal Information"}
              {step === 3 && "Address Information"}
              {step === 4 && "Education"}
              {step === 5 && "Work Experience"}
              {step === 6 && "Skills & Bio"}
              {step === 7 && "Video Resume"}
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              {step === 1 && "Enter your details to create an account"}
              {step === 2 && "Tell us about yourself"}
              {step === 3 && "Where are you located?"}
              {step === 4 && "Your educational background"}
              {step === 5 && "Your work history and preferences"}
              {step === 6 && "Add your skills and write a short bio"}
              {step === 7 && "Create a video resume to stand out"}
            </p>
          </div>

          {renderStepIndicator()}

          <div>
            {renderStepContent()}

            <div className="flex justify-between mt-6">
              {step > 1 && (
                <button
                  type="button"
                  className="flex items-center text-primary"
                  onClick={handleBack}
                >
                  <ChevronLeft size={20} className="mr-1" />
                  Back
                </button>
              )}
              
              {step < 7 ? (
                <button 
                  type="button" 
                  className={`btn-primary ${step === 1 ? "w-full" : "w-auto px-8"} ml-auto flex items-center justify-center`}
                  onClick={handleNext}
                >
                  Continue
                  <ChevronRight size={20} className="ml-1" />
                </button>
              ) : (
                <button 
                  type="button" 
                  className="btn-primary w-auto px-8 ml-auto flex items-center justify-center"
                  onClick={handleSubmit}
                >
                  Finish Setup
                </button>
              )}
            </div>
          </div>

          {step === 1 && (
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-primary hover:underline">
                  Sign In
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
