import { useState } from "react";
import MobileNavbar from "@/components/MobileNavbar";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Camera, Video, Briefcase, GraduationCap, List, Edit, X, Check, Save, Plus } from "lucide-react";

// Define the types for our data structures
interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
}

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  year: string;
}

interface ProfileData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  about: string;
  experience: ExperienceItem[];
  skills: string[];
  education: EducationItem[];
  preferences: {
    location: string;
    jobTypes: string[];
    industries: string[];
    minSalary: string;
    workEnvironment: string[];
  };
  videoResume: null | string;
}

interface EditedContent {
  [key: string]: any;
}

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Edit states
  const [editingSection, setEditingSection] = useState<string|null>(null);
  const [editedContent, setEditedContent] = useState<EditedContent>({});
  
  // Change password state
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  
  // Mock profile data
  const [profile, setProfile] = useState<ProfileData>({
    name: "Aarav Sharma",
    title: "Senior Software Developer",
    email: "aarav.sharma@example.com",
    phone: "+977 98XXXXXXXX",
    location: "Kathmandu, Nepal",
    about: "Experienced software developer with over 8 years of experience in web development, specializing in React, Node.js, and TypeScript.",
    experience: [
      {
        id: 1,
        title: "Senior Frontend Developer",
        company: "TechCorp Nepal",
        duration: "2023 - Present",
        description: "Leading the frontend team in developing modern web applications using React and TypeScript."
      },
      {
        id: 2,
        title: "Full Stack Developer",
        company: "InnovateTech Nepal",
        duration: "2019 - 2023",
        description: "Developed full stack applications using React, Node.js, and MongoDB."
      }
    ],
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "CSS", "HTML", "MongoDB", "SQL"],
    education: [
      {
        id: 1,
        degree: "Master of Computer Science",
        institution: "Kathmandu University",
        year: "2018"
      },
      {
        id: 2,
        degree: "Bachelor of Computer Science",
        institution: "Tribhuvan University",
        year: "2016"
      }
    ],
    preferences: {
      location: "Kathmandu, Nepal",
      jobTypes: ["Full-time", "Remote"],
      industries: ["Technology", "Finance", "Education", "Healthcare", "E-commerce"],
      minSalary: "NPR 100,000",
      workEnvironment: ["Hybrid"]
    },
    videoResume: null
  });

  // Experience editing
  const handleEditExperience = () => {
    setEditingSection('experience');
    setEditedContent([...profile.experience]);
  };
  
  const handleUpdateExperienceField = (index: number, field: string, value: string) => {
    const updatedExperience = [...editedContent as ExperienceItem[]];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [field]: value
    };
    setEditedContent(updatedExperience);
  };
  
  const handleAddExperience = () => {
    const newExperience: ExperienceItem = {
      id: Date.now(), // Generate unique ID
      title: "",
      company: "",
      duration: "",
      description: ""
    };
    setEditedContent([...editedContent as ExperienceItem[], newExperience]);
  };
  
  const handleRemoveExperience = (index: number) => {
    const updatedExperience = [...editedContent as ExperienceItem[]];
    updatedExperience.splice(index, 1);
    setEditedContent(updatedExperience);
  };
  
  const handleSaveExperience = () => {
    setProfile({
      ...profile,
      experience: editedContent as ExperienceItem[]
    });
    setEditingSection(null);
    setEditedContent({});
    
    toast({
      title: "Changes Saved",
      description: "Your experience information has been updated.",
    });
  };
  
  // Skills editing
  const handleEditSkills = () => {
    setEditingSection('skills');
    setEditedContent([...profile.skills]);
  };
  
  const handleUpdateSkill = (index: number, value: string) => {
    const updatedSkills = [...editedContent as string[]];
    updatedSkills[index] = value;
    setEditedContent(updatedSkills);
  };
  
  const handleAddSkill = () => {
    setEditedContent([...editedContent as string[], ""]);
  };
  
  const handleRemoveSkill = (index: number) => {
    const updatedSkills = [...editedContent as string[]];
    updatedSkills.splice(index, 1);
    setEditedContent(updatedSkills);
  };
  
  const handleSaveSkills = () => {
    // Filter out empty skills
    const filteredSkills = (editedContent as string[]).filter(skill => skill.trim() !== "");
    
    setProfile({
      ...profile,
      skills: filteredSkills
    });
    setEditingSection(null);
    setEditedContent({});
    
    toast({
      title: "Changes Saved",
      description: "Your skills have been updated.",
    });
  };
  
  // Education editing
  const handleEditEducation = () => {
    setEditingSection('education');
    setEditedContent([...profile.education]);
  };
  
  const handleUpdateEducationField = (index: number, field: string, value: string) => {
    const updatedEducation = [...editedContent as EducationItem[]];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value
    };
    setEditedContent(updatedEducation);
  };
  
  const handleAddEducation = () => {
    const newEducation: EducationItem = {
      id: Date.now(), // Generate unique ID
      degree: "",
      institution: "",
      year: ""
    };
    setEditedContent([...editedContent as EducationItem[], newEducation]);
  };
  
  const handleRemoveEducation = (index: number) => {
    const updatedEducation = [...editedContent as EducationItem[]];
    updatedEducation.splice(index, 1);
    setEditedContent(updatedEducation);
  };
  
  const handleSaveEducation = () => {
    setProfile({
      ...profile,
      education: editedContent as EducationItem[]
    });
    setEditingSection(null);
    setEditedContent({});
    
    toast({
      title: "Changes Saved",
      description: "Your education information has been updated.",
    });
  };
  
  const handleEditSection = (section: string) => {
    setEditingSection(section);
    if (section === 'about') {
      setEditedContent({ about: profile.about });
    } else {
      setEditedContent({
        ...(profile[section as keyof ProfileData] as object)
      });
    }
  };
  
  const handleCancelEdit = () => {
    setEditingSection(null);
    setEditedContent({});
  };
  
  const handleSaveEdit = (section: string) => {
    if (section === 'about') {
      setProfile({
        ...profile,
        about: editedContent.about
      });
    } else {
      setProfile({
        ...profile,
        [section]: editedContent
      });
    }
    
    setEditingSection(null);
    setEditedContent({});
    
    toast({
      title: "Changes Saved",
      description: `Your ${section} information has been updated.`,
    });
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedContent({
      ...editedContent,
      [name]: value
    });
  };
  
  const handlePhotoChange = () => {
    toast({
      title: "Photo Update",
      description: "Profile photo has been updated successfully.",
    });
  };

  const [showPrivacySettings, setShowPrivacySettings] = useState(false);
  const [showNotificationSettings, setShowNotificationSettings] = useState(false);
  
  // Add missing handlers
  const handleDeactivateAccount = () => {
    toast({
      title: "Account Deactivated",
      description: "Your account has been temporarily deactivated.",
      variant: "destructive"
    });
    setShowPrivacySettings(false);
  };

  const handleDeleteAccount = () => {
    toast({
      title: "Account Deleted",
      description: "Your account and all data have been permanently deleted.",
      variant: "destructive"
    });
    setShowPrivacySettings(false);
  };

  const handleUploadVideo = () => {
    toast({
      title: "Upload Started",
      description: "Please select a video file to upload.",
    });
  };

  const toggleWorkEnvironment = (env: string) => {
    const currentEnv = [...profile.preferences.workEnvironment];
    const index = currentEnv.indexOf(env);
    
    if (index === -1) {
      currentEnv.push(env);
    } else {
      currentEnv.splice(index, 1);
    }
    
    setProfile({
      ...profile,
      preferences: {
        ...profile.preferences,
        workEnvironment: currentEnv
      }
    });
    
    toast({
      title: "Preference Updated",
      description: `Work environment preference updated to ${currentEnv.join(', ')}.`,
    });
  };

  // Updated logout handler with navigation
  const handleLogout = () => {
    // Clear any stored user data/tokens
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    
    // Redirect to welcome screen
    setTimeout(() => {
      navigate("/welcome");
    }, 1000);
  };
  
  // Password change handlers
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleChangePasswordSubmit = () => {
    // Validation
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      toast({
        title: "Missing Information",
        description: "Please fill all password fields.",
        variant: "destructive"
      });
      return;
    }
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "New password and confirmation do not match.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, we would send this to an API
    toast({
      title: "Password Changed",
      description: "Your password has been successfully updated.",
    });
    
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
    
    setShowPasswordChange(false);
  };
  
  // Password change panel
  const renderPasswordChange = () => {
    if (!showPasswordChange) return null;
    
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center">
        <div className="bg-white rounded-t-2xl w-full max-h-[90vh] overflow-auto animate-slide-in-bottom">
          <div className="sticky top-0 bg-white z-10">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Change Password</h2>
              <button
                onClick={() => setShowPasswordChange(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          
          <div className="p-5 space-y-4">
            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-sm font-medium">Current Password</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  className="w-full border border-gray-300 rounded-lg p-3"
                />
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-medium">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full border border-gray-300 rounded-lg p-3"
                />
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-medium">Confirm New Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  className="w-full border border-gray-300 rounded-lg p-3"
                />
              </div>
            </div>
            
            <button 
              className="w-full py-3 bg-primary text-white font-medium rounded-lg mt-4"
              onClick={handleChangePasswordSubmit}
            >
              Update Password
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  // Privacy settings panel
  const renderPrivacySettings = () => {
    if (!showPrivacySettings) return null;
    
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center">
        <div className="bg-white rounded-t-2xl w-full max-h-[90vh] overflow-auto animate-slide-in-bottom">
          <div className="sticky top-0 bg-white z-10">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Privacy Settings</h2>
              <button
                onClick={() => setShowPrivacySettings(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          
          <div className="p-5 space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Profile Visibility</h3>
              <div className="flex items-center justify-between">
                <span>Show my profile to recruiters</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
              </div>
              <div className="flex items-center justify-between">
                <span>Show my profile in search results</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">Data Privacy</h3>
              <div className="flex items-center justify-between">
                <span>Allow data for job recommendations</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
              </div>
            </div>
            
            <div className="space-y-2 pt-4 border-t">
              <button 
                className="w-full py-3 text-yellow-500 font-medium border border-yellow-200 rounded-lg"
                onClick={handleDeactivateAccount}
              >
                Deactivate Account
              </button>
              
              <button 
                className="w-full py-3 text-red-500 font-medium border border-red-200 rounded-lg"
                onClick={handleDeleteAccount}
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // Notification settings panel
  const renderNotificationSettings = () => {
    if (!showNotificationSettings) return null;
    
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center">
        <div className="bg-white rounded-t-2xl w-full max-h-[90vh] overflow-auto animate-slide-in-bottom">
          <div className="sticky top-0 bg-white z-10">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Notification Settings</h2>
              <button
                onClick={() => setShowNotificationSettings(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          
          <div className="p-5 space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Email Notifications</h3>
              <div className="flex items-center justify-between">
                <span>Job recommendations</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
              </div>
              <div className="flex items-center justify-between">
                <span>Application updates</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
              </div>
              <div className="flex items-center justify-between">
                <span>Interview invitations</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">Push Notifications</h3>
              <div className="flex items-center justify-between">
                <span>Job matches</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
              </div>
              <div className="flex items-center justify-between">
                <span>Application status changes</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
              </div>
              <div className="flex items-center justify-between">
                <span>Messages from recruiters</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mobile-container">
      <div className="mobile-page">
        <div className="space-y-6">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-primary text-white text-3xl font-bold flex items-center justify-center mb-3 relative">
              {profile.name.split(' ').map(n => n[0]).join('')}
              <button 
                className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md border border-gray-200"
                onClick={handlePhotoChange}
              >
                <Camera size={18} className="text-primary" />
              </button>
            </div>
            <h1 className="text-xl font-bold">{profile.name}</h1>
            <p className="text-muted-foreground">{profile.title}</p>
            <p className="text-sm text-muted-foreground">{profile.location}</p>
          </div>

          <div className="flex border-b border-border">
            <button
              className={`flex-1 py-3 text-sm font-medium ${
                activeTab === "profile"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground"
              }`}
              onClick={() => setActiveTab("profile")}
            >
              Profile
            </button>
            <button
              className={`flex-1 py-3 text-sm font-medium ${
                activeTab === "video"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground"
              }`}
              onClick={() => setActiveTab("video")}
            >
              Video Resume
            </button>
            <button
              className={`flex-1 py-3 text-sm font-medium ${
                activeTab === "preferences"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground"
              }`}
              onClick={() => setActiveTab("preferences")}
            >
              Preferences
            </button>
            <button
              className={`flex-1 py-3 text-sm font-medium ${
                activeTab === "settings"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground"
              }`}
              onClick={() => setActiveTab("settings")}
            >
              Settings
            </button>
          </div>

          {activeTab === "profile" && (
            <div className="space-y-6 pb-16">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold">About</h2>
                  {editingSection !== 'about' && (
                    <button 
                      className="text-primary text-sm flex items-center"
                      onClick={() => handleEditSection('about')}
                    >
                      <Edit size={14} className="mr-1" /> Edit
                    </button>
                  )}
                </div>
                
                {editingSection === 'about' ? (
                  <div className="space-y-3">
                    <textarea
                      name="about"
                      value={editedContent.about || profile.about}
                      onChange={handleInputChange}
                      className="w-full border border-border rounded-lg p-3 min-h-[100px]"
                    />
                    <div className="flex justify-end gap-2">
                      <button 
                        className="p-2 border border-border rounded-lg"
                        onClick={handleCancelEdit}
                      >
                        <X size={18} />
                      </button>
                      <button 
                        className="p-2 bg-primary text-white rounded-lg"
                        onClick={() => handleSaveEdit('about')}
                      >
                        <Check size={18} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm">{profile.about}</p>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold flex items-center">
                    <Briefcase size={18} className="mr-2" />
                    Experience
                  </h2>
                  {editingSection !== 'experience' && (
                    <button 
                      className="text-primary text-sm flex items-center"
                      onClick={handleEditExperience}
                    >
                      <Edit size={14} className="mr-1" /> Edit
                    </button>
                  )}
                </div>
                
                {editingSection === 'experience' ? (
                  <div className="space-y-4">
                    {(editedContent as ExperienceItem[]).map((exp, index) => (
                      <div key={exp.id || index} className="border border-border rounded-lg p-4 space-y-3">
                        <div className="flex justify-between">
                          <h3 className="font-medium">Experience {index + 1}</h3>
                          <button 
                            className="text-red-500"
                            onClick={() => handleRemoveExperience(index)}
                          >
                            <X size={16} />
                          </button>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <label className="text-sm font-medium">Job Title</label>
                            <input
                              type="text"
                              value={exp.title}
                              onChange={(e) => handleUpdateExperienceField(index, 'title', e.target.value)}
                              className="w-full border border-border rounded-lg p-2 mt-1"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Company</label>
                            <input
                              type="text"
                              value={exp.company}
                              onChange={(e) => handleUpdateExperienceField(index, 'company', e.target.value)}
                              className="w-full border border-border rounded-lg p-2 mt-1"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Duration</label>
                            <input
                              type="text"
                              value={exp.duration}
                              onChange={(e) => handleUpdateExperienceField(index, 'duration', e.target.value)}
                              className="w-full border border-border rounded-lg p-2 mt-1"
                              placeholder="e.g. 2019 - 2023"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Description</label>
                            <textarea
                              value={exp.description}
                              onChange={(e) => handleUpdateExperienceField(index, 'description', e.target.value)}
                              className="w-full border border-border rounded-lg p-2 mt-1 min-h-[80px]"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-between">
                      <button 
                        className="flex items-center text-primary font-medium"
                        onClick={handleAddExperience}
                      >
                        <Plus size={16} className="mr-1" /> Add Experience
                      </button>
                      <div className="flex gap-2">
                        <button 
                          className="px-3 py-2 border border-border rounded-lg"
                          onClick={handleCancelEdit}
                        >
                          Cancel
                        </button>
                        <button 
                          className="px-3 py-2 bg-primary text-white rounded-lg"
                          onClick={handleSaveExperience}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {profile.experience.map((exp) => (
                      <div key={exp.id} className="border-l-2 border-primary/30 pl-4">
                        <h3 className="font-medium">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground">{exp.company} • {exp.duration}</p>
                        <p className="text-sm mt-1">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold flex items-center">
                    <List size={18} className="mr-2" />
                    Skills
                  </h2>
                  {editingSection !== 'skills' && (
                    <button 
                      className="text-primary text-sm flex items-center"
                      onClick={handleEditSkills}
                    >
                      <Edit size={14} className="mr-1" /> Edit
                    </button>
                  )}
                </div>
                
                {editingSection === 'skills' ? (
                  <div className="space-y-3">
                    <div className="border border-border rounded-lg p-3">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {(editedContent as string[]).map((skill, index) => (
                          <div key={index} className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full flex items-center">
                            <input
                              type="text"
                              value={skill}
                              onChange={(e) => handleUpdateSkill(index, e.target.value)}
                              className="bg-transparent border-none outline-none w-full max-w-[100px]"
                            />
                            <button 
                              className="ml-1"
                              onClick={() => handleRemoveSkill(index)}
                            >
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                        <button 
                          className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full flex items-center"
                          onClick={handleAddSkill}
                        >
                          <Plus size={14} className="mr-1" /> Add
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <button 
                        className="px-3 py-2 border border-border rounded-lg"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                      <button 
                        className="px-3 py-2 bg-primary text-white rounded-lg"
                        onClick={handleSaveSkills}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold flex items-center">
                    <GraduationCap size={18} className="mr-2" />
                    Education
                  </h2>
                  {editingSection !== 'education' && (
                    <button 
                      className="text-primary text-sm flex items-center"
                      onClick={handleEditEducation}
                    >
                      <Edit size={14} className="mr-1" /> Edit
                    </button>
                  )}
                </div>
                
                {editingSection === 'education' ? (
                  <div className="space-y-4">
                    {(editedContent as EducationItem[]).map((edu, index) => (
                      <div key={edu.id || index} className="border border-border rounded-lg p-4 space-y-3">
                        <div className="flex justify-between">
                          <h3 className="font-medium">Education {index + 1}</h3>
                          <button 
                            className="text-red-500"
                            onClick={() => handleRemoveEducation(index)}
                          >
                            <X size={16} />
                          </button>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <label className="text-sm font-medium">Degree</label>
                            <input
                              type="text"
                              value={edu.degree}
                              onChange={(e) => handleUpdateEducationField(index, 'degree', e.target.value)}
                              className="w-full border border-border rounded-lg p-2 mt-1"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Institution</label>
                            <input
                              type="text"
                              value={edu.institution}
                              onChange={(e) => handleUpdateEducationField(index, 'institution', e.target.value)}
                              className="w-full border border-border rounded-lg p-2 mt-1"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Year</label>
                            <input
                              type="text"
                              value={edu.year}
                              onChange={(e) => handleUpdateEducationField(index, 'year', e.target.value)}
                              className="w-full border border-border rounded-lg p-2 mt-1"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-between">
                      <button 
                        className="flex items-center text-primary font-medium"
                        onClick={handleAddEducation}
                      >
                        <Plus size={16} className="mr-1" /> Add Education
                      </button>
                      <div className="flex gap-2">
                        <button 
                          className="px-3 py-2 border border-border rounded-lg"
                          onClick={handleCancelEdit}
                        >
                          Cancel
                        </button>
                        <button 
                          className="px-3 py-2 bg-primary text-white rounded-lg"
                          onClick={handleSaveEducation}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {profile.education.map((edu) => (
                      <div key={edu.id}>
                        <h3 className="font-medium">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">{edu.institution} • {edu.year}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button className="btn-outline w-full">
                Download Resume
              </button>
            </div>
          )}

          {activeTab === "video" && (
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-5 text-center space-y-4">
                {profile.videoResume ? (
                  <div className="relative rounded-lg overflow-hidden h-64 bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white ml-1">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
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
                        className="flex-1 flex items-center justify-center gap-2 py-3 border border-primary rounded-lg text-primary"
                        onClick={handleUploadVideo}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Upload Video
                      </button>
                      <button 
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary rounded-lg text-white"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                          <circle cx="12" cy="13" r="4"></circle>
                        </svg>
                        Record New
                      </button>
                    </div>
                    <div className="text-sm text-gray-500 mt-4">
                      <p className="font-medium mb-1">Tips for a great video resume:</p>
                      <ul className="text-left list-disc list-inside space-y-1">
                        <li>Keep it under 60 seconds</li>
                        <li>Use good lighting and clear audio</li>
                        <li>Dress professionally</li>
                        <li>Highlight your key skills and experiences</li>
                        <li>Be authentic and confident</li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {activeTab === "preferences" && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold">Job Preferences</h2>
              <p className="text-sm text-gray-500">Customize your job preferences to get better matches</p>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Preferred Location</label>
                  <select className="w-full p-3 rounded-lg border border-border" defaultValue="kathmandu">
                    <option value="any">Anywhere in Nepal</option>
                    <option value="kathmandu">Kathmandu</option>
                    <option value="pokhara">Pokhara</option>
                    <option value="lalitpur">Lalitpur</option>
                    <option value="bhaktapur">Bhaktapur</option>
                    <option value="remote">Remote Only</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Job Types</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Full-time", "Part-time", "Contract", "Internship", "Remote", "Freelance"].map((type) => (
                      <div key={type} className="flex items-center gap-2">
                        <input 
                          type="checkbox" 
                          id={`type-${type}`} 
                          defaultChecked={profile.preferences.jobTypes.includes(type)} 
                          className="w-4 h-4 accent-primary"
                        />
                        <label htmlFor={`type-${type}`} className="text-sm">{type}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Industries</label>
                  <select className="w-full p-3 rounded-lg border border-border" multiple size={4} defaultValue={profile.preferences.industries}>
                    <option value="technology">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="retail">Retail</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="tourism">Tourism</option>
                    <option value="construction">Construction</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="telecom">Telecommunications</option>
                    <option value="ngos">NGOs/INGOs</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Minimum Salary (NPR)</label>
                  <input 
                    type="text" 
                    className="w-full p-3 rounded-lg border border-border"
                    defaultValue={profile.preferences.minSalary.replace("NPR ", "")}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Work Environment</label>
                  <div className="flex flex-wrap gap-2">
                    {["In-Office", "Remote", "Hybrid"].map((env) => (
                      <button
                        key={env}
                        className={`px-4 py-2 rounded-full text-sm border ${
                          profile.preferences.workEnvironment.includes(env) 
                            ? "bg-primary text-white border-primary" 
                            : "border-gray-300"
                        }`}
                        onClick={() => toggleWorkEnvironment(env)}
                      >
                        {env}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <button className="btn-primary w-full flex items-center justify-center mt-4">
                <Save size={18} className="mr-2" />
                Save Preferences
              </button>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-2">Account Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <p className="text-sm">{profile.email}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Phone</label>
                    <p className="text-sm">{profile.phone}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <button 
                  className="btn-outline w-full"
                  onClick={() => setShowPasswordChange(true)}
                >
                  Change Password
                </button>
                
                <button 
                  className="btn-outline w-full"
                  onClick={() => setShowPrivacySettings(true)}
                >
                  Privacy Settings
                </button>
                
                <button 
                  className="btn-outline w-full"
                  onClick={() => setShowNotificationSettings(true)}
                >
                  Notification Settings
                </button>
                
                <button 
                  className="w-full py-3 text-red-500 font-medium border border-red-200 rounded-lg"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </div>
            </div>
          )}
          
          {/* Render modals */}
          {renderPrivacySettings()}
          {renderNotificationSettings()}
          {renderPasswordChange()}
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
};

export default Profile;
