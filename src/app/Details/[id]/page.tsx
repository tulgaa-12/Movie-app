import { Header } from "@/app/_Components/Header";
import axios from "axios";
import { Selected } from "@/app/_Components/Selected";
import { MovieDescription } from "@/app/_Components/MovieDescription";

interface Pageprops {
  params: {
    id: string;
  };
}

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

const Home = async ({ params }: Pageprops) => {
  const { id } = params;

  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  );

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
    <div id={id} className="flex flex-col gap-10  justify-center">
      <Header />
      <Selected id={id} />
      <MovieDescription page="1" genreIds={genreIds} id={id} />
    </div>
  );
};

export default Home;
