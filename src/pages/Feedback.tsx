
import React, { useState } from "react";
import { FadeTransition } from "@/components/ui/FadeTransition";
import { BlurContainer } from "@/components/ui/BlurContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const Feedback = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [ratings, setRatings] = useState({
    design: 0,
    price: 0,
    quality: 0,
    usability: 0,
    performance: 0,
  });
  const [comment, setComment] = useState("");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleTextSubmit = () => {
    // Check if all required fields are completed
    const hasAllRatings = Object.values(ratings).every((rating) => rating > 0);
    if (!selectedProduct || !hasAllRatings || !comment.trim()) {
      toast.error("Please complete all fields before submitting");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Feedback submitted successfully! You earned 500 points.", {
        description: "Thank you for your valuable input.",
      });
      
      // Reset form
      setRatings({
        design: 0,
        price: 0,
        quality: 0,
        usability: 0,
        performance: 0,
      });
      setComment("");
    }, 1500);
  };

  const handleVideoSubmit = () => {
    if (!selectedProduct || !videoFile) {
      toast.error("Please select a product and upload a video before submitting");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Video feedback submitted successfully! You earned 500 points.", {
        description: "Thank you for your valuable input.",
      });
      
      // Reset form
      setVideoFile(null);
    }, 2000);
  };

  // Star rating component
  const StarRating = ({ rating, onChange }: { rating: number; onChange: (val: number) => void }) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className="focus:outline-none transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
        <FadeTransition>
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Submit Your Feedback</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Share your thoughts on products and earn rewards. Your insights help brands create better products for everyone.
            </p>
          </div>
        </FadeTransition>

        <FadeTransition delay={100}>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Step 1: Select a Product</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className={`relative overflow-hidden border rounded-xl cursor-pointer transition-all ${
                      selectedProduct === product.id
                        ? "ring-2 ring-primary"
                        : "hover:border-primary/50"
                    }`}
                    onClick={() => handleProductSelect(product.id)}
                  >
                    <div className="aspect-[4/3] relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {selectedProduct === product.id && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
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
                    <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-xs opacity-80">{product.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeTransition>

        {selectedProduct && (
          <FadeTransition delay={200}>
            <Card>
              <CardHeader>
                <CardTitle>Step 2: Share Your Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="text">
                  <TabsList className="mb-6">
                    <TabsTrigger value="text">Text Feedback</TabsTrigger>
                    <TabsTrigger value="video">Video Feedback</TabsTrigger>
                  </TabsList>

                  <TabsContent value="text">
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <Label className="block mb-6 text-lg font-medium">
                            Rate the product on these parameters:
                          </Label>

                          <div className="space-y-6">
                            {Object.entries(ratings).map(([key, value]) => (
                              <div key={key} className="flex flex-col space-y-2">
                                <Label htmlFor={key} className="capitalize">
                                  {key}
                                </Label>
                                <StarRating
                                  rating={value}
                                  onChange={(val) =>
                                    handleRatingChange(key as keyof typeof ratings, val)
                                  }
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="comment" className="block mb-2">
                            Comments
                          </Label>
                          <Textarea
                            id="comment"
                            placeholder="Share your detailed thoughts about the product..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="min-h-[200px]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <Button
                        onClick={handleTextSubmit}
                        disabled={isSubmitting}
                        className="min-w-[150px]"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Feedback"}
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="video">
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="video" className="block mb-2">
                          Upload Video Review
                        </Label>
                        <p className="text-sm text-muted-foreground mb-4">
                          Record and upload a video review of the product. Maximum file size: 100MB. Maximum duration: 2 minutes.
                        </p>

                        <div className="border-2 border-dashed rounded-lg p-10 text-center hover:bg-muted/20 transition-colors cursor-pointer">
                          <input
                            type="file"
                            id="video"
                            accept="video/*"
                            className="hidden"
                            onChange={handleVideoUpload}
                          />
                          <label htmlFor="video" className="cursor-pointer block">
                            {videoFile ? (
                              <div className="space-y-2">
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
                                  className="mx-auto text-primary"
                                >
                                  <path d="M12 2v4" />
                                  <path d="m18.4 18.9 2.7 2.7" />
                                  <path d="m3.2 3.2 2.7 2.7" />
                                  <path d="m7.5 7.5 9 9" />
                                  <path d="M16 16v1a2 2 0 0 0 4 0V5a2 2 0 1 0-4 0v8" />
                                  <path d="M10 17v1a2 2 0 0 1-4 0v-3" />
                                </svg>
                                <p className="font-medium">{videoFile.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  Click to change video
                                </p>
                              </div>
                            ) : (
                              <div className="space-y-2">
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
                                <p className="font-medium">Click to upload your video review</p>
                                <p className="text-sm text-muted-foreground">
                                  Or drag and drop a video file
                                </p>
                              </div>
                            )}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <Button
                        onClick={handleVideoSubmit}
                        disabled={isSubmitting || !videoFile}
                        className="min-w-[150px]"
                      >
                        {isSubmitting ? "Uploading..." : "Submit Video"}
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>

              <CardFooter className="flex flex-col items-start text-sm border-t p-6">
                <BlurContainer className="w-full p-4" intensity="light">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Reward for this submission</p>
                      <p className="text-muted-foreground">
                        Complete your feedback to earn points
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-medium text-primary">500 points</p>
                      <p className="text-xs text-muted-foreground">≈ $5.00 value</p>
                    </div>
                  </div>
                </BlurContainer>
              </CardFooter>
            </Card>
          </FadeTransition>
        )}
      </div>
    </div>
  );
};

export default Feedback;
