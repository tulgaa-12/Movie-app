"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AlleCard } from "./AlleCard";
import Image from "next/image";
import { useState } from "react";
import { Preahvihear } from "next/font/google";
import { Popular } from "./Popular";
import { TopRated } from "./TopRated";

type user = {};

export const AllCard = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-5 w-full">
      <div className="w-full h-[36px] flex justify-center gap-20 sm:gap-80 lg:gap-170 ">
        <h3 className="font-inter text-[24px]">Upcoming </h3>
        <Button variant="ghost">
          See More <ArrowRight />
        </Button>
      </div>
      <div className="flex flex-col justify-center gap-7  sm: ">
        <div className="flex gap-10">
          <AlleCard />
        </div>
        <h3 className="font-inter text-[24px]">Popular </h3>
        <div className="">
          <Popular />
        </div>
        <h3 className="font-inter text-[24px]">Top Rated </h3>
        <div className="">
          <TopRated />
        </div>
      </div>
    </div>
  );
};
