
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please enter both email and password.",
        variant: "destructive",
      });
      return;
    }
    
    // For demo purposes - in a real app, this would call an authentication API
    toast({
      title: "Logging in",
      description: "Welcome back! Redirecting to your dashboard.",
    });
    
    // Simulate a successful login
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };

  return (
    <div className="mobile-container bg-white">
      <div className="mobile-page justify-center px-6">
        <div className="animate-fade-in space-y-6 w-full max-w-sm mx-auto">
          <div className="text-center space-y-2">
            <div className="inline-block rounded-2xl bg-primary/10 p-2 mb-2">
              <img 
                src="/lovable-uploads/7eff5569-5ee3-4e6a-9f7b-ff9e7644f1a1.png" 
                alt="Job Matchy Nepal Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Job Matchy Nepal</h1>
            <p className="text-muted-foreground">Sign in to find your perfect job</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-xs font-medium text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field w-full pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button type="submit" className="btn-primary w-full mt-6">
              Sign In
            </button>
          </form>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="font-medium text-primary hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
