
import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, Bell, User } from "lucide-react";

interface MobileNavbarProps {
  savedJobCount?: number;
}

const MobileNavbar = ({ savedJobCount = 0 }: MobileNavbarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border h-16 px-2 flex items-center justify-around z-30">
      <Link
        to="/"
        className={`flex flex-col items-center justify-center w-1/4 py-2 ${
          currentPath === "/" ? "text-primary" : "text-gray-500"
        }`}
      >
        <Home size={22} />
        <span className="text-xs mt-1">Home</span>
      </Link>

      <Link
        to="/saved-jobs"
        className={`flex flex-col items-center justify-center w-1/4 py-2 relative ${
          currentPath === "/saved-jobs" ? "text-primary" : "text-gray-500"
        }`}
      >
        <Briefcase size={22} />
        {savedJobCount > 0 && (
          <span className="absolute top-0 right-5 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {savedJobCount}
          </span>
        )}
        <span className="text-xs mt-1">Saved</span>
      </Link>

      <Link
        to="/jobs-applied"
        className={`flex flex-col items-center justify-center w-1/4 py-2 ${
          currentPath === "/jobs-applied" ? "text-primary" : "text-gray-500"
        }`}
      >
        <Bell size={22} />
        <span className="text-xs mt-1">Applied</span>
      </Link>

      <Link
        to="/profile"
        className={`flex flex-col items-center justify-center w-1/4 py-2 ${
          currentPath === "/profile" ? "text-primary" : "text-gray-500"
        }`}
      >
        <User size={22} />
        <span className="text-xs mt-1">Profile</span>
      </Link>
    </div>
  );
};

export default MobileNavbar;
