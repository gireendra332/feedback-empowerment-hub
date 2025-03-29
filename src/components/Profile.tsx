import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export const Profile = () => {
  const {user} = useAuth();
  const points = 100; // TODO: Replace with actual points logic
  const feedbackCount = 1; // TODO: Replace with actual feedback count

  return (
    <DropdownMenu>  
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-8 h-8 p-0">
          <Avatar>
            <AvatarFallback>{user?.name?.[0] || 'U'}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 p-4">
        <div className="flex flex-col space-y-2">
          <p className="text-sm font-medium">{user?.name || 'User'}</p>
          <p className="text-sm font-medium text-primary">{points} Points</p>
          <p className="text-xs text-muted-foreground">{feedbackCount} Feedbacks</p>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
