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
  return (
    <div className="w-full h-full">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Upcoming.map((el, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[600px] sm:h-[350px]">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
                  fill
                  alt={""}
                  objectFit="cover"
                  priority
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute ml-[80px] hidden md:flex" />
        <CarouselNext className="absolute mr-[80px] hidden md:flex" />
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
