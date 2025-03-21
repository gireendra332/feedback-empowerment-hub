
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BlurContainer } from "@/components/ui/BlurContainer";
import { FadeTransition } from "@/components/ui/FadeTransition";
import { FeedbackIcon, RewardsIcon, DashboardIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const Index = () => {
  const features = [
    {
      icon: FeedbackIcon,
      title: "Submit Valuable Feedback",
      description:
        "Share your insights on products through text and video reviews. Your opinions shape the future of products.",
    },
    {
      icon: RewardsIcon,
      title: "Earn Rewards",
      description:
        "Get points for every feedback submission that can be converted into real cash. Your time and insights are valuable.",
    },
    {
      icon: DashboardIcon,
      title: "Brand Insights",
      description:
        "Brands receive organized, actionable feedback that helps improve products and services based on real user experiences.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <FadeTransition delay={100}>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  Revolutionizing Market Feedback
                </span>
              </FadeTransition>
              
              <FadeTransition delay={200}>
                <h1 className="heading-xl mb-6">
                  Connect Consumers with Brands Through Meaningful{" "}
                  <span className="text-primary">Feedback</span>
                </h1>
              </FadeTransition>
              
              <FadeTransition delay={300}>
                <p className="body-xl text-muted-foreground mb-8 max-w-xl">
                  Share your authentic opinions, earn rewards, and help shape the products of tomorrow with our elegant feedback platform.
                </p>
              </FadeTransition>
              
              <FadeTransition delay={400}>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="rounded-full">
                    <Link to="/register">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full">
                    <Link to="/feedback">Submit Feedback</Link>
                  </Button>
                </div>
              </FadeTransition>
            </div>
            
            <div className="relative">
              <FadeTransition delay={300} direction="left">
                <BlurContainer
                  className="p-8 md:p-10 max-w-md mx-auto relative z-10"
                  intensity="medium"
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary">1</span>
                      </div>
                      <div>
                        <h3 className="font-medium">Select a product</h3>
                        <p className="text-sm text-muted-foreground">Browse from our curated selection</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary">2</span>
                      </div>
                      <div>
                        <h3 className="font-medium">Share your feedback</h3>
                        <p className="text-sm text-muted-foreground">Text or video, your choice</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary">3</span>
                      </div>
                      <div>
                        <h3 className="font-medium">Earn rewards</h3>
                        <p className="text-sm text-muted-foreground">Get points for every submission</p>
                      </div>
                    </div>
                  </div>
                </BlurContainer>
              </FadeTransition>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 bg-gradient-radial from-primary/5 to-transparent rounded-full" />
              <div className="absolute top-10 right-10 w-20 h-20 bg-primary/5 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-primary/5 rounded-full animate-float" style={{ animationDelay: "1.2s" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeTransition>
              <h2 className="heading-lg mb-6">How Our Platform Works</h2>
            </FadeTransition>
            <FadeTransition delay={100}>
              <p className="body-lg text-muted-foreground">
                Our elegant platform connects consumers and brands through meaningful feedback, creating value for both sides.
              </p>
            </FadeTransition>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FadeTransition key={index} delay={index * 100 + 200}>
                <BlurContainer
                  className="p-8 h-full flex flex-col"
                  hover={true}
                >
                  <feature.icon className="text-primary mb-6" size={36} />
                  <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground flex-grow">{feature.description}</p>
                </BlurContainer>
              </FadeTransition>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <FadeTransition>
            <BlurContainer className="p-10 md:p-16 text-center max-w-4xl mx-auto">
              <h2 className="heading-lg mb-6">Ready to Share Your Insights?</h2>
              <p className="body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our community of thoughtful consumers who are shaping the future of products through their valuable feedback.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link to="/register">Create Your Account</Link>
              </Button>
            </BlurContainer>
          </FadeTransition>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <FeedbackIcon className="text-primary" size={24} />
                <span className="ml-2 text-lg font-medium">Feedback Hub</span>
              </Link>
              <p className="mt-2 text-sm text-muted-foreground">
                Connecting consumers and brands through meaningful feedback.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link to="/feedback" className="text-muted-foreground hover:text-foreground">
                Feedback
              </Link>
              <Link to="/dashboard" className="text-muted-foreground hover:text-foreground">
                Dashboard
              </Link>
              <Link to="/register" className="text-muted-foreground hover:text-foreground">
                Sign Up
              </Link>
              <Link to="/login" className="text-muted-foreground hover:text-foreground">
                Log In
              </Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Feedback Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
