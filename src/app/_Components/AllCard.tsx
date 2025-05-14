"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AlleCard } from "./AlleCard";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getApi } from "../hooks/GetApi";

type comingMovies = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  vote_average: number;
};
export const AllCard = () => {
  const [coming, setComing] = useState<comingMovies[]>([]);
  useEffect(() => {
    const Playin = async () => {
      const response = await getApi();
      const Up = response?.results.splice(0, 10);
      setComing(Up);
    };
    Playin();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col gap-5 w-full">
      <div className="w-full h-[36px] flex justify-center gap-15 ">
        <h3 className="font-inter text-[24px]">Upcoming </h3>
        <Button variant="ghost">
          See More <ArrowRight />
        </Button>
      </div>
      <div className="flex flex-col justify-center gap-7  sm: ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 gap-8"></div>
        <h3 className="font-inter text-[24px]">Popular </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 gap-8"></div>
        <h3 className="font-inter text-[24px]">Top Rated </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 gap-8"></div>
      </div>
    </div>
  );
};
