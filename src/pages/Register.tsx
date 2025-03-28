import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FadeTransition } from "@/components/ui/FadeTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BlurContainer } from "@/components/ui/BlurContainer";
import { Logo } from "@/components/icons";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!form.acceptTerms) {
      toast.error("Please accept the terms and conditions");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Registration successful!", {
        description: "Welcome to Feedback Hub!",
      });
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-16 md:pt-24 pb-16 px-6 flex flex-col items-center justify-center">
      <FadeTransition>
        <div className="text-center mb-8">
          <Logo className="text-primary mx-auto mb-4" size={56} />
          <h1 className="heading-lg text-accessible-3xl font-bold mb-4">Create an Account</h1>
          <p className="text-accessible-lg text-muted-foreground max-w-lg mx-auto">
            Join our community and start giving valuable feedback
          </p>
        </div>
      </FadeTransition>

      <div className="w-full max-w-lg mx-auto">
        <FadeTransition delay={100}>
          <BlurContainer 
            className="p-8" 
            intensity="medium" 
            elevation="medium"
            accessible
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Label htmlFor="name" className="text-accessible-base">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="h-12 text-accessible-base"
                  required
                />
              </div>

              <div className="space-y-4">
                <Label htmlFor="mobile" className="text-accessible-base">Mobile Number</Label>
                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  className="h-12 text-accessible-base"
                  required
                />
              </div>

              <div className="space-y-4">
                <Label htmlFor="gender" className="text-accessible-base">Gender</Label>
                <select
                  id="gender"
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="w-full h-12 rounded-md border border-input bg-transparent px-3 py-2 text-sm font-light text-accessible-base ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                >
                  <option value="" className="text-sm font-light">Select Gender</option>
                  <option value="male" className="text-sm font-light">Male</option>
                  <option value="female" className="text-sm font-light">Female</option>
                  <option value="other" className="text-sm font-light">Other</option>
                  <option value="prefer-not-to-say" className="text-sm font-light">Prefer not to say</option>
                </select>
              </div>

              <div className="space-y-4">
                <Label htmlFor="dateOfBirth" className="text-accessible-base">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={form.dateOfBirth}
                  onChange={handleChange}
                  className="h-12 text-accessible-base"
                  required
                />
              </div>

              <div className="space-y-4">
                <Label htmlFor="email" className="text-accessible-base">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="h-12 text-accessible-base"
                  required
                />
              </div>

              <div className="space-y-4">
                <Label htmlFor="password" className="text-accessible-base">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="h-12 text-accessible-base"
                  required
                />
              </div>

              <div className="space-y-4">
                <Label htmlFor="confirmPassword" className="text-accessible-base">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="h-12 text-accessible-base"
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={form.acceptTerms}
                  onChange={handleChange}
                  className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                  required
                />
                <Label
                  htmlFor="acceptTerms"
                  className="text-accessible-base font-normal cursor-pointer"
                >
                  I accept the terms and conditions
                </Label>
              </div>

              <Button 
                type="submit" 
                className="w-full h-14 text-accessible-base font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </Button>

              <div className="text-center mt-6">
                <p className="text-accessible-base text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary hover:underline font-medium">
                    Log in
                  </Link>
                </p>
              </div>
            </form>
          </BlurContainer>
        </FadeTransition>
      </div>
    </div>
  );
};

export default Register;
