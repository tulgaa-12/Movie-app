import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AlleCard } from "./AlleCard";

export const AllCard = () => {
  return (
    <div className="flex justify-center flex-col gap-5 w-full">
      <div className="w-full h-[36px] flex justify-between  pr-[250px] pl-[100px] ">
        <h3 className="font-inter text-[24px]">Upcoming </h3>
        <Button variant="ghost">
          See More <ArrowRight />
        </Button>
      </div>
      <div className="flex flex-col justify-center pr-[100px] pl-[100px] ">
        <div className="grid grid-flow-col grid-rows-2 gap-5 ">
          <AlleCard />
          <AlleCard />
          <AlleCard />
          <AlleCard />
          <AlleCard />
          <AlleCard />
          <AlleCard />
          <AlleCard />
          <AlleCard />
          <AlleCard />
        </div>
        <h3 className="font-inter text-[24px]">Popular </h3>
        <div className="grid grid-flow-col grid-rows-2 gap-5">
          <AlleCard />
          <AlleCard />
          <AlleCard />
          <AlleCard />
          <AlleCard />
          <AlleCard />
          <AlleCard />
          <AlleCard />
          <AlleCard />
          <AlleCard />
        </div>
        <h3 className="font-inter text-[24px]">Top Rated </h3>
        <div className="grid grid-flow-col grid-rows-2 gap-5">
          <AlleCard />
          <AlleCard />
          <AlleCard />
          <AlleCard />
          <AlleCard />
          <AlleCard />
          <AlleCard />
          <AlleCard />
          <AlleCard />
          <AlleCard />
        </div>
      </div>
    </div>
  );
};
