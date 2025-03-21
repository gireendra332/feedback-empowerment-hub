
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FadeTransition } from "@/components/ui/FadeTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BlurContainer } from "@/components/ui/BlurContainer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Consumer registration state
  const [consumerForm, setConsumerForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Brand registration state
  const [brandForm, setBrandForm] = useState({
    companyName: "",
    contactName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleConsumerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConsumerForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBrandForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConsumerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (consumerForm.password !== consumerForm.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (
      !consumerForm.name ||
      !consumerForm.email ||
      !consumerForm.password ||
      !consumerForm.confirmPassword
    ) {
      toast.error("All fields are required");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Registration successful!", {
        description: "Welcome to Feedback Hub!",
      });
      
      // Would normally redirect to login or dashboard here
    }, 1500);
  };

  const handleBrandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (brandForm.password !== brandForm.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (
      !brandForm.companyName ||
      !brandForm.contactName ||
      !brandForm.email ||
      !brandForm.password ||
      !brandForm.confirmPassword
    ) {
      toast.error("All fields are required");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Brand registration successful!", {
        description: "Your account is pending approval.",
      });
      
      // Would normally redirect to login or dashboard here
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 flex items-center justify-center">
      <div className="w-full max-w-md">
        <FadeTransition>
          <div className="text-center mb-8">
            <h1 className="heading-lg mb-2">Create Your Account</h1>
            <p className="text-muted-foreground">
              Join our platform to share feedback and earn rewards
            </p>
          </div>
        </FadeTransition>

        <FadeTransition delay={100}>
          <BlurContainer className="p-1">
            <Card className="border-0 shadow-none bg-transparent">
              <CardHeader className="px-6 pt-6 pb-2">
                <Tabs defaultValue="consumer" className="w-full">
                  <TabsList className="w-full mb-6">
                    <TabsTrigger value="consumer" className="flex-1">Consumer</TabsTrigger>
                    <TabsTrigger value="brand" className="flex-1">Brand</TabsTrigger>
                  </TabsList>

                  <TabsContent value="consumer">
                    <CardTitle>Consumer Registration</CardTitle>
                    <CardDescription>
                      Create an account to submit feedback and earn rewards
                    </CardDescription>
                  </TabsContent>

                  <TabsContent value="brand">
                    <CardTitle>Brand Registration</CardTitle>
                    <CardDescription>
                      Register your company to access customer feedback
                    </CardDescription>
                  </TabsContent>
                </Tabs>
              </CardHeader>

              <Tabs defaultValue="consumer">
                <TabsContent value="consumer">
                  <form onSubmit={handleConsumerSubmit}>
                    <CardContent className="px-6 py-4 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={consumerForm.name}
                          onChange={handleConsumerChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="consumer-email">Email</Label>
                        <Input
                          id="consumer-email"
                          name="email"
                          type="email"
                          value={consumerForm.email}
                          onChange={handleConsumerChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="consumer-password">Password</Label>
                        <Input
                          id="consumer-password"
                          name="password"
                          type="password"
                          value={consumerForm.password}
                          onChange={handleConsumerChange}
                          placeholder="••••••••"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="consumer-confirm-password">Confirm Password</Label>
                        <Input
                          id="consumer-confirm-password"
                          name="confirmPassword"
                          type="password"
                          value={consumerForm.confirmPassword}
                          onChange={handleConsumerChange}
                          placeholder="••••••••"
                          required
                        />
                      </div>
                    </CardContent>

                    <CardFooter className="px-6 py-4 flex flex-col">
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Creating Account..." : "Create Account"}
                      </Button>
                      
                      <div className="mt-6 text-center text-sm">
                        <p className="text-muted-foreground">
                          Already have an account?{" "}
                          <Link to="/login" className="text-primary hover:underline">
                            Log in
                          </Link>
                        </p>
                      </div>
                    </CardFooter>
                  </form>
                </TabsContent>

                <TabsContent value="brand">
                  <form onSubmit={handleBrandSubmit}>
                    <CardContent className="px-6 py-4 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input
                          id="companyName"
                          name="companyName"
                          value={brandForm.companyName}
                          onChange={handleBrandChange}
                          placeholder="Acme Inc."
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contactName">Contact Name</Label>
                        <Input
                          id="contactName"
                          name="contactName"
                          value={brandForm.contactName}
                          onChange={handleBrandChange}
                          placeholder="Jane Smith"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="brand-email">Email</Label>
                        <Input
                          id="brand-email"
                          name="email"
                          type="email"
                          value={brandForm.email}
                          onChange={handleBrandChange}
                          placeholder="jane@acme.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="brand-password">Password</Label>
                        <Input
                          id="brand-password"
                          name="password"
                          type="password"
                          value={brandForm.password}
                          onChange={handleBrandChange}
                          placeholder="••••••••"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="brand-confirm-password">Confirm Password</Label>
                        <Input
                          id="brand-confirm-password"
                          name="confirmPassword"
                          type="password"
                          value={brandForm.confirmPassword}
                          onChange={handleBrandChange}
                          placeholder="••••••••"
                          required
                        />
                      </div>
                    </CardContent>

                    <CardFooter className="px-6 py-4 flex flex-col">
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Creating Account..." : "Register Brand"}
                      </Button>
                      
                      <div className="mt-6 text-center text-sm">
                        <p className="text-muted-foreground">
                          Already have an account?{" "}
                          <Link to="/login" className="text-primary hover:underline">
                            Log in
                          </Link>
                        </p>
                      </div>
                    </CardFooter>
                  </form>
                </TabsContent>
              </Tabs>
            </Card>
          </BlurContainer>
        </FadeTransition>
      </div>
    </div>
  );
};

export default Register;
