"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChartColumnIncreasing } from "lucide-react";
import { AlleCard } from "./AlleCard";
import Image from "next/image";
import { useState } from "react";
import { Preahvihear } from "next/font/google";
import { Popular } from "./Popular";
import { TopRated } from "./TopRated";
import { useRouter } from "next/navigation";
import Link from "next/link";
type LikeMovie = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  original_title: string;
  genre_ids: number[];
  poster_path: string;
};

type like = {
  id: string;
};

export const AllCard = ({ id }: { id: string }) => {
  const [coming, setComing] = useState<LikeMovie[]>([]);

  const router = useRouter();

  const routerHandler = (path: string) => {
    router.push(path);
  };
  return (
    <div className="flex justify-center items-center flex-col gap-5 w-full">
      <div className="w-full h-[36px] flex justify-center gap-20 sm:gap-80 lg:gap-180 xl:gap-260 2xl:gap-260 ">
        <h3 className="font-inter text-[24px]">Upcoming </h3>

        <Button variant="ghost">
          See More <ArrowRight />
        </Button>
      </div>
      <div className="flex flex-col justify-center gap-7  sm: ">
        <div className="flex gap-10">
          <AlleCard />
        </div>
        <div className="flex flex-row justify-between">
          <h3 className="font-inter text-[24px]">Popular </h3>
          <Button variant="ghost">
            See More <ArrowRight />
          </Button>
        </div>
        <div className="">
          <Popular />
        </div>
        <div className="flex flex-row justify-between">
          <h3 className="font-inter text-[24px]">Top Rated </h3>
          <Button variant="ghost">
            See More <ArrowRight />
          </Button>
        </div>
        <div className="">
          <TopRated />
        </div>
      </div>
    </div>
  );
};
