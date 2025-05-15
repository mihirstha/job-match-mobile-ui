
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Bookmark, FileText, User } from "lucide-react";

const MobileNavbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: <Home size={22} />,
    },
    {
      name: "Saved",
      path: "/saved-jobs",
      icon: <Bookmark size={22} />,
    },
    {
      name: "Applied",
      path: "/jobs-applied",
      icon: <FileText size={22} />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <User size={22} />,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border">
      <div className="max-w-md mx-auto flex justify-around px-2">
        {navItems.map((item) => (
          <Link
            to={item.path}
            key={item.name}
            className={`nav-item p-3 ${activeTab === item.path ? "active" : ""}`}
            onClick={() => setActiveTab(item.path)}
          >
            {item.icon}
            <span className="text-xs font-medium">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
