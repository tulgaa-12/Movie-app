"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Filmerklaren } from "./Filmerklaren";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useEffect, useState } from "react";
import { getHeroApi } from "../hooks/GetHeroApi";

type UpcomingMovies = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  overview: string;
  vote_average: number;
};

export const MovieFrame = () => {
  const [Upcoming, setUpcoming] = useState<UpcomingMovies[]>([]);

  useEffect(() => {
    const Playing = async () => {
      const response = await getHeroApi();
      const firstfive = response?.results.splice(0, 5);
      setUpcoming(firstfive);
    };
    Playing();
  }, []);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="w-full h-[510px]  ">
      <Carousel
        plugins={[plugin.current]}
        className="w-full  h-[600px] flex flex-col "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}>
        <CarouselContent>
          {Upcoming.map((el, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  {/* <Filmerklaren /> */}
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      src={`https://image.tmdb.org/t/p${el.backdrop_path}`}
                      fill
                      alt="hero"
                      objectFit="cover"
                      priority
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute ml-[80px]" />
        <CarouselNext className="absolute mr-[80px]" />
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
