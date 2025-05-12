import Image from "next/image";
import { Header } from "./_Components/Header";
import { MovieFrame } from "./_Components/MovieFrame";
import { AllCard } from "./_Components/AllCard";
import { FooterContent } from "./_Components/FooterContent";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center sm: w-full ">
      <Header />
      <MovieFrame />
      <AllCard />
      <FooterContent />
    </div>
  );
};

export default Home;
