import { Header } from "./_Components/Header";
import { MovieFrame } from "./_Components/MovieFrame";
import { AllCard } from "./_Components/AllCard";
import { FooterContent } from "./_Components/FooterContent";

const Home = async () => {
  return (
    <div className="flex flex-col justify-center items-center sm:flex flex-col justify-center items-center gap-[10px] ">
      <Header />
      <MovieFrame id="" />
      <AllCard id="" />
      <FooterContent />
    </div>
  );
};

export default Home;
