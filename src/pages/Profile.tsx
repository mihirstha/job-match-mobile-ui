
import { useState } from "react";
import MobileNavbar from "@/components/MobileNavbar";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const { toast } = useToast();
  
  // Mock profile data
  const profile = {
    name: "John Doe",
    title: "Senior Software Developer",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    about: "Experienced software developer with over 8 years of experience in web development, specializing in React, Node.js, and TypeScript.",
    experience: [
      {
        id: 1,
        title: "Senior Frontend Developer",
        company: "TechCorp",
        duration: "2023 - Present",
        description: "Leading the frontend team in developing modern web applications using React and TypeScript."
      },
      {
        id: 2,
        title: "Full Stack Developer",
        company: "InnovateTech",
        duration: "2019 - 2023",
        description: "Developed full stack applications using React, Node.js, and MongoDB."
      }
    ],
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "CSS", "HTML", "MongoDB", "SQL"],
    education: [
      {
        id: 1,
        degree: "Master of Computer Science",
        institution: "Stanford University",
        year: "2018"
      },
      {
        id: 2,
        degree: "Bachelor of Computer Science",
        institution: "MIT",
        year: "2016"
      }
    ]
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

  return (
    <div className="mobile-container">
      <div className="mobile-page">
        <div className="space-y-6">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-primary text-white text-3xl font-bold flex items-center justify-center mb-3">
              {profile.name.split(' ').map(n => n[0]).join('')}
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
                <h2 className="text-lg font-semibold mb-2">About</h2>
                <p className="text-sm">{profile.about}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-2">Experience</h2>
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
                <h2 className="text-lg font-semibold mb-2">Skills</h2>
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
                <h2 className="text-lg font-semibold mb-2">Education</h2>
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
                Edit Profile
              </button>
            </div>
          )}

          {activeTab === "preferences" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-2">Job Preferences</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium">Job Types</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                        Full-time
                      </span>
                      <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                        Remote
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium">Salary Expectation</h3>
                    <p className="text-sm mt-1">$100,000 - $150,000</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium">Location Preference</h3>
                    <p className="text-sm mt-1">Remote, San Francisco Bay Area</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-lg font-semibold mb-2">Notification Preferences</h2>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm">Email Notifications</label>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label className="text-sm">Job Recommendations</label>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label className="text-sm">Application Updates</label>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
              
              <button className="btn-outline w-full">
                Update Preferences
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
                
                <button className="btn-outline w-full">
                  Privacy Settings
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
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
};

export default Profile;
