
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FadeTransition } from "@/components/ui/FadeTransition";
import { BlurContainer } from "@/components/ui/BlurContainer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Index = () => {
  const [isRegistrationOpen] = useState(true); // Change to false to show waitlist only
  const [waitlistForm, setWaitlistForm] = useState({
    name: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlistChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWaitlistForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!waitlistForm.name.trim() || !waitlistForm.email.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(waitlistForm.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success(`Thank you, ${waitlistForm.name}! You're now on our waitlist.`, {
        description: "We'll email you soon!"
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container px-4 mx-auto">
        {/* Hero Section */}
        <FadeTransition>
          <section className="py-10 md:py-16 text-center">
            <h1 className="heading-xl mb-6 text-accessible-3xl font-bold max-w-3xl mx-auto">
              Share Your Thoughts & Earn Points!
            </h1>
            <p className="text-accessible-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Help us improve products for everyone. Your feedback matters!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {isRegistrationOpen ? (
                <>
                  <Button 
                    asChild 
                    size="lg" 
                    className="text-accessible-base py-7 px-8 shadow-md"
                  >
                    <Link to="/register">Sign Up</Link>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg"
                    className="text-accessible-base py-7 px-8 border-2"
                  >
                    <Link to="/login">Log In</Link>
                  </Button>
                </>
              ) : (
                <div className="w-full max-w-md">
                  <BlurContainer 
                    className="p-8" 
                    intensity="medium" 
                    elevation="medium"
                    accessible
                  >
                    <h2 className="text-accessible-xl font-bold mb-6">Join Our Waitlist</h2>
                    <p className="text-accessible-base mb-6">
                      We'll notify you when sign-up is available.
                    </p>
                    
                    {!submitted ? (
                      <form onSubmit={handleWaitlistSubmit} className="space-y-6">
                        <div className="space-y-3">
                          <Label htmlFor="name" className="text-accessible-base">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={waitlistForm.name}
                            onChange={handleWaitlistChange}
                            placeholder="Enter your name"
                            className="h-12 text-accessible-base"
                            required
                          />
                        </div>
                        
                        <div className="space-y-3">
                          <Label htmlFor="email" className="text-accessible-base">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={waitlistForm.email}
                            onChange={handleWaitlistChange}
                            placeholder="Enter your email"
                            className="h-12 text-accessible-base"
                            required
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full h-14 text-accessible-base font-medium"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Join Waitlist"}
                        </Button>
                      </form>
                    ) : (
                      <div className="py-6 text-center animate-fade-in">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </div>
                        <h3 className="text-accessible-lg font-medium mb-2">Thank You!</h3>
                        <p className="text-accessible-base text-muted-foreground">
                          We'll notify you when sign-up is available.
                        </p>
                      </div>
                    )}
                  </BlurContainer>
                </div>
              )}
            </div>
          </section>
        </FadeTransition>

        {/* How It Works Section */}
        <FadeTransition delay={100}>
          <section className="py-16">
            <h2 className="heading-lg text-accessible-2xl font-bold text-center mb-12">
              How It Works - Simple as 1-2-3!
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Sign Up",
                  description: "Create a free account in less than 1 minute.",
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )
                },
                {
                  step: "2",
                  title: "Give Feedback",
                  description: "Rate products and share your thoughts.",
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  )
                },
                {
                  step: "3",
                  title: "Earn Points",
                  description: "Get rewarded for every feedback you share.",
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <BlurContainer 
                  key={index} 
                  className="p-8 text-center flex flex-col items-center"
                  intensity="light"
                  elevation="low"
                  hover
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <div className="font-bold text-accessible-xl mb-1">{item.title}</div>
                  <p className="text-accessible-base text-muted-foreground">{item.description}</p>
                </BlurContainer>
              ))}
            </div>
          </section>
        </FadeTransition>

        {/* Waitlist CTA */}
        {isRegistrationOpen && (
          <FadeTransition delay={200}>
            <section className="py-16">
              <BlurContainer 
                className="p-8 md:p-12 text-center" 
                intensity="medium"
                gradient
                glow
                elevation="medium"
                accessible
              >
                <h2 className="heading-md text-accessible-2xl font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-accessible-base text-muted-foreground max-w-2xl mx-auto mb-8">
                  Join now to start sharing your feedback and earn points!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    asChild 
                    size="lg"
                    className="text-accessible-base py-6 px-8 shadow-md"
                  >
                    <Link to="/register">Create Your Account</Link>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg"
                    className="text-accessible-base py-6 px-8 border-2"
                  >
                    <Link to="/feedback">View Products</Link>
                  </Button>
                </div>
              </BlurContainer>
            </section>
          </FadeTransition>
        )}
        
        {/* Add Waitlist Form for all visitors */}
        {isRegistrationOpen && (
          <FadeTransition delay={300}>
            <section className="py-8 md:py-16">
              <div className="max-w-xl mx-auto">
                <BlurContainer 
                  className="p-8" 
                  intensity="light"
                  elevation="low"
                  accessible
                >
                  <h2 className="text-accessible-xl font-bold mb-4 text-center">
                    Stay Updated
                  </h2>
                  <p className="text-accessible-base text-muted-foreground mb-6 text-center">
                    Join our waitlist to receive updates on new products and features.
                  </p>
                  
                  {!submitted ? (
                    <form onSubmit={handleWaitlistSubmit} className="space-y-6">
                      <div className="space-y-3">
                        <Label htmlFor="waitlist-name" className="text-accessible-base">Full Name</Label>
                        <Input
                          id="waitlist-name"
                          name="name"
                          value={waitlistForm.name}
                          onChange={handleWaitlistChange}
                          placeholder="Enter your name"
                          className="h-12 text-accessible-base"
                          required
                        />
                      </div>
                      
                      <div className="space-y-3">
                        <Label htmlFor="waitlist-email" className="text-accessible-base">Email Address</Label>
                        <Input
                          id="waitlist-email"
                          name="email"
                          type="email"
                          value={waitlistForm.email}
                          onChange={handleWaitlistChange}
                          placeholder="Enter your email"
                          className="h-12 text-accessible-base"
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full h-14 text-accessible-base font-medium"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Join Waitlist"}
                      </Button>
                    </form>
                  ) : (
                    <div className="py-6 text-center animate-fade-in">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      <h3 className="text-accessible-lg font-medium mb-2">Thank You!</h3>
                      <p className="text-accessible-base text-muted-foreground">
                        We'll keep you updated on our latest news and features.
                      </p>
                    </div>
                  )}
                </BlurContainer>
              </div>
            </section>
          </FadeTransition>
        )}
      </div>
    </div>
  );
};

export default Index;
