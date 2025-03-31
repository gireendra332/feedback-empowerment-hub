import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Feedback } from "@/types/supabase";
import { BlurContainer } from "./ui/BlurContainer";

export const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const { data, error } = await supabase
        .from('feedback')
        .select(`
          *,
          profiles:user_id (
            name,
            avatar_url
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setFeedbacks(data || []);
    } catch (error) {
      console.error('Error fetching feedback:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  if (loading) {
    return <div>Loading feedback...</div>;
  }

  return (
    <div className="space-y-6">
      {feedbacks.map((feedback) => (
        <BlurContainer key={feedback.id} className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">
                  {(feedback.profiles as any)?.name || 'Anonymous User'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {new Date(feedback.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-medium">Design</p>
                <p className="text-primary">{renderStars(feedback.design_rating)}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Price</p>
                <p className="text-primary">{renderStars(feedback.price_rating)}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Performance</p>
                <p className="text-primary">{renderStars(feedback.performance_rating)}</p>
              </div>
            </div>

            {feedback.comment && (
              <p className="text-sm text-muted-foreground">{feedback.comment}</p>
            )}
          </div>
        </BlurContainer>
      ))}
    </div>
  );
};
