import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { User, Phone, MapPin, Briefcase, CheckCircle, Book, Globe, Edit, Camera } from "lucide-react";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    phone: "+977 98XXXXXXXX",
    location: "Kathmandu, Nepal",
    experience: "8 years",
    education: "Master of Computer Science, Kathmandu University",
    skills: ["React", "TypeScript", "Node.js", "GraphQL"],
    bio: "A passionate software engineer with 8 years of experience in building scalable web applications.",
    preferences: {
      workEnvironment: "hybrid",
      preferredIndustry: "Technology"
    }
  });
  
  const [currentTab, setCurrentTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState({});
  const { toast } = useToast();

  useEffect(() => {
    // Load user data from localStorage on component mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  // Add the missing handleLogout function
  const handleLogout = () => {
    // Clear any user data from localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('savedJobs');
    localStorage.removeItem('appliedJobs');
    localStorage.removeItem('notifications');
    localStorage.removeItem('notificationCount');
    
    // Show logout toast
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
    });
    
    // Redirect to welcome screen after logout
    window.location.href = "/welcome";
  };

  // Add missing handler functions
  const handleDeactivateAccount = () => {
    toast({
      title: "Account deactivated",
      description: "Your account has been temporarily deactivated",
    });
  };

  const handleDeleteAccount = () => {
    toast({
      title: "Account deleted",
      description: "Your account has been permanently deleted",
      variant: "destructive",
    });
    
    // Redirect to welcome screen after account deletion
    setTimeout(() => {
      window.location.href = "/welcome";
    }, 1500);
  };

  const handleUploadVideo = () => {
    toast({
      title: "Video upload",
      description: "Video resume upload functionality coming soon",
    });
  };

  const toggleWorkEnvironment = (env: string) => {
    setEditedContent(prev => ({
      ...prev,
      preferences: {
        ...(prev.preferences as object),
        workEnvironment: env
      }
    }));
  };

  // Fix the spread operator issue by properly typing the state
  const saveChanges = () => {
    // Create a properly typed copy of the user data
    const updatedUserData = {
      ...userData,
      ...editedContent
    };
    
    setUserData(updatedUserData);
    setEditedContent({});
    setCurrentTab("profile");
    
    toast({
      title: "Profile updated",
      description: "Your changes have been saved successfully",
    });
  };

  return (
    <div className="mobile-container">
      <div className="mobile-page pb-20">
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold">Profile</h1>
            <p className="text-muted-foreground">Manage your profile and preferences</p>
          </div>

          <div className="bg-white rounded-lg border border-border p-4 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg">
                    AS
                  </div>
                  <button className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-accent text-foreground flex items-center justify-center">
                    <Camera size={16} />
                  </button>
                </div>
                <div>
                  <h3 className="font-semibold">{userData.name}</h3>
                  <p className="text-sm text-muted-foreground">{userData.email}</p>
                </div>
              </div>
              <button 
                className="text-sm text-primary"
                onClick={() => {
                  setIsEditing(true);
                  setCurrentTab("edit");
                  setEditedContent(userData);
                }}
              >
                Edit Profile
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-border p-4 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Account</h2>
            </div>
            <div className="space-y-2">
              <button 
                className="w-full py-3 border border-red-500 rounded-lg text-red-500 font-medium"
                onClick={handleDeactivateAccount}
              >
                Deactivate Account
              </button>
              <button 
                className="w-full py-3 border border-red-500 rounded-lg text-red-500 font-medium"
                onClick={handleDeleteAccount}
              >
                Delete Account
              </button>
              <button 
                className="w-full py-3 border border-gray-300 rounded-lg text-gray-600 font-medium"
                onClick={handleLogout}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
