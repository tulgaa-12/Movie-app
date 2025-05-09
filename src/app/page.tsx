import Image from "next/image";
import { Header } from "./_Components/Header";
import { MovieFrame } from "./_Components/MovieFrame";
import { AllCard } from "./_Components/AllCard";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <MovieFrame />

      <AllCard />
    </div>
  );
};

export default Home;
