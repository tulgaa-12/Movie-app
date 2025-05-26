"use client";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { Star, ArrowRight } from "lucide-react";
type Like = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  original_title: string;
  genre_ids: number[];
  poster_path: string;
  release_date: number;
};

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

export const AllSearch = ({ id }: { id: string }) => {
  const [results, setResults] = useState<Like[]>([]);

  useEffect(() => {
    const search = async () => {
      try {
        const allmovie = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${id}&language=en-US&page=${1}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_TOKEN}`,
            },
          }
        );
        console.log(allmovie.data.results, "sonw white");
        setResults(allmovie.data.results);
      } catch (error) {
        console.error("ald", error);
      }
    };
    search();
  }, [id]);

  return (
    <div className="w-[335px] flex flex-col gap-1 bg-[white] border-2 border-black-500 rounded-lg ">
      {results.map((el, index) => {
        return (
          <div
            key={index}
            className="w-[331px] h-full flex flex-row   gap-6  border-2 border-black-500 rounded-lg">
            <div className="w-[67px] h-[100px] rounded-lg pl-2 pt-2">
              <img
                src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
              />
            </div>
            <div className="flex flex-col gap-7 ">
              <div>
                <h4 className="font-semibold text-[20px] text-[black]">
                  {el.title}
                </h4>
                <div className="flex flex-row gap-1  pt-[6px] pl-[10px]">
                  <Star className="text-[#FDE047]" />
                  <p className="text-[16px] font-medium text-[black]">{`${el.vote_average}`}</p>
                  <p className="text-[#71717A] text-[14px] font-semibold">
                    /10
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-10">
                <p className="text-[16px] font-medium text-[black]">
                  {el.release_date}
                </p>
                <Button variant="ghost" className="text-[black]">
                  See More <ArrowRight />
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// "use client";
