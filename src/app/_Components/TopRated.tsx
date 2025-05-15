"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TopApi } from "@/app/hooks/TopApi";
import { Star } from "lucide-react";

type TopMovies = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  vote_average: number;
};
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const TopRated = () => {
  const [topated, setComing] = useState<TopMovies[]>([]);

  useEffect(() => {
    const Playin = async () => {
      const response = await TopApi();
      const Up = response?.results.slice(0, 10);
      setComing(Up);
    };
    Playin();
  }, []);

  console.log(topated, "top");
  return (
    <div className="flex  flex-col gap-5 w-full">
      <div className="flex flex-col gap-7">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 gap-8">
          {topated.map((el, index) => (
            <div key={index}>
              <div className="w-full h-[233px] relative rounded-lg xl:w-[229px] xl:h-[340px] 2xl:w-[229px] 2xl:h-[340px]  ">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
                  fill
                  alt={""}
                  objectFit="cover"
                  priority
                  className="rounded-t-lg"
                />
              </div>
              <div className="h-[76px] bg-[#F4F4F5] flex flex-col justify-center gap-[8px] rounded-b-lg lg:h-[95px] lg:text-lg ">
                <div className="flex flex-row gap-1  pt-[6px] pl-[10px]">
                  <Star className="text-[#FDE047]" />
                  <p className="text-[16px] font-medium">{`${el.vote_average}`}</p>
                  <p className="text-[#71717A] text-[14px] font-semibold">
                    /10
                  </p>
                </div>
                <div className="w-[141px] h-[40px] pl-[10px] ">
                  <p className="text-sm font-normal w-[141px] h-[40px]  ">{`${el.original_title}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
