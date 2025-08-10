import type { InformationCardType } from "@/types/shared/information-card";
import { Card } from "../card";
import { IconPointFilled } from "@tabler/icons-react";

const InformationCard = ({
  title,
  description,
  icon: Icon,
  defaultIcon: DefaultIcon,
}: InformationCardType) => {
  return (
    <Card className="p-2 lg:p-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center justify-center text-sm">
          <div>
            <DefaultIcon className="font-light" />
          </div>
          <div>
            <p>{title}</p>
            <p>{description}</p>
          </div>
        </div>
        <div className="rounded-full p-2 border-2">
          <Icon className={`${Icon === IconPointFilled && "text-primary"}`} />
        </div>
      </div>
    </Card>
  );
};

export default InformationCard;
