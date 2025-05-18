
import { useState } from "react";
import MobileNavbar from "@/components/MobileNavbar";
import { BellOff, Check, Clock, Calendar, Briefcase, Bell } from "lucide-react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 2,
      title: "Application Viewed",
      message: "DesignStudio Nepal viewed your application for the UX/UI Designer position.",
      time: "Yesterday",
      read: true,
      type: "application"
    },
    {
      id: 3,
      title: "New Job Match",
      message: "We found 3 new jobs matching your profile and preferences.",
      time: "2 days ago",
      read: false,
      type: "match"
    },
    {
      id: 4,
      title: "Video Resume Reminder",
      message: "Complete your video resume to increase your chances of getting noticed by employers.",
      time: "3 days ago",
      read: true,
      type: "reminder"
    }
  ]);
  
  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? {...notification, read: true} : notification
    ));
  };
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({...notification, read: true})));
  };
  
  const getNotificationIcon = (type) => {
    switch (type) {
      case "interview":
        return (
          <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
            <Calendar size={20} />
          </div>
        );
      case "application":
        return (
          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            <Check size={20} />
          </div>
        );
      case "match":
        return (
          <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
            <Briefcase size={20} />
          </div>
        );
      case "reminder":
        return (
          <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center shrink-0">
            <Clock size={20} />
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center shrink-0">
            <Bell size={20} />
          </div>
        );
    }
  };
  
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="mobile-container">
      <div className="mobile-page">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Notifications</h1>
              <p className="text-muted-foreground">
                {unreadCount === 0 ? "No new notifications" : `${unreadCount} unread notifications`}
              </p>
            </div>
            {unreadCount > 0 && (
              <button 
                className="text-primary text-sm font-medium"
                onClick={markAllAsRead}
              >
                Mark all as read
              </button>
            )}
          </div>
          
          {notifications.length > 0 ? (
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`bg-white rounded-lg border p-4 space-y-2 ${!notification.read ? 'border-primary/30 bg-primary/5' : 'border-border'}`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex gap-3">
                    {getNotificationIcon(notification.type)}
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className={`font-semibold ${!notification.read ? 'text-primary' : ''}`}>
                          {notification.title}
                        </h3>
                        {!notification.read && (
                          <span className="bg-primary h-2 w-2 rounded-full"></span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{notification.time}</span>
                    <button className="text-xs text-primary font-medium">View</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <BellOff size={32} className="text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-lg">No notifications yet</h3>
              <p className="text-muted-foreground text-center max-w-xs">
                You don't have any notifications at the moment
              </p>
              <button 
                className="btn-primary"
                onClick={() => window.location.href = "/"}
              >
                Browse Jobs
              </button>
            </div>
          )}
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
};

export default Notifications;
