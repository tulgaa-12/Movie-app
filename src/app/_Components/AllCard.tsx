import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AlleCard } from "./AlleCard";
export const AllCard = () => {
  return (
    <div className="w-[full] h-[full] justify-center">
      <div className="w-[1277px] h-[36px] flex justify-between">
        <h3 className="font-inter text-[24px]">Upcoming </h3>
        <Button variant="ghost">
          See More <ArrowRight />
        </Button>
      </div>
      <div className="flex flex-row">
        <AlleCard />
        <AlleCard />
        <AlleCard />
        <AlleCard />
        <AlleCard />
        <AlleCard />
      </div>
    </div>
  );
};
