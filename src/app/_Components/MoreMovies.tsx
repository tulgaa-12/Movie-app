"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

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

  return (
    <div>
      <div className="w-full h-[36px] flex justify-center gap-30 sm:gap-80 lg:gap-260 2xl:gap-260">
        <h3 className="font-semibold">More like this</h3>
        <Button variant="ghost">
          See More <ArrowRight />
        </Button>
      </div>
      <div>
        <div className="flex flex-row gap-10">
          {Like.map((el, index) => (
            <div key={index} className="w-[309px] ">
              <img
                src={`https://image.tmdb.org/t/p/original${el.poster_path}`}
                alt={el.title}
                className="w-[309px]"
              />
              <div className="h-[76px] bg-[#F4F4F5] flex flex-col justify-center gap-[8px] rounded-b-lg lg:h-[95px] lg:text-lg ">
                <div className="flex flex-row gap-1 pl-[10px] pt-[6px]">
                  <Star className="text-[#FDE047]" />
                  <p className="text-[16px] font-medium text-[black]"></p>
                  <p className="text-[#71717A] text-[14px] font-semibold">
                    /10
                  </p>
                </div>
                <div className="w-[141px] h-[40px] pl-[10px] ">
                  <p className="text-sm font-semibold w-[141px] h-[40px]  text-[black] "></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
