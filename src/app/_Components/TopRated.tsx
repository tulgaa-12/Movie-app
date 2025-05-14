"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TopApi } from "@/app/hooks/TopApi";

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
            <div
              key={index}
              className="relative w-full h-[233px] rounded-lg flex gap-10  ">
              <Image
                src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
                fill
                alt={""}
                objectFit="cover"
                priority
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
