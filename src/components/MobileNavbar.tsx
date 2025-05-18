
import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, Bell, User } from "lucide-react";
import { useEffect, useState } from "react";

interface MobileNavbarProps {
  savedJobCount?: number;
}

const MobileNavbar = ({ savedJobCount = 0 }: MobileNavbarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [notificationCount, setNotificationCount] = useState(0);
  
  // Load notification count from localStorage
  useEffect(() => {
    const unreadCount = localStorage.getItem('notificationCount');
    if (unreadCount) {
      setNotificationCount(parseInt(unreadCount));
    }
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border h-14 px-1 flex items-center justify-around z-30">
      <Link
        to="/"
        className={`flex flex-col items-center justify-center w-1/4 py-1 ${
          currentPath === "/" ? "text-primary" : "text-gray-500"
        }`}
      >
        <Home size={20} />
        <span className="text-xs mt-0.5">Home</span>
      </Link>

      <Link
        to="/saved-jobs"
        className={`flex flex-col items-center justify-center w-1/4 py-1 relative ${
          currentPath === "/saved-jobs" ? "text-primary" : "text-gray-500"
        }`}
      >
        <Briefcase size={20} />
        {savedJobCount > 0 && (
          <span className="absolute top-0 right-4 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {savedJobCount}
          </span>
        )}
        <span className="text-xs mt-0.5">Saved</span>
      </Link>

      <Link
        to="/jobs-applied"
        className={`flex flex-col items-center justify-center w-1/4 py-1 ${
          currentPath === "/jobs-applied" ? "text-primary" : "text-gray-500"
        }`}
      >
        <Bell size={20} />
        {notificationCount > 0 && (
          <span className="absolute top-0 right-4 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {notificationCount}
          </span>
        )}
        <span className="text-xs mt-0.5">Applied</span>
      </Link>

      <Link
        to="/profile"
        className={`flex flex-col items-center justify-center w-1/4 py-1 ${
          currentPath === "/profile" ? "text-primary" : "text-gray-500"
        }`}
      >
        <User size={20} />
        <span className="text-xs mt-0.5">Profile</span>
      </Link>
    </div>
  );
};

export default MobileNavbar;
