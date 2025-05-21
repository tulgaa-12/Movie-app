"use client";

import Image from "next/image";
import { Header } from "./_Components/Header";
import { MovieFrame } from "./_Components/MovieFrame";
import { AllCard } from "./_Components/AllCard";
import { FooterContent } from "./_Components/FooterContent";
import { Search } from "./_Components/Search";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:flex flex-col justify-center items-center gap-[10px] ">
      <Header />
      <MovieFrame />
      <AllCard />
      <FooterContent />
      <Search page="" searchValue="" />
    </div>
  );
};

export default Home;
