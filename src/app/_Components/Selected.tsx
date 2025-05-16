"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Star, Play } from "lucide-react";
import { Trailerbutton } from "./Trailerbutton";
import { Button } from "@/components/ui/button";
type Movies = {
  id: string;
  backdrop_path: string;
  title: string;
  original_title: string;
  overview: string;
  vote_average: number;
  release_date: number;
  published_at: number;
  vote_count: number;
  poster_path: string;
};

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

export const Selected = ({ id }: { id: string }) => {
  const [videos, setVideos] = useState<Movies[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_TOKEN}`,
            },
          }
        );
        setVideos([response.data]);
      } catch (error) {
        console.error("Failed to fetch movie data:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center">
      {videos.map((el) => (
        <div key={el.id} className="lg:w-[1080px]  ">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col pl-[20px] pb-[10px]">
              <h2 className="text-xl mt-2 font-semibold text-[24px]">
                {el.title}
              </h2>
              <p>{el.release_date}</p>
            </div>
            <div className="flex flex-col justify-center  ">
              <div className="flex flex-row gap-1  pr-[20px] ">
                <Star className="text-[#FDE047]" />
                <p className="text-[16px] font-medium ">{`${el.vote_average}`}</p>
                <p className="text-[#71717A] text-[14px] font-semibold">/10</p>
              </div>
              <div className="pl-[40px] font-normal">{el.vote_count}K</div>
            </div>
          </div>
          <div className="relative  ">
            <div className="flex lg:flex-row lg:gap-[20px]">
              <img
                src={`https://image.tmdb.org/t/p/original${el.poster_path}`}
                alt={el.title}
                className=" hidden lg:w-[290px] lg:block"
              />
              <img
                src={`https://image.tmdb.org/t/p/original${el.backdrop_path}`}
                alt={el.title}
                className="lg:w-[760px]"
              />
            </div>
            <div className="absolute bottom-5 left-5  z-10   lg:left-80">
              <Button className="absolute bottom-5 left-5 z-10  rounded-full ">
                <Play />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
