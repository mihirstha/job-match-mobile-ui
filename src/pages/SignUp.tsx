
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Phone, User, Calendar, GraduationCap, Briefcase, Video, ChevronRight, ChevronLeft, Info, X, Plus } from "lucide-react";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNestedChange = (category: string, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  const handleAddSkill = () => {
    if (customSkill.trim() && !formData.skills.includes(customSkill.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, customSkill.trim()]
      }));
      setCustomSkill("");
    }
  };
  
  const handleRemoveSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }));
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      // Validate password match
      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Error",
          description: "Passwords do not match.",
          variant: "destructive",
        });
        return;
      }
      
      // Move to next step
      setStep(2);
    } else if (step === 2) {
      // Basic validation for personal info
      if (!formData.dateOfBirth || !formData.gender) {
        toast({
          title: "Error",
          description: "Please fill all required fields",
          variant: "destructive",
        });
        return;
      }
      
      // Move to education info
      setStep(3);
    } else if (step === 3) {
      // Validate education
      if (!formData.education.level || !formData.education.field) {
        toast({
          title: "Error",
          description: "Please fill all required education fields",
          variant: "destructive",
        });
        return;
      }
      
      // Move to experience
      setStep(4);
    } else if (step === 4) {
      // Move to skills & bio
      setStep(5);
    } else if (step === 5) {
      // Validate skills
      if (formData.skills.length === 0) {
        toast({
          title: "Error",
          description: "Please add at least one skill",
          variant: "destructive",
        });
        return;
      }
      
      // Move to video resume intro
      setStep(6);
    } else {
      // Submit the full form
      toast({
        title: "Account created!",
        description: "Welcome to JobMatch Nepal. Let's find you the perfect job.",
      });
      
      // Redirect to home
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    }
  };

  // Predefined skills list
  const suggestedSkills = [
    "JavaScript", "React", "Node.js", "Python", "SQL", "Java", "C++", "Product Management",
    "UX/UI Design", "Figma", "Marketing", "SEO", "Content Writing", "Sales", "Customer Support",
    "Project Management", "Agile", "Scrum"
  ];

  return (
    <div className="mobile-container">
      <div className="mobile-page justify-center px-6">
        <div className="animate-fade-in space-y-6 w-full max-w-sm mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-bold">
              {step === 1 && "Create Account"}
              {step === 2 && "Personal Information"}
              {step === 3 && "Education"}
              {step === 4 && "Work Experience"}
              {step === 5 && "Skills & Bio"}
              {step === 6 && "Video Resume"}
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              {step === 1 && "Enter your details to create an account"}
              {step === 2 && "Tell us about yourself"}
              {step === 3 && "Your educational background"}
              {step === 4 && "Your work history and preferences"}
              {step === 5 && "Add your skills and write a short bio"}
              {step === 6 && "Create a video resume to stand out"}
            </p>
          </div>

          <div className="flex justify-between items-center mb-4">
            {[1, 2, 3, 4, 5, 6].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= stepNumber ? 'bg-primary text-white' : 'bg-accent text-foreground'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 6 && (
                  <div className={`h-0.5 w-6 ${
                    step > stepNumber ? 'bg-primary' : 'bg-border'
                  }`}></div>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleContinue} className="space-y-4">
            {step === 1 && (
              <>
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      <User size={18} />
                    </div>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="input-field pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      <Phone size={18} />
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="text-sm font-medium">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>
              </>
            )}

            {step === 2 && (
              <>
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
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
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
                      onClick={() => setFormData({ ...formData, gender: "male" })}
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
                      onClick={() => setFormData({ ...formData, gender: "female" })}
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
                      onClick={() => setFormData({ ...formData, gender: "other" })}
                    >
                      Other
                    </button>
                  </div>
                </div>
              </>
            )}

            {step === 3 && (
              <>
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
                      onChange={(e) => handleNestedChange("education", "level", e.target.value)}
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
                    onChange={(e) => handleNestedChange("education", "institution", e.target.value)}
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
                    onChange={(e) => handleNestedChange("education", "field", e.target.value)}
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
                    onChange={(e) => handleNestedChange("education", "yearCompleted", e.target.value)}
                    className="input-field"
                  />
                </div>
              </>
            )}

            {step === 4 && (
              <>
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
                      onClick={() => setFormData({ ...formData, hasExperience: true })}
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
                      onClick={() => setFormData({ ...formData, hasExperience: false })}
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
                          name="jobTitle"
                          type="text"
                          placeholder="e.g. Software Engineer"
                          value={formData.jobTitle}
                          onChange={handleChange}
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
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Select Industry</option>
                        <option value="technology">Technology</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Finance</option>
                        <option value="education">Education</option>
                        <option value="marketing">Marketing</option>
                        <option value="retail">Retail</option>
                        <option value="manufacturing">Manufacturing</option>
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
                    name="preferredIndustry"
                    value={formData.preferredIndustry}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Select Preferred Industry</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                    <option value="education">Education</option>
                    <option value="marketing">Marketing</option>
                    <option value="retail">Retail</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </>
            )}

            {step === 5 && (
              <>
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
                              setFormData(prev => ({
                                ...prev,
                                skills: [...prev.skills, skill]
                              }));
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
                    name="bio"
                    placeholder="Write a short professional summary about yourself"
                    rows={4}
                    value={formData.bio}
                    onChange={handleChange}
                    className="input-field w-full"
                  ></textarea>
                  <p className="text-xs text-muted-foreground">
                    This will be displayed on your profile to potential employers
                  </p>
                </div>
              </>
            )}

            {step === 6 && (
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-5 text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Video size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-medium">Video Resume</h3>
                  <p className="text-gray-600 text-sm">
                    Create a 60-second video resume to introduce yourself to potential employers.
                    A good video resume can significantly increase your chances of getting noticed.
                  </p>
                  
                  <div className="flex gap-3">
                    <button 
                      type="button"
                      className="flex-1 flex items-center justify-center gap-2 py-3 border border-primary rounded-lg text-primary"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                      Upload Video
                    </button>
                    <button 
                      type="button"
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary rounded-lg text-white"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                        <circle cx="12" cy="13" r="4"></circle>
                      </svg>
                      Record New
                    </button>
                  </div>
                  
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 mt-4">
                    <div className="flex items-start gap-2">
                      <Info size={20} className="text-primary shrink-0 mt-0.5" />
                      <div className="text-left text-sm">
                        <p className="font-medium mb-1">Tips for a great video resume:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Keep it under 60 seconds</li>
                          <li>Use good lighting and clear audio</li>
                          <li>Dress professionally</li>
                          <li>Highlight key skills and experiences</li>
                          <li>Express why you're a great candidate</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-500">
                    You can skip this step and add a video resume later from your profile
                  </p>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-6">
              {step > 1 && (
                <button
                  type="button"
                  className="flex items-center text-primary"
                  onClick={() => setStep(step - 1)}
                >
                  <ChevronLeft size={20} className="mr-1" />
                  Back
                </button>
              )}
              
              <button 
                type="submit" 
                className={`btn-primary ${step === 1 ? "w-full" : "px-8"} ml-auto`}
              >
                {step < 6 ? "Continue" : "Finish Setup"}
                {step < 6 && <ChevronRight size={20} className="ml-1" />}
              </button>
            </div>
          </form>

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
