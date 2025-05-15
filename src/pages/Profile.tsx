
import { useState } from "react";
import MobileNavbar from "@/components/MobileNavbar";
import { useToast } from "@/hooks/use-toast";
import { Camera, Video, Upload, Edit, Play, Briefcase, GraduationCap, List } from "lucide-react";

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
    ],
    videoResume: null
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
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold flex items-center">
                    <Briefcase size={18} className="mr-2" />
                    Experience
                  </h2>
                  <button className="text-primary text-sm flex items-center">
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
                  <button className="text-primary text-sm flex items-center">
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
                  <button className="text-primary text-sm flex items-center">
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
                        <Play size={32} className="text-white ml-1" />
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
                        <Upload size={18} />
                        Upload Video
                      </button>
                      <button 
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary rounded-lg text-white"
                      >
                        <Camera size={18} />
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
