import axios from "axios";
import { Header } from "@/app/_Components/Header";
import { AllPopular } from "@/app//_Components/AllPopular";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

const Homeresult = async ({ params }: any) => {
  const { id } = params as { id: string };

  const { data } = await axios.get(`https://api.themoviedb.org/3`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  const movieDetails = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  );

  return (
    <div>
      <Header />
      <AllPopular id={id} />
    </div>
  );
};

export default Homeresult;
