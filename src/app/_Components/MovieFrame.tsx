"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Filmerklaren } from "./Filmerklaren";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const MovieFrame = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="w-full h-[510px]  ">
      <Carousel
        plugins={[plugin.current]}
        className="w-full  h-[600px] flex flex-col "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  {/* <Filmerklaren /> */}
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
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
