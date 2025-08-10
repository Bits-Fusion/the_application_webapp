import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/site.config";
import { useAuthStore } from "@/stores/auth-store";
const ProfileView = () => {
  const { user } = useAuthStore();
  return (
    <Card className="h-full flex items-center justify-center border-none py-1 rounded-xl bg-muted/50">
      <div className="flex gap-5 w-full px-2">
        <div>
          <Avatar className="h-24 w-24 capitalize">
            <AvatarImage src={user?.profile_image} />
            <AvatarFallback>
              {user ? `${user.first_name.charAt(0)}${user.last_name.charAt(0)}` : "N"}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-col gap-2 w-full h-full items-center py-2  justify-center  text-black dark:text-white font-bold">
          <p className="text-lg lg:text-xl line-clamp-1 items-center  justify-center capitalize">
            {" "}
            {user ? `${user.first_name} ${user.last_name}` : `${siteConfig.name} user`}
          </p>
          <p>{user ? `${siteConfig.name} ${user.role}` : `User`}</p>
        </div>
      </div>
    </Card>
  );
};

export default ProfileView;
