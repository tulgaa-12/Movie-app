"use client";
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import axios from "axios";

type MovieDescription = {
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
  id: number;
  name: string;
};

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

export const MovieDescription = ({
  page,
  genreIds,
}: {
  page: string;
  genreIds: string;
}) => {
  const [description, setDescription] = useState<MovieDescription[]>([]);
  const [genresList, setGenresList] = useState<List[]>([]);

  const jobs = ["Director", "Writer", "Stars"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [moviesRes, genresRes] = await Promise.all([
          axios.get(
            `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreIds}&page=${page}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_TOKEN}`,
              },
            }
          ),
          axios.get(
            `https://api.themoviedb.org/3/genre/movie/list?language=en`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_TOKEN}`,
              },
            }
          ),
        ]);

        setDescription(moviesRes.data.results.splice(0, 1));
        setGenresList(genresRes.data.genres);
      } catch (error) {
        console.error("alddaa", error);
      }
    };

    fetchData();
  }, [genreIds, page]);

  return (
    <div className="grid grid-cols-4 flex flex-col items-center justify-center w-full gap-4 md:flex justify-center ">
      {description.map((movie) => (
        <div className="w-[375px] flex flex-row  justify-around  md:w-[768px] md:justify-center lg:w-[1024px] xl:w-[1080px]">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt=""
              className="w-[100px] md:hidden"
            />
          </div>
          <div
            key={movie.id}
            className="p-4 border w-[201px] rounded-lg flex flex-row md:w-[600px] lg:w-[1080px] "
          >
            <div className="flex flex-wrap gap-2 mt-2">
              {movie.genre_ids.map((gid) => {
                const genre = genresList.find((g) => g.id === gid);
                return (
                  <Badge key={gid} className="text-[12px] font-semibold">
                    {genre ? genre.name : "Unknown"}
                  </Badge>
                );
              })}
              <p className="text-sm mt-2 font-normal">{movie.overview}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
