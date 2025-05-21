import axios from "axios";
import { Header } from "@/app/_Components/Header";
import { MoreLikeMovies } from "@/app/_Components/MoreLikeMovies";

interface Pageprops {
  params: {
    id: string;
  };
}

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

const Home = async ({ params }: Pageprops) => {
  const { id } = params;

  const { data } = await axios.get(`https://api.themoviedb.org/3${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  return (
    <div id={id} className="flex flex-col gap-10  justify-center ">
      <Header page="" searchValue="" />
      <MoreLikeMovies id={id} />
    </div>
  );
};

export default Home;
