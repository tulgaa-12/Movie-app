"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import * as React from "react";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
type LikeMovie = {
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

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

export const MoreLikeMovies = ({ id }: { id: string }) => {
  const [Like, setLike] = useState<LikeMovie[]>([]);
  useEffect(() => {
    const Mores = async () => {
      try {
        const movie = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_TOKEN}`,
            },
          }
        );

        setLike(movie.data.results.splice(0, 10));
      } catch (error) {
        console.error("aldaa", error);
      }
    };

    Mores();
  }, [id]);
  const router = useRouter();

  const routerHandler = (path: string) => {
    router.push(path);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col gap-5  pl-[20px] xl:w-[1080px] xl:mr-[150px]">
        <div>
          <h3 className="font-semibold text-[24px]">More like this</h3>
        </div>
        <div className=" flex flex-col  gap-5 grid grid-cols-2 lg:grid-cols-5 lg:gap-50 ">
          {Like.map((el, index) => (
            <div
              onClick={() => routerHandler(`/Details/${el.id}`)}
              key={index}
              className="flex flex-col w-[157px] lg:w-[190px] xl:w-[229px] group cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-xl  ">
              <img
                src={`https://image.tmdb.org/t/p/original${el.poster_path}`}
                alt={el.title}
                className="w-[157px] rounded-t-lg h-[233px] xl:h-[340px] lg:w-[190px] xl:w-[229px]  transition-transform duration-300 group-hover:scale-110"
              />
              <div className=" h-[100px] bg-[#F4F4F5] flex flex-col justify-center gap-[8px] rounded-b-md lg:h-[95px] lg:text-lg  group-hover:bg-[#e4e4e7] transition-colors duration-300">
                <div className="flex flex-row gap-1 pl-[10px] pt-[6px]">
                  <Star className="text-[#FDE047]" />
                  <p className="text-[16px] font-medium text-[black]">
                    {el.vote_average}
                  </p>
                  <p className="text-[#71717A] text-[14px] font-semibold">
                    /10
                  </p>
                </div>
                <div className="w-[141px]  pl-[10px] ">
                  <p className="text-sm font-normal w-[141px] pb-[10px]  text-[black] ">
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
