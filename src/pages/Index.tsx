
import React from "react";
import { FadeTransition } from "@/components/ui/FadeTransition";
import { BlurContainer } from "@/components/ui/BlurContainer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquareText, Video, Star, TrendingUp, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <FadeTransition>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm">
                  Market Feedback Platform
                </Badge>
                <h1 className="heading-xl">
                  Share Your Voice, <br />
                  <span className="text-primary">Shape the Future</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                  Submit valuable feedback on products, earn real rewards, and help brands create better products for everyone.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild size="lg" className="px-6 gap-2">
                    <Link to="/feedback">
                      Start Giving Feedback <ArrowRight size={18} />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="px-6">
                    <Link to="/register">Sign Up for Free</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-background bg-muted"
                      />
                    ))}
                  </div>
                  <p>
                    <span className="font-medium text-foreground">500+</span> users already shared their feedback
                  </p>
                </div>
              </div>

              <div className="md:w-1/2">
                <BlurContainer className="overflow-hidden rounded-xl p-1">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="Feedback Platform"
                    className="w-full h-auto rounded-lg object-cover aspect-[4/3]"
                  />
                </BlurContainer>
              </div>
            </div>
          </FadeTransition>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 md:px-12 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <FadeTransition delay={100}>
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our platform makes it easy to share your product experiences and get rewarded for your insights.
              </p>
            </div>
          </FadeTransition>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeTransition delay={200}>
              <BlurContainer className="p-8 hover:bg-white/60 transition-colors" hover>
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <MessageSquareText size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Submit Feedback</h3>
                  <p className="text-muted-foreground">
                    Share your thoughts about products through text reviews or upload video testimonials.
                  </p>
                </div>
              </BlurContainer>
            </FadeTransition>

            <FadeTransition delay={300}>
              <BlurContainer className="p-8 hover:bg-white/60 transition-colors" hover>
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <Award size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Earn Rewards</h3>
                  <p className="text-muted-foreground">
                    Get points for every feedback submission that can be converted into cash or vouchers.
                  </p>
                </div>
              </BlurContainer>
            </FadeTransition>

            <FadeTransition delay={400}>
              <BlurContainer className="p-8 hover:bg-white/60 transition-colors" hover>
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Influence Products</h3>
                  <p className="text-muted-foreground">
                    Help brands create better products by providing your authentic experience and insights.
                  </p>
                </div>
              </BlurContainer>
            </FadeTransition>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeTransition delay={100}>
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2 space-y-6">
                <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm">
                  For Consumers
                </Badge>
                <h2 className="heading-md">Simple & Rewarding Feedback Process</h2>
                <p className="text-muted-foreground">
                  Our platform makes it easy to share your thoughts through text or video. For every feedback submission, you'll earn points that can be converted to real rewards.
                </p>
                
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                      <Star size={14} />
                    </div>
                    <div>
                      <h4 className="font-medium">Rate Products</h4>
                      <p className="text-sm text-muted-foreground">Easily rate products across multiple parameters.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                      <Video size={14} />
                    </div>
                    <div>
                      <h4 className="font-medium">Video Testimonials</h4>
                      <p className="text-sm text-muted-foreground">Upload video reviews for a more personal touch.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                      <Award size={14} />
                    </div>
                    <div>
                      <h4 className="font-medium">Earn Points</h4>
                      <p className="text-sm text-muted-foreground">Get rewarded for every feedback submission.</p>
                    </div>
                  </div>
                </div>

                <Button asChild className="mt-4 gap-2">
                  <Link to="/feedback">
                    Give Feedback Now <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>

              <div className="md:w-1/2">
                <BlurContainer className="overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1552581234-26160f608093?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="Consumer Experience"
                    className="w-full h-auto rounded-lg object-cover aspect-[4/3]"
                  />
                </BlurContainer>
              </div>
            </div>
          </FadeTransition>
        </div>
      </section>

      {/* Business Section */}
      <section className="py-20 px-6 md:px-12 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <FadeTransition delay={100}>
            <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
              <div className="md:w-1/2 space-y-6">
                <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm">
                  For Brands
                </Badge>
                <h2 className="heading-md">Real-time Insights & Analytics</h2>
                <p className="text-muted-foreground">
                  Access comprehensive feedback data through an intuitive dashboard. Understand customer sentiments and make informed product decisions.
                </p>
                
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                      <TrendingUp size={14} />
                    </div>
                    <div>
                      <h4 className="font-medium">Dynamic Analytics</h4>
                      <p className="text-sm text-muted-foreground">Interactive charts and visualizations for deeper insights.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                      <Video size={14} />
                    </div>
                    <div>
                      <h4 className="font-medium">Video Testimonials</h4>
                      <p className="text-sm text-muted-foreground">Watch authentic customer video reviews.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                      <MessageSquareText size={14} />
                    </div>
                    <div>
                      <h4 className="font-medium">Detailed Ratings</h4>
                      <p className="text-sm text-muted-foreground">See how customers rate different aspects of your products.</p>
                    </div>
                  </div>
                </div>

                <Button asChild className="mt-4 gap-2">
                  <Link to="/dashboard">
                    View Dashboard Demo <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>

              <div className="md:w-1/2">
                <BlurContainer className="overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="Brand Dashboard"
                    className="w-full h-auto rounded-lg object-cover aspect-[4/3]"
                  />
                </BlurContainer>
              </div>
            </div>
          </FadeTransition>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <FadeTransition delay={100}>
            <BlurContainer className="p-12 text-center" intensity="heavy">
              <h2 className="heading-md mb-6">Ready to Start?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our feedback platform today and start sharing your valuable insights. Your feedback matters and gets rewarded!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="px-8 gap-2">
                  <Link to="/feedback">
                    Give Feedback <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8">
                  <Link to="/register">Create Account</Link>
                </Button>
              </div>
            </BlurContainer>
          </FadeTransition>
        </div>
      </section>
    </div>
  );
};

export default Index;
