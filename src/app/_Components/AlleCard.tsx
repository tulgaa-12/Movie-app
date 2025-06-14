"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { getApi } from "../hooks/GetApi";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useRouter } from "next/navigation";

type comingMovies = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
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

  const router = useRouter();

  const routerHandler = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex  flex-col gap-5 w-full">
      <div className="flex flex-col gap-7">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 gap-8">
          {coming.map((el, index) => (
            <div
              key={index}
              onClick={() => routerHandler(`/Details/${el.id}`)}
              className="group cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
              <div className="relative w-full h-[233px] rounded-lg  xl:w-[229px] xl:h-[340px] 2xl:w-[229px] 2xl:h-[340px]">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                  fill
                  alt={""}
                  objectFit="cover"
                  priority
                  className="rounded-t-lg   transition-transform duration-300 group-hover:scale-110 "
                />
              </div>
              <div className="h-[76px] bg-[#F4F4F5] flex flex-col justify-center gap-[8px] rounded-b-lg lg:h-[95px] lg:text-lg group-hover:bg-[#e4e4e7] transition-colors duration-300 ">
                <div className="flex flex-row gap-1 pl-[10px] pt-[6px]">
                  <Star className="text-[#FDE047]" />
                  <p className="text-[16px] font-medium text-[black]">{`${el.vote_average}`}</p>
                  <p className="text-[#71717A] text-[14px] font-semibold">
                    /10
                  </p>
                </div>
                <div className="w-[141px] h-[40px] pl-[10px] ">
                  <p className="text-sm font-semibold w-[141px] h-[40px]  text-[black] ">{`${el.original_title}`}</p>
                </div>
              </div>
            </div>
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
