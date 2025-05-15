
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profession: "",
    experience: "",
    skills: [],
    education: "",
  });
  
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const skills = e.target.value.split(',').map(skill => skill.trim());
    setFormData(prev => ({ ...prev, skills }));
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
      
      // Move to professional info
      setStep(2);
    } else {
      // Submit the full form
      toast({
        title: "Account created!",
        description: "Welcome to JobMatch. Let's find you the perfect job.",
      });
      
      // Redirect to onboarding or profile completion
      setTimeout(() => {
        window.location.href = "/profile-setup";
      }, 1500);
    }
  };

  return (
    <div className="mobile-container">
      <div className="mobile-page justify-center px-6">
        <div className="animate-fade-in space-y-6 w-full max-w-sm mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-bold">{step === 1 ? 'Create Account' : 'Professional Info'}</h1>
            <p className="text-muted-foreground text-sm mt-1">
              {step === 1 
                ? 'Enter your details to create an account' 
                : 'Tell us about your professional background'}
            </p>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary text-white' : 'bg-accent text-foreground'}`}>
                1
              </div>
              <div className={`h-0.5 w-12 ${step >= 2 ? 'bg-primary' : 'bg-border'}`}></div>
            </div>
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary text-white' : 'bg-accent text-foreground'}`}>
                2
              </div>
            </div>
          </div>

          <form onSubmit={handleContinue} className="space-y-4">
            {step === 1 ? (
              <>
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
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
            ) : (
              <>
                <div className="space-y-2">
                  <label htmlFor="profession" className="text-sm font-medium">
                    Profession
                  </label>
                  <input
                    id="profession"
                    name="profession"
                    type="text"
                    placeholder="e.g. Software Engineer"
                    value={formData.profession}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="experience" className="text-sm font-medium">
                    Years of Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="input-field"
                    required
                  >
                    <option value="">Select years of experience</option>
                    <option value="0-1">Less than 1 year</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="skills" className="text-sm font-medium">
                    Skills
                  </label>
                  <input
                    id="skills"
                    name="skills"
                    type="text"
                    placeholder="e.g. JavaScript, React, Node.js"
                    value={formData.skills.join(", ")}
                    onChange={handleSkillsChange}
                    className="input-field"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter skills separated by commas
                  </p>
                </div>

                <div className="space-y-2">
                  <label htmlFor="education" className="text-sm font-medium">
                    Highest Education
                  </label>
                  <select
                    id="education"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="input-field"
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
              </>
            )}

            <button type="submit" className="btn-primary w-full mt-6">
              {step === 1 ? 'Continue' : 'Create Account'}
            </button>
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

          {step === 2 && (
            <div className="text-center">
              <button 
                onClick={() => setStep(1)} 
                className="text-sm font-medium text-primary hover:underline"
              >
                Back to previous step
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
