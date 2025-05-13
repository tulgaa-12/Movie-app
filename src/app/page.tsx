"use client";

import Image from "next/image";
import { Header } from "./_Components/Header";
import { MovieFrame } from "./_Components/MovieFrame";
import { AllCard } from "./_Components/AllCard";
import { FooterContent } from "./_Components/FooterContent";
import { getHeroApi } from "./hooks/GetHeroApi";

const Home = () => {
  const Toogle = async () => {
    await getHeroApi();
  };
  return (
    <div className="flex flex-col justify-center items-center sm:flex flex-col justify-center items-center ">
      <Header />
      <MovieFrame />
      <AllCard />
      <FooterContent />
      <div className="text-[red] sm:text-[blue] lg:text-[yellow] xl:text-[white] 2xl:text-[green]">
        ich gern Fußball spielen
        <button className="w-[10]" onClick={Toogle}>
          click
        </button>
      </div>
    </div>
  );
};

export default Home;
