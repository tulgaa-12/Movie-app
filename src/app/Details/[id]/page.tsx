import { Header } from "@/app/_Components/Header";
import axios from "axios";
interface Pageprops {
  params: {
    id: string;
  };
}

const Home = async ({ params }: Pageprops) => {
  const { id } = params;
  //   const result = await axios.get(
  //     ` https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8",
  //       },
  //     }
  //   );

  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
