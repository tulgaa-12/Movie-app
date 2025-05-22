import { useEffect, useState } from "react";
import { Header } from "./Header";

type comingMovies = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
};

export const Allresults = () => {
  return (
    <div className="flex flex-col">
      <Header page="" searchValue="" />
      <div>
        <div>
          <h3 className="font-semibold text-[24px]">Search results</h3>
        </div>
        <div className="flex justify-center">
          <div className=" grid grid-cols-2 w-[335px]"></div>
        </div>
      </div>
    </div>
  );
};
