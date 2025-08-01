import type { StatsCardTypes } from "@/types/shared/stats";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "../card";
import { Link } from "@tanstack/react-router";
import { MoveUpRight } from "lucide-react";
import { Button } from "../button";

const StatsCard = ({ title, link, value, description }: StatsCardTypes) => {
  return (
    <Card className="flex-col gap-1">
      <CardHeader className="pb-3! items-center justify-between">
        <CardTitle className="font-semibold">{title}</CardTitle>
        <CardAction>
          <Button className="rounded-full bg-primary" size="icon">
            {" "}
            <Link to={link}>
              <MoveUpRight className="h-6 w-6" />
            </Link>
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <h3 className="text-2xl lg:text-5xl font-extrabold tracking-tight">{value}</h3>
      </CardContent>
      <CardFooter>
        <p className="text-base text-muted-foreground">{description}</p>
      </CardFooter>
    </Card>
  );
};

export default StatsCard;
