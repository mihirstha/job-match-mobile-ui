
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
              >
                <path
                  d="M20.02 17.28C19.73 17.15 19.4 17.23 19.18 17.45L17.16 19.47C16.03 20.6 14.23 20.6 13.1 19.47L4.53 10.9C3.4 9.77 3.4 7.97 4.53 6.84L6.55 4.82C6.77 4.6 6.85 4.27 6.72 3.98C6.24 2.84 6 1.61 6 0.38C6 0.15 5.88 -0.06 5.66 -0.16C5.44 -0.27 5.19 -0.24 5 -0.09C1.96 2.23 0.69 6.4 1.67 10.39C2.01 11.8 2.66 13.12 3.47 14.22L8.84 8.85L10.97 10.98L5.6 16.35C6.7 17.17 8.01 17.81 9.43 18.16C11.44 18.64 13.44 18.41 15.15 17.76L15.19 17.74C15.43 17.65 15.65 17.55 15.87 17.45L15.94 17.41C16.15 17.31 16.35 17.21 16.56 17.1L16.6 17.08C16.85 16.94 17.1 16.8 17.34 16.64C17.38 16.61 17.42 16.58 17.47 16.56C17.79 16.37 18.09 16.16 18.38 15.93C18.42 15.9 18.45 15.87 18.48 15.84C18.89 15.5 19.27 15.12 19.61 14.71C19.64 14.68 19.67 14.65 19.7 14.61C19.93 14.32 20.14 14.01 20.33 13.69L20.39 13.56C20.55 13.31 20.7 13.06 20.83 12.81C20.86 12.76 20.89 12.72 20.91 12.67C21.02 12.47 21.12 12.26 21.22 12.04L21.25 11.99C21.9 10.28 22.13 8.28 21.65 6.26C21.3 4.84 20.66 3.53 19.84 2.43L14.47 7.8L12.34 5.67L17.71 0.3C16.61 -0.52 15.29 -1.16 13.88 -1.51C9.89 -2.49 5.72 -1.22 3.4 1.83C3.25 2.02 3.22 2.27 3.33 2.49C3.44 2.71 3.65 2.83 3.88 2.83C5.11 2.83 6.34 3.07 7.48 3.55C7.77 3.68 8.1 3.6 8.32 3.38L10.34 1.36C11.47 0.23 13.27 0.23 14.4 1.36L22.97 9.93C24.1 11.06 24.1 12.86 22.97 13.99L20.95 16.01C20.73 16.23 20.31 16.41 20.02 17.28Z"
                  fill="#56c1ff"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold tracking-tight">JobMatch</h1>
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
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                required
              />
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
