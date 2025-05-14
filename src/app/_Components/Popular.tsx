"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HeroApi } from "../hooks/HeroApi";

type popularMovies = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  vote_average: number;
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

  console.log(popular, "popular");
  return (
    <div className="flex  flex-col gap-5 w-full">
      <div className="flex flex-col gap-7">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 gap-8">
          {popular.map((el, index) => (
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
