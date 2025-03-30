import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { LogOut, Edit } from "lucide-react";
import { ProfileEdit } from "./ProfileEdit";
import { useState } from "react";

export const Profile = () => {
  const { user, logout } = useAuth();
  const points = user?.stats?.points ?? 0;
  const feedbackCount = user?.stats?.feedbackCount ?? 0;
  const [isEditing, setIsEditing] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="w-8 h-8 p-0">
          <Avatar>
            <AvatarFallback>{user?.name?.[0] || 'U'}</AvatarFallback>
          </Avatar>
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-[250px] sm:w-[300px] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
      >
        <SheetHeader>
          <div className="flex justify-between items-center">
            <SheetTitle>Profile</SheetTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsEditing(!isEditing)}
            >
              <Edit className="h-4 w-4" />
            </Button>
          </div>
        </SheetHeader>
        <div className="py-6">
          {isEditing ? (
            <ProfileEdit onClose={() => setIsEditing(false)} />
          ) : (
            <>
              <div className="flex items-center space-x-4 mb-6">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="text-lg">{user?.name?.[0] || 'U'}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">{user?.name || 'User'}</h3>
                  <p className="text-sm text-muted-foreground">{user?.email}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-secondary p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">Total Points</p>
                    <p className="text-primary font-semibold">{points}</p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm font-medium">Feedbacks Given</p>
                    <p className="text-muted-foreground">{feedbackCount}</p>
                  </div>
                </div>

                <Button 
                  variant="destructive" 
                  className="w-full"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
