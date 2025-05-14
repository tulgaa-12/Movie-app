import { Card, CardContent, CardHeader } from "@/components/ui/card";

import Image from "next/image";

type UpcomingMovies = {
  title: string;
  image: string;
  vote: number;
};
const TMDB_IMAGE_SERVICE_URL = "https://image.tmdb.org/t/p";
export const AlleCard = ({ title, image, vote }: UpcomingMovies) => {
  return (
    <div className="">
      <Card className="w-[157px] h-[309px] rounded-lg flex bg-[#F4F4F5]  ">
        <CardHeader className="h-[340px]">
          <Image src={TMDB_IMAGE_SERVICE_URL + image} alt="poster" />
        </CardHeader>
        <CardContent className="h-[79px] "></CardContent>
      </Card>
    </div>
  );
};
