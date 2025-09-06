import axios from "axios";
import { Header } from "@/app/_Components/Header";
import { Allgenre } from "@/app/_Components/AllGenre";
import { FooterContent } from "@/app/_Components/FooterContent";

//  type PageProps = {
//   params: {
//     id: string;
//   };
// }

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

const Home = async ({ params }: any) => {
  const { id } = params as { id: string };

  const movieGenres = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${id}&page=${1}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  );

  console.log(movieGenres.data, "movieGenres");

  return (
    <div className="flex flex-col gap-10">
      <Header />
      <Allgenre id={id} />
      <FooterContent />
    </div>
  );
};

export default Home;
