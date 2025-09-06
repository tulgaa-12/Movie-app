import { Header } from "@/app/_Components/Header";
import axios from "axios";
import { FooterContent } from "@/app/_Components/FooterContent";
import { MoreLikeMovies } from "@/app/_Components/MoreLikeMovies";

// type PageProps {
//   params: {
//     id: string;
//   };
// }

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

const Home = async ({ params }: any) => {
  const { id } = params as { id: string };

  const movieDetails = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  );

  const genreIds = movieDetails.data.genres
    .map((genre: any) => genre.id)
    .join(",");

  console.log("Genre IDs:", genreIds);

  return (
    <div id={id} className="flex flex-col gap-10 ">
      <Header />
      <MoreLikeMovies id={id} />
      <FooterContent />
    </div>
  );
};

export default Home;
