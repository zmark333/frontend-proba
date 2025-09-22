import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface LoginProps {
  onNavigate: (page: string) => void;
}

export function Login({ onNavigate }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", formData);
    // For demo purposes, redirect to home
    onNavigate("home");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-[#8B4A4A] mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your Mecenas account</p>
        </div>

        <Card className="border-border/50 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Sign In</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-input-background"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="bg-input-background pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Button
                  type="button"
                  variant="link"
                  className="p-0 h-auto text-sm text-muted-foreground hover:text-[#8B4A4A]"
                >
                  Forgot password?
                </Button>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#8B4A4A] hover:bg-[#8B4A4A]/90"
              >
                Sign In
              </Button>
            </form>

            <Separator className="my-6" />

            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Don't have an account?
              </p>
              <Button
                variant="outline"
                className="w-full border-[#8B4A4A] text-[#8B4A4A] hover:bg-[#8B4A4A] hover:text-white"
                onClick={() => onNavigate("register")}
              >
                Create Account
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Button
            variant="link"
            className="text-muted-foreground hover:text-[#8B4A4A]"
            onClick={() => onNavigate("home")}
          >
            ← Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}