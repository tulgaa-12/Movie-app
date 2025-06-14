"use client";

import axios from "axios";
import { Users } from "lucide-react";
import { useState, useEffect } from "react";
import * as React from "react";

type Crew = {
  crew_id: string;
  job: string;
  credit_id: number;
  name: string;
};
type CastMember = {
  cast_id: number;
  character: string;
  name: string;
  profile_path: string | null;
};

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

export const Crews = ({ id }: { id: string }) => {
  const [castList, setCastList] = useState<CastMember[]>([]);
  const [crewList, setCrewList] = useState<Crew[]>([]);
  const jobs = ["Director", "Writer", "Stars"];

  useEffect(() => {
    const Allcrew = async () => {
      try {
        const [creditsRes, videoRes] = await Promise.all([
          axios.get(
            `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_TOKEN}`,
              },
            }
          ),
          axios.get(
            `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_TOKEN}`,
              },
            }
          ),
        ]);
        console.log("all", creditsRes.data.crew);
        setCastList([...creditsRes.data.cast.splice(0, 3)]);
        setCrewList([...creditsRes.data.crew.slice(0, 1)]);
      } catch (error) {
        console.error("aldaa", error);
      }
    };
    Allcrew();
  }, [id]);

  return (
    <div className="w-full flex   md:justify-center">
      {crewList.map((el, index) => (
        <div
          key={index}
          className="pl-[15px] flex gap-20 flex-row md:w-[1080px]">
          <div className="flex flex-col gap-20">
            {jobs.map((el) => {
              return (
                <div key={el} className="flex flex-col gap-5">
                  <div className="font-semibold text-[16px]">{el}</div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-20">
            <p className="font-normal text-base">{el.name}</p>
            <p className="flex flex-wrap">
              {crewList
                .filter((el) => el.job === "Writer")
                .map((el) => el.name)
                .join(", ") || "Not Available"}
            </p>
            <div className="flex flex-wrap">
              {castList.map((el, index) => (
                <p className="flex gap-[10px]" key={index}>
                  {el.name}--
                </p>
              ))}
            </div>
          </div>
          <div className="w-[335px] border-[1px] hidden xl:border-[1px] xl:w-[1080px] xl:block"></div>
        </div>
      ))}
    </div>
  );
};
