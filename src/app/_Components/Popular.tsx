"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HeroApi } from "../hooks/HeroApi";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
type popularMovies = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
};
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const Popular = () => {
  const [popular, setComing] = useState<popularMovies[]>([]);

  useEffect(() => {
    const Playin = async () => {
      const response = await HeroApi();
      const Up = response?.results.slice(0, 10);
      setComing(Up);
    };
    Playin();
  }, []);

  const router = useRouter();

  const routerHandler = (path: string) => {
    router.push(path);
  };

  console.log(popular, "popular");
  return (
    <div className="flex  flex-col gap-5 w-full">
      <div className="flex flex-col gap-7">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 gap-8">
          {popular.map((el, index) => (
            <div
              key={index}
              onClick={() => routerHandler(`/Details/${el.id}`)}
              className="hover:opacity-[0.3]"
            >
              <div className="relative w-[157px] h-[233px] rounded-lg   xl:w-[229px] xl:h-[340px] 2xl:w-[229px] 2xl:h-[340px] ">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
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
                  <p className="text-[16px] font-medium text-[black]">{`${el.vote_average}`}</p>
                  <p className="text-[#71717A] text-[14px] font-semibold">
                    /10
                  </p>
                </div>
                <div className="w-[141px] h-[40px] pl-[10px] ">
                  <p className="text-sm font-semibold w-[141px] h-[40px] text-[black] ">{`${el.original_title}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
