
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FadeTransition } from "@/components/ui/FadeTransition";
import { BlurContainer } from "@/components/ui/BlurContainer";

const Index = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container px-4 mx-auto">
        {/* Hero Section */}
        <FadeTransition>
          <section className="py-20 md:py-32 text-center">
            <h1 className="heading-xl mb-8 text-accessible-3xl font-bold max-w-3xl mx-auto">
              We Want to Hear From You!
            </h1>
            <p className="text-accessible-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Help us improve products with your feedback. It's simple, fast, and rewarding.
            </p>
            
            <div className="flex justify-center mb-16">
              <Button 
                asChild 
                size="lg" 
                className="text-accessible-xl py-8 px-10 shadow-lg rounded-xl animate-pulse-glow transition-all hover:scale-105"
              >
                <Link to="/feedback">Give Feedback</Link>
              </Button>
            </div>
            
            <BlurContainer 
              className="p-10 max-w-4xl mx-auto" 
              intensity="medium" 
              elevation="medium"
              premium
              glow
            >
              <p className="text-accessible-lg">
                At Feedback Hub, your opinions matter. Share your thoughts on our selected product and earn points instantly. It's quick, simple, and completely free!
              </p>
            </BlurContainer>
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
                  title: "Select a Product",
                  description: "Choose a product you'd like to review.",
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  )
                },
                {
                  step: "2",
                  title: "Give Feedback",
                  description: "Rate and share your thoughts.",
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  )
                },
                {
                  step: "3",
                  title: "Earn Points",
                  description: "Get rewarded for your valuable input.",
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <BlurContainer 
                  key={index} 
                  className="p-10 text-center flex flex-col items-center"
                  intensity="light"
                  premium
                  glow
                  hover
                  elevation="low"
                >
                  <div className="w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <div className="font-bold text-accessible-xl mb-3">{item.title}</div>
                  <p className="text-accessible-lg text-muted-foreground">{item.description}</p>
                </BlurContainer>
              ))}
            </div>
          </section>
        </FadeTransition>

        {/* CTA Section */}
        <FadeTransition delay={200}>
          <section className="py-20">
            <BlurContainer 
              className="p-12 md:p-16 text-center" 
              premium
              glassmorphism
              glow
              gradient
              elevation="medium"
            >
              <h2 className="heading-md text-accessible-2xl font-bold mb-6">
                Ready to Share Your Feedback?
              </h2>
              <p className="text-accessible-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Your insights help create better products for everyone.
              </p>
              <Button 
                asChild 
                size="lg"
                className="text-accessible-xl py-7 px-10 shadow-lg rounded-xl"
              >
                <Link to="/feedback">Give Feedback Now</Link>
              </Button>
            </BlurContainer>
          </section>
        </FadeTransition>
        
        {/* Footer */}
        <FadeTransition delay={300}>
          <footer className="py-8 text-center text-muted-foreground text-accessible-base">
            <p>&copy; {new Date().getFullYear()} Feedback Hub. All rights reserved.</p>
          </footer>
        </FadeTransition>
      </div>
    </div>
  );
};

export default Index;
