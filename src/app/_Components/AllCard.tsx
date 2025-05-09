import { Card, CardContent, CardAction } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export const AllCard = () => {
  return (
    <div className="w-[full] h-[full] justify-center">
      <div className="w-[1277px] h-[36px] flex justify-between">
        <h3 className="font-inter text-[24px]">Upcoming </h3>
        <Button variant="ghost">
          See More <ArrowRight />
        </Button>
      </div>
      <div></div>
    </div>
  );
};
