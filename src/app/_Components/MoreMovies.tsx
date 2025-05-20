"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Hand, Star } from "lucide-react";

type Moremovie = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  original_title: string;
  genre_ids: number[];
  poster_path: string;
};

type List = {
  id: string;
};

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

export const Moremovies = ({ id }: { id: string }) => {
  const [Like, setLike] = useState<Moremovie[]>([]);
  useEffect(() => {
    const Mores = async () => {
      try {
        const [more] = await Promise.all([
          axios.get(
            `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_TOKEN}`,
              },
            }
          ),
        ]);
        console.log(more, "more");

        setLike(more.data.results.splice(0, 5));
      } catch (error) {
        console.error("aldaa", error);
      }
    };

    Mores();
  }, [id]);

  const router = useRouter();

  const routerHandler = (path: string) => {
    router.push(path);

    const Handle = useRouter();
    const Handler = (path: string) => {
      Handle.push(path);
    };
  };

  return (
    <div className="flex justify-center flex-col gap-[50px] lg:w-[1080px] mb-">
      <div
        className="w-full h-[36px] flex justify-center gap-30 sm:gap-80
      md:gap-120 lg:gap-200  2xl:gap-210"
      >
        <h3 className="font-semibold ">More like this</h3>
        <Button
          variant="ghost"
          onClick={() => routerHandler(`/Details/Details2/${id}`)}
        >
          See More <ArrowRight />
        </Button>
      </div>
      <div>
        <div className="flex flex-row gap-5 w-[335px] overflow-x-auto overflow-visible md:overflow-hidden md:flex-wrap md:justify-center md:flex-row md:w-full lg:justify-center lg:w-[1024px] xl:w-[1080px]">
          {Like.map((el, index) => (
            <div
              key={index}
              onClick={() => routerHandler(`/Details/${el.id}`)}
              className="w-[157px]  lg:w-[190px]  "
            >
              <img
                src={`https://image.tmdb.org/t/p/original${el.poster_path}`}
                alt={el.title}
                className="w-[157px] rounded-t-lg  h-[233px] xl:h-[281px] lg:w-[190px]  "
              />
              <div className="h-[76px] bg-[#F4F4F5] flex flex-col justify-center gap-[8px] rounded-b-md lg:h-[95px] lg:text-lg ">
                <div className="flex flex-row gap-1 pl-[10px] pt-[6px]">
                  <Star className="text-[#FDE047]" />
                  <p className="text-[16px] font-medium text-[black]">
                    {el.vote_average}
                  </p>
                  <p className="text-[#71717A] text-[14px] font-semibold">
                    /10
                  </p>
                </div>
                <div className="w-[141px] h-[40px] pl-[10px] ">
                  <p className="text-sm font-normal w-[141px] h-[40px]  text-[black] ">
                    {el.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
