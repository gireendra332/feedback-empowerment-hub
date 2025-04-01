import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FadeTransition } from "@/components/ui/FadeTransition";
import { BlurContainer } from "@/components/ui/BlurContainer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { FeedbackList } from "@/components/FeedbackList";

const Feedback = () => {
  const { user, isAuthenticated } = useAuth();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [ratings, setRatings] = useState({
    design: 0,
    price: 0,
    performance: 0,
  });
  const [comment, setComment] = useState("");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sample products
  const products = [
    {
      id: "product1",
      name: "Smartphone X",
      category: "Smartphones",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: "product2",
      name: "Smartphone Y",
      category: "Smartphones",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: "product3",
      name: "Smartphone Z",
      category: "Smartphones",
      image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
  ];

  const handleProductSelect = (productId: string) => {
    setSelectedProduct(productId);
  };

  const handleRatingChange = (category: keyof typeof ratings, value: number) => {
    setRatings((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setVideoFile(file);
  };

  const handleSubmit = async () => {
    if (!isAuthenticated || !user) {
      toast.error("Please login to submit feedback");
      return;
    }

    const hasAllRatings = Object.values(ratings).every((rating) => rating > 0);
    if (!selectedProduct || !hasAllRatings) {
      toast.error("Please select a product and rate all categories");
      return;
    }

    setIsSubmitting(true);

    try {
      // First, ensure user stats exist
      let { data: userStats, error: statsCheckError } = await supabase
        .from('user_stats')
        .select('*')
        .eq('id', user.id)
        .single();

      if (!userStats) {
        // Create initial stats if they don't exist
        const { data: newStats, error: createError } = await supabase
          .from('user_stats')
          .insert([
            { 
              id: user.id, 
              points: 0, 
              feedback_count: 0
            }
          ])
          .select()
          .single();

        if (createError) throw createError;
        userStats = newStats;
      }

      // Then insert feedback
      const { error: feedbackError } = await supabase
        .from('feedback')
        .insert({
          user_id: user.id,
          product_id: selectedProduct,
          design_rating: ratings.design,
          price_rating: ratings.price,
          performance_rating: ratings.performance,
          comment: comment || null
        });

      if (feedbackError) throw feedbackError;

      // Finally update user stats
      const { error: updateError } = await supabase
        .from('user_stats')
        .update({
          points: (userStats.points || 0) + 100,
          feedback_count: (userStats.feedback_count || 0) + 1
        })
        .eq('id', user.id);

      if (updateError) throw updateError;

      setIsSubmitted(true);
      toast.success("Thank you for your feedback! You earned 100 points.", {
        description: "Your input is greatly appreciated.",
      });
    } catch (error: any) {
      console.error('Submission error:', error);
      toast.error(error.message || "Failed to submit feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Star rating component with larger, more accessible stars
  const StarRating = ({ rating, onChange }: { rating: number; onChange: (val: number) => void }) => {
    return (
      <div className="flex items-center space-x-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className="focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-1 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill={star <= rating ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${star <= rating ? "text-primary" : "text-muted-foreground"}`}
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Show feedback form if not submitted */}
        {!isSubmitted ? (
          <>
            <FadeTransition>
              <div className="text-center mb-16">
                <Button 
                  asChild 
                  variant="ghost" 
                  className="mb-6 text-accessible-base"
                >
                  <Link to="/" className="flex items-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="mr-2"
                    >
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to Home
                  </Link>
                </Button>
                <h1 className="heading-lg text-accessible-3xl font-bold mb-4">Submit Your Feedback</h1>
                <p className="text-accessible-lg text-muted-foreground max-w-2xl mx-auto">
                  Share your thoughts on our products. It's quick and simple!
                </p>
              </div>
            </FadeTransition>

            <FadeTransition delay={100}>
              <BlurContainer 
                className="mb-8 p-10" 
                premium
                glow
              >
                <h2 className="text-accessible-xl font-bold mb-8 text-center">Step 1: Select a Product</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className={`relative overflow-hidden border-2 rounded-2xl cursor-pointer transition-all ${
                        selectedProduct === product.id
                          ? "ring-4 ring-primary border-transparent"
                          : "hover:border-primary/50 border-white/20 dark:border-white/10"
                      }`}
                      onClick={() => handleProductSelect(product.id)}
                    >
                      <div className="aspect-[4/3] relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        
                        {selectedProduct === product.id && (
                          <div className="absolute top-4 right-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                        <h3 className="font-medium text-accessible-xl">{product.name}</h3>
                        <p className="text-accessible-base opacity-90">{product.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </BlurContainer>
            </FadeTransition>

            {selectedProduct && (
              <>
                <FadeTransition delay={200}>
                  <BlurContainer 
                    className="mb-8 p-10" 
                    premium
                    glow
                  >
                    <h2 className="text-accessible-xl font-bold mb-8 text-center">Step 2: Rate the Product</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-12">
                        <div className="space-y-6">
                          <h3 className="text-accessible-lg font-medium">Design</h3>
                          <StarRating
                            rating={ratings.design}
                            onChange={(val) => handleRatingChange("design", val)}
                          />
                        </div>
                        
                        <div className="space-y-6">
                          <h3 className="text-accessible-lg font-medium">Price</h3>
                          <StarRating
                            rating={ratings.price}
                            onChange={(val) => handleRatingChange("price", val)}
                          />
                        </div>
                        
                        <div className="space-y-6">
                          <h3 className="text-accessible-lg font-medium">Performance</h3>
                          <StarRating
                            rating={ratings.performance}
                            onChange={(val) => handleRatingChange("performance", val)}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-accessible-lg font-medium mb-4">Additional Comments (Optional)</h3>
                        <Textarea
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          placeholder="Tell us what you think..."
                          className="min-h-[200px] text-accessible-base p-4"
                        />
                      </div>
                    </div>
                  </BlurContainer>
                </FadeTransition>
                
                <FadeTransition delay={300}>
                  <BlurContainer 
                    className="mb-8 p-10" 
                    premium
                    glow
                  >
                    <h2 className="text-accessible-xl font-bold mb-8 text-center">Step 3: Upload Video Review (Optional)</h2>
                    <div className="border-2 border-dashed border-white/20 dark:border-white/10 rounded-2xl p-10 text-center hover:bg-white/5 transition-colors cursor-pointer">
                      <input
                        type="file"
                        id="video"
                        accept="video/*"
                        className="hidden"
                        onChange={handleVideoUpload}
                      />
                      <label htmlFor="video" className="cursor-pointer block">
                        {videoFile ? (
                          <div className="space-y-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="mx-auto text-primary"
                            >
                              <path d="M12 2v4" />
                              <path d="m18.4 18.9 2.7 2.7" />
                              <path d="m3.2 3.2 2.7 2.7" />
                              <path d="m7.5 7.5 9 9" />
                              <path d="M16 16v1a2 2 0 0 0 4 0V5a2 2 0 1 0-4 0v8" />
                              <path d="M10 17v1a2 2 0 0 1-4 0v-3" />
                            </svg>
                            <p className="font-medium text-accessible-lg">{videoFile.name}</p>
                            <p className="text-accessible-base text-muted-foreground">
                              Click to change video
                            </p>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="mx-auto text-muted-foreground"
                            >
                              <polygon points="23 7 16 12 23 17 23 7" />
                              <rect
                                x="1"
                                y="5"
                                width="15"
                                height="14"
                                rx="2"
                                ry="2"
                              />
                            </svg>
                            <p className="font-medium text-accessible-lg">Upload Your Video Review</p>
                            <p className="text-accessible-base text-muted-foreground">
                              Record a short video (max 60 seconds) sharing your thoughts
                            </p>
                          </div>
                        )}
                      </label>
                    </div>
                  </BlurContainer>
                </FadeTransition>
                
                <FadeTransition delay={400}>
                  <div className="flex justify-center mt-12 mb-8">
                    <Button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="text-accessible-xl py-8 px-12"
                      size="lg"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Feedback"}
                    </Button>
                  </div>
                  
                  <BlurContainer 
                    className="p-6 text-center w-full max-w-xl mx-auto"
                    premium
                    glassmorphism
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <p className="font-medium text-accessible-lg">Reward for this submission</p>
                      </div>
                      <div className="text-right">
                        <p className="text-accessible-xl font-bold text-primary">100 points</p>
                      </div>
                    </div>
                  </BlurContainer>
                </FadeTransition>
              </>
            )}
          </>
        ) : (
          <div className="space-y-8">
            <FadeTransition>
              <div className="min-h-screen pt-32 pb-16 px-6 flex items-center justify-center">
                <BlurContainer 
                  className="text-center p-12 max-w-2xl mx-auto" 
                  premium
                  glow
                  gradient
                >
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/20 text-primary mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
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
                  <h1 className="text-accessible-3xl font-bold mb-4">Thank You!</h1>
                  <p className="text-accessible-xl mb-8">
                    Your feedback has been received and you've earned <span className="text-primary font-bold">100 points</span>!
                  </p>
                  <Button asChild size="lg" className="text-accessible-lg py-6 px-8">
                    <Link to="/">Return Home</Link>
                  </Button>
                </BlurContainer>
              </div>
            </FadeTransition>
            
            <FadeTransition delay={200}>
              <h2 className="text-2xl font-bold mb-6">Recent Feedback</h2>
              <FeedbackList />
            </FadeTransition>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
