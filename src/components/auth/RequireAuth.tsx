import { useAuth } from "@/contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    toast.error("Please login to continue", {
      description: "You need to be logged in to perform this action",
    });
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
