"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";
import { getHeroApi } from "../hooks/GetHeroApi";
import { Play, Star } from "lucide-react";

type UpcomingMovies = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  original_title: string;
};

export const MovieFrame = () => {
  const [Upcoming, setUpcoming] = useState<UpcomingMovies[]>([]);
  const [Movie, setMovie] = useState([]);

  useEffect(() => {
    const Playing = async () => {
      const response = await getHeroApi();
      const firstfive = response?.results.splice(0, 5);
      setUpcoming(firstfive);
    };
    Playing();
  }, []);
  console.log(Upcoming, "upcoming");
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  console.log(Upcoming);
  return (
    <div className="w-full h-full">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Upcoming.map((el, index) => (
            <CarouselItem key={index} className="">
              <div className="relative w-full h-[246px]  sm:h-[350px] lg:h-[510px] 2xl:h-[600px]  ">
                <div className=" absolute w-full pt-[20px] flex flex-col relative gap-3 hidden sm:hidden md:hidden ">
                  <div className="flex justify-between pl-[20px]">
                    <div className="flex flex-col">
                      <p className="text-sm font-normal">Now Playing:</p>
                      <h3 className="text-[24px] font-semibold">{`${el.original_title}`}</h3>
                    </div>
                    <div className="flex flex-row gap-1 pr-[20px] pt-[20px]">
                      <Star className="text-[#FDE047]" />
                      <p className="text-[18px] font-semibold">{`${el.vote_average}`}</p>
                      <p className="text-[#71717A] text-[16px] font-normal">
                        /10
                      </p>
                    </div>
                  </div>
                  <div className="w-[335px] flex justify-center items-center pl-[20px]">
                    <p className="text-[14px] font-normal">{`${el.overview}`}</p>
                  </div>
                  <div className="pl-[20px]">
                    <Button className="font-medium w-[145px] h-[40px] flex flex-row ">
                      <Play />
                      Watch Trailer
                    </Button>
                  </div>
                </div>
                <Image
                  src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}  `}
                  fill
                  alt={``}
                  objectFit="cover"
                  priority
                  className="bg-fixed"
                />
              </div>
              <div className=" w-full pt-[20px] flex flex-col gap-3 lg:hidden">
                <div className="flex justify-between pl-[20px]">
                  <div className="flex flex-col">
                    <p className="text-sm font-normal">Now Playing:</p>
                    <h3 className="text-[24px] font-semibold">{`${el.original_title}`}</h3>
                  </div>
                  <div className="flex flex-row gap-1 pr-[20px] pt-[20px]">
                    <Star className="text-[#FDE047]" />
                    <p className="text-[18px] font-semibold">{`${el.vote_average}`}</p>
                    <p className="text-[#71717A] text-[16px] font-normal">
                      /10
                    </p>
                  </div>
                </div>
                <div className="w-[335px] flex justify-center items-center pl-[20px]">
                  <p className="text-[14px] font-normal">{`${el.overview}`}</p>
                </div>
                <div className="pl-[20px]">
                  <Button className="font-medium w-[145px] h-[40px] flex flex-row ">
                    <Play />
                    Watch Trailer
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute ml-[80px] hidden md:hidden lg: lg:hidden" />
        <CarouselNext className="absolute mr-[80px] hidden md:hidden  lg:hidden " />
      </Carousel>
    </div>
  );
};

{
  /* <div>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full ml-[16px]"
        >
          <ChevronLeft />
        </Button>
      </div>
      <div>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full mr-[16px]"
        >
          <ChevronRight />
        </Button>
      </div> */
}
