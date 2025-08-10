import { Card } from "@/components/ui/card";
import InformationCard from "@/components/ui/shared/information-card";
import { useAuthStore } from "@/stores/auth-store";
import {
  IconCircleDot,
  IconInfoCircle,
  IconMail,
  IconPhoneRinging,
  IconPoint,
  IconPointFilled,
} from "@tabler/icons-react";

const ProfileInformation = () => {
  const { user } = useAuthStore();
  const profileInformation = [
    {
      title: "Full name",
      description: `${user?.first_name} ${user?.last_name}`,
      icon: user?.is_active ? IconPointFilled : IconPoint,
    },
    {
      title: "Email address",
      description: `${user?.email}`,
      icon: IconMail,
    },
    {
      title: "Contact number",
      description: `${user?.phone_number}`,
      icon: IconPhoneRinging,
    },
    {
      title: "Designation",
      description: `${user?.role}`,
      icon: IconInfoCircle,
    },
  ];
  return (
    <Card className="h-full p-2 lg:p-4 gap-4">
      <p className="text-left font-bold text-lg lg:text-xl">Detailed Information</p>
      <div className="flex-col space-y-2">
        {profileInformation.map((info) => (
          <div key={info.title}>
            {" "}
            <InformationCard
              title={info.title}
              description={info.description}
              icon={info.icon}
              defaultIcon={IconCircleDot}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ProfileInformation;
