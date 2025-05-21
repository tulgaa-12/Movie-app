// import axios from "axios";
// import { useState, useEffect } from "react";
// import * as React from "react";

// type LikeMovie = {
//   adult: boolean;
//   backdrop_path: string;
//   id: number;
//   title: string;
//   overview: string;
//   vote_average: number;
//   original_title: string;
//   genre_ids: number[];
//   poster_path: string;
//   page: string;
//   searchValue: string;
// };

// const API_TOKEN =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

// export const Search = ({
//   page,
//   searchValue,
// }: {
//   page: string;
//   searchValue: string;
// }) => {
//   const [input, setInput] = useState<LikeMovie[]>([]);
//   const [hande, setHande] = useState("");
//   useEffect(() => {
//     const search = async () => {
//       try {
//         const main = await axios.get(
//           `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${page}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${API_TOKEN}`,
//             },
//           }
//         );
//       } catch (error) {
//         console.error("aldaa", error);
//       }
//     };
//     search();
//   }, []);
//   const Handler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setHande(event.target.value);

//     const filterbysearch = search.filter();
//   };
//   return;
// };

"use client";

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

export const Search = ({
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
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        Search Results for "{searchValue}"
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {results.map((movie) => (
          <div key={movie.id} className="bg-white rounded shadow p-2">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-64 object-cover rounded"
            />
            <h3 className="mt-2 text-sm font-semibold">{movie.title}</h3>
            <p className="text-xs text-gray-600"> {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
