import { Header } from "./_Components/Header";
import { MovieFrame } from "./_Components/MovieFrame";
import { AllCard } from "./_Components/AllCard";
import { FooterContent } from "./_Components/FooterContent";
import { AllSearch } from "./_Components/Search";

import axios from "axios";
interface Pageprops {
  params: {
    id: string;
  };
}

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

const Home = async ({ params }: Pageprops) => {
  const { id } = await params;

  const { data } = await axios.get(`https://api.themoviedb.org/3`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  return (
    <div className="flex flex-col justify-center items-center sm:flex flex-col justify-center items-center gap-[10px] ">
      <Header page="1" id={id} />
      <MovieFrame id="" />
      <AllCard />
      <FooterContent />
      <AllSearch id={id} />
    </div>
  );
};

export default Home;

// "use client";

// import { Header } from "./_Components/Header";
// import { MovieFrame } from "./_Components/MovieFrame";
// import { AllCard } from "./_Components/AllCard";
// import { FooterContent } from "./_Components/FooterContent";
// import { AllSearch } from "./_Components/Search";
// import { useState } from "react";

// const Home = () => {
//   const [searchValue, setSearchValue] = useState("");

//   return (
//     <div className="flex flex-col justify-center items-center gap-[10px]">
//       <Header
//         searchValue={searchValue}
//         setSearchValue={setSearchValue}
//         page="home"
//       />
//       <MovieFrame id="" />
//       <AllCard />
//       <AllSearch page="1" searchValue={searchValue} />
//       <FooterContent />
//     </div>
//   );
// };

// export default Home;
