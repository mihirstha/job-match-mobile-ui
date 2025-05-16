import { useState } from "react";
import MobileNavbar from "@/components/MobileNavbar";
import { useToast } from "@/hooks/use-toast";
import { Camera, Video, Briefcase, GraduationCap, List, Edit, X, Check, Save } from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const { toast } = useToast();
  
  // Edit states - fixing the type error by properly typing editedContent
  const [editingSection, setEditingSection] = useState<string|null>(null);
  const [editedContent, setEditedContent] = useState<Record<string, any>>({});
  
  // Mock profile data
  const [profile, setProfile] = useState({
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
  
  const handleEditSection = (section) => {
    setEditingSection(section);
    setEditedContent({
      ...profile[section]
    });
  };
  
  const handleCancelEdit = () => {
    setEditingSection(null);
    setEditedContent({});
  };
  
  const handleSaveEdit = (section) => {
    setProfile({
      ...profile,
      [section]: editedContent
    });
    
    setEditingSection(null);
    setEditedContent({});
    
    toast({
      title: "Changes Saved",
      description: `Your ${section} information has been updated.`,
    });
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedContent({
      ...editedContent,
      [name]: value
    });
  };
  
  const handleUploadVideo = () => {
    toast({
      title: "Video Upload",
      description: "Video resume upload functionality would be implemented here",
    });
  };
  
  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    
    setTimeout(() => {
      window.location.href = "/login";
    }, 1500);
  };
  
  const handleDeactivateAccount = () => {
    toast({
      title: "Account Deactivation",
      description: "Your account will be deactivated. You can reactivate it by logging in again.",
    });
  };
  
  const handleDeleteAccount = () => {
    toast({
      title: "Account Deletion",
      description: "Your account has been scheduled for deletion. This cannot be undone.",
      variant: "destructive",
    });
  };

  // Function to handle work environment selection
  const toggleWorkEnvironment = (env) => {
    const currentEnvironments = [...profile.preferences.workEnvironment];
    
    if (currentEnvironments.includes(env)) {
      // Remove if already selected
      const updatedEnvironments = currentEnvironments.filter(item => item !== env);
      setProfile({
        ...profile,
        preferences: {
          ...profile.preferences,
          workEnvironment: updatedEnvironments
        }
      });
    } else {
      // Add if not selected
      setProfile({
        ...profile,
        preferences: {
          ...profile.preferences,
          workEnvironment: [...currentEnvironments, env]
        }
      });
    }
  };

  // Handle profile photo change
  const handlePhotoChange = () => {
    toast({
      title: "Photo Update",
      description: "Profile photo has been updated successfully.",
    });
  };

  const [showPrivacySettings, setShowPrivacySettings] = useState(false);
  const [showNotificationSettings, setShowNotificationSettings] = useState(false);
  
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
            <div className="space-y-6">
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
                  <button 
                    className="text-primary text-sm flex items-center"
                    onClick={() => handleEditSection('experience')}
                  >
                    <Edit size={14} className="mr-1" /> Edit
                  </button>
                </div>
                <div className="space-y-4">
                  {profile.experience.map((exp) => (
                    <div key={exp.id} className="border-l-2 border-primary/30 pl-4">
                      <h3 className="font-medium">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground">{exp.company} • {exp.duration}</p>
                      <p className="text-sm mt-1">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold flex items-center">
                    <List size={18} className="mr-2" />
                    Skills
                  </h2>
                  <button 
                    className="text-primary text-sm flex items-center"
                    onClick={() => handleEditSection('skills')}
                  >
                    <Edit size={14} className="mr-1" /> Edit
                  </button>
                </div>
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
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold flex items-center">
                    <GraduationCap size={18} className="mr-2" />
                    Education
                  </h2>
                  <button 
                    className="text-primary text-sm flex items-center"
                    onClick={() => handleEditSection('education')}
                  >
                    <Edit size={14} className="mr-1" /> Edit
                  </button>
                </div>
                <div className="space-y-4">
                  {profile.education.map((edu) => (
                    <div key={edu.id}>
                      <h3 className="font-medium">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground">{edu.institution} • {edu.year}</p>
                    </div>
                  ))}
                </div>
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
                  <select className="w-full p-3 rounded-lg border border-border">
                    <option value="any">Anywhere in Nepal</option>
                    <option value="kathmandu" selected>Kathmandu</option>
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
                  <select className="w-full p-3 rounded-lg border border-border" multiple size={4}>
                    <option value="technology" selected>Technology</option>
                    <option value="finance" selected>Finance</option>
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
                <button className="btn-outline w-full">
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
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
};

export default Profile;
