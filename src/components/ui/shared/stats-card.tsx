import type { StatsCardTypes } from "@/types/shared/stats";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "../card";
import { Link } from "@tanstack/react-router";
import { MoveUpRight } from "lucide-react";
import { Button } from "../button";
import { cx } from "class-variance-authority";

const StatsCard = ({ title, link, value, description, className }: StatsCardTypes) => {
  return (
    <Card
      className={cx(
        "flex-col bg-primary text-white dark:text-gray-800 font-inter gap-1",
        className
      )}
    >
      <CardHeader className="pb-3! items-center justify-between">
        <CardTitle className="font-semibold">{title}</CardTitle>
        <CardAction>
          <Button className={`rounded-full !bg-white`} size="icon">
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
        <p className="text-base ">{description}</p>
      </CardFooter>
    </Card>
  );
};

export default StatsCard;
