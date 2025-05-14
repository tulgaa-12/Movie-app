"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import Image from "next/image";
import { useEffect, useState } from "react";

import { getApi } from "../hooks/GetApi";

type comingMovies = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  vote_average: number;
};

export const AlleCard = () => {
  const [coming, setComing] = useState<comingMovies[]>([]);

  useEffect(() => {
    const Playin = async () => {
      const response = await getApi();
      const Up = response?.results.slice(0, 10);
      setComing(Up);
    };
    Playin();
  }, []);

  console.log(coming, "coming");

  return (
    <div className="flex  flex-col gap-5 w-full">
      <div className="flex flex-col gap-7">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 gap-8">
          {coming.map((el, index) => (
            <Card>
              <div
                key={index}
                className="relative w-full h-[233px] rounded-lg flex gap-10 ">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
                  fill
                  alt={""}
                  objectFit="cover"
                  priority
                />
                <CardHeader className=" w-[157px] h-[79px] rounded-lg flex bg-[#F4F4F5]  ">
                  <CardContent className="h-[79px] "></CardContent>
                </CardHeader>
              </div>
            </Card>
            //   <CardContent className="h-[79px] "></CardContent>
            //     <CardHeader className=" w-[157px] h-[309px] rounded-lg flex bg-[#F4F4F5]  ">
            // </CardHeader>
          ))}
        </div>
      </div>
    </div>
  );
};

{
  /* <Card
              key={index}
              className="w-[157px] h-[309px] rounded-lg flex bg-[#F4F4F5]   ></Card> */
}
