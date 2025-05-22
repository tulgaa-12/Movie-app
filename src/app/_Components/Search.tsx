"use client";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import * as React from "react";

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
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

export const AllSearch = ({
  page,
  searchValue,
}: {
  page: string;
  searchValue: string;
}) => {
  const [results, setResults] = useState<LikeMovie[]>([]);

  useEffect(() => {
    const search = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${page}`,
          {
            headers: {
              Authorization: API_TOKEN,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res, "input");
        setResults(res.data.results);
      } catch (error) {
        console.error("aldaa", error);
      }
    };

    if (searchValue) {
      search();
    }
  }, [searchValue, page]);

  return (
    <div className="w-[335px] flex flex-col">
      {results.map((el, index) => (
        <div key={index} className="w-[311px] h-[116px] flex flex-row">
          <div>
            <img src={`https://image.tmdb.org/t/p${el.poster_path}`} />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">{el.title}</div>
            <div className="flex flex-row"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
