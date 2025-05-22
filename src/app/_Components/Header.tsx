"use client";

import { Input } from "@/components/ui/input";
import axios from "axios";
import { ChevronRight, Film, Moon, Search, Sun } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AllSearch } from "./Search";
import Link from "next/link";
type LikeMovie = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  original_title: string;
  genre_ids: number[];
  poster_path: string;
};

const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

export const Header = ({
  page,
  searchValue,
}: {
  page: string;
  searchValue: string;
}) => {
  const { setTheme, theme } = useTheme();
  const [input, setInput] = useState(false);

  const [value, setValue] = useState<string>("");
  const [results, setResults] = useState<LikeMovie[]>([]);
  const handleClick = () => {
    setInput(true);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchValue.trim().length === 0) {
        setResults([]);
        return;
      }

      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${page}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${API_TOKEN}`,
            },
          }
        );
        setResults(res.data.results);
      } catch (error) {
        console.error("Хайлтын алдаа:", error);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue, page]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const isDark = theme === "dark";
  const router = useRouter();

  const routerHandler = (path: string) => {
    router.push(path);
  };

  const Toggle = () => setTheme(isDark ? "light" : "dark");
  return (
    <div className="h-[59px] w-full flex justify-center items-center ">
      <div className="h-[36px] w-full flex flex-row justify-around items-center sm:">
        <div className="flex flex-row gap-[7px]">
          <Film style={{ color: "Indigo" }} />
          <p style={{ color: "Indigo" }}>Movie Z</p>
        </div>
        {input && (
          <div className=" flex gap-[12px]">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {!input && <div>Genre</div>}
                  </NavigationMenuTrigger>

                  <NavigationMenuContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "513px",
                      width: "335px",
                    }}
                  >
                    <div className="w-[213px] h-[60px] flex flex-col gap-[10px]">
                      <h1 className="font-semibold">Genres</h1>
                      <p>See lists of movies by genre</p>
                    </div>
                    <div className="w-[537px] h-[33px] flex justify-center items-center ">
                      <div className=" w-[537px]  border-[1px]"></div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-row gap-7">
                        <Badge
                          variant="outline"
                          className="flex flex-row items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          Action <ChevronRight />
                        </Badge>
                        <Badge
                          variant="outline"
                          className="flex flex-row  items-center rounded-full hover:bg-[#E4E4E7] h-[20px] border"
                        >
                          Adventure <ChevronRight />
                        </Badge>
                      </div>
                      <div className="flex flex-row gap-7">
                        <Badge
                          variant="outline"
                          className="flex flex-row  items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          Game-Show <ChevronRight />
                        </Badge>
                        <Badge
                          variant="outline"
                          className="flex flex-row  items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          History <ChevronRight />
                        </Badge>
                      </div>
                      <div className="flex flex-row gap-7">
                        <Badge
                          variant="outline"
                          className="flex flex-row  items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          Comedy <ChevronRight />
                        </Badge>
                        <Badge
                          variant="outline"
                          className="flex flex-row items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          Crime <ChevronRight />
                        </Badge>
                      </div>
                      <div className="flex flex-row gap-7">
                        <Badge
                          variant="outline"
                          className="flex flex-row  items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          Documentary <ChevronRight />
                        </Badge>
                        <Badge
                          variant="outline"
                          className="flex flex-row  items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          Drama <ChevronRight />
                        </Badge>
                      </div>
                      <div className="flex flex-row gap-7">
                        <Badge
                          variant="outline"
                          className="flex flex-row  items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          Family <ChevronRight />
                        </Badge>
                        <Badge
                          variant="outline"
                          className="flex flex-row  items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          Fantasy <ChevronRight />
                        </Badge>

                        <Badge
                          variant="outline"
                          className="flex flex-row items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          Film-Noir <ChevronRight />
                        </Badge>
                      </div>
                      <div className="flex flex-row gap-7">
                        <Badge
                          variant="outline"
                          className="flex flex-row  items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          Game-Show <ChevronRight />
                        </Badge>
                        <Badge
                          variant="outline"
                          className="flex flex-row  items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          History <ChevronRight />
                        </Badge>
                      </div>
                      <div className="flex flex-row gap-7">
                        <Badge
                          variant="outline"
                          className="flex flex-row  items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          Horrer <ChevronRight />
                        </Badge>
                        <Badge
                          variant="outline"
                          className="flex flex-row  items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          Music <ChevronRight />
                        </Badge>
                        <Badge
                          variant="outline"
                          className="flex flex-row items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          Musical <ChevronRight />
                        </Badge>
                      </div>
                      <div className="flex flex-row gap-7">
                        <Badge
                          variant="outline"
                          className="flex flex-row  items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          Mystery <ChevronRight />
                        </Badge>
                        <Badge
                          variant="outline"
                          className="flex flex-row  items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          News <ChevronRight />
                        </Badge>
                        <Badge
                          variant="outline"
                          className="flex flex-row  items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          Reality-TV <ChevronRight />
                        </Badge>
                      </div>
                      <div className="flex flex-row gap-7">
                        <Badge
                          variant="outline"
                          className="flex flex-row  items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          Romance <ChevronRight />
                        </Badge>

                        <Badge
                          variant="outline"
                          className="flex flex-row items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          Sci-Fi <ChevronRight />
                        </Badge>
                        <Badge
                          variant="outline"
                          className="flex flex-row  items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          Short <ChevronRight />
                        </Badge>
                      </div>
                      <div className="flex flex-row gap-7">
                        <Badge
                          variant="outline"
                          className="flex flex-row  items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          Sport <ChevronRight />
                        </Badge>
                        <Badge
                          variant="outline"
                          className="flex flex-row  items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          Talk-Show <ChevronRight />
                        </Badge>
                        <Badge
                          variant="outline"
                          className="flex flex-row  items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          Triller <ChevronRight />
                        </Badge>
                      </div>
                      <div className="flex flex-row gap-7">
                        <Badge
                          variant="outline"
                          className="flex flex-row  items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                        >
                          War <ChevronRight />
                        </Badge>

                        <Badge
                          variant="outline"
                          className="flex flex-row  items-center rounded-full h-[20px] w-[87px] hover:bg-[#E4E4E7] border"
                        >
                          Western <ChevronRight />
                        </Badge>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Input
              placeholder="...Search"
              className="w-[157px] sm:w-[251px] lg:w-[379px] "
              type="Search"
              onChange={handleChange}
            />
          </div>
        )}
        {!input && (
          <Button onClick={handleClick} className="pl-[300px] ">
            <Search />
          </Button>
        )}
        <div>
          <AllSearch page="" searchValue="" />
        </div>

        <Button variant="outline" size="icon" onClick={Toggle}>
          {isDark ? <Sun /> : <Moon />}
        </Button>
      </div>
      {results.length > 0 && (
        <div className="absolute top-[60px] w-[300px] bg-white shadow-lg z-50 rounded-md p-4">
          {results.map((movie) => (
            <div
              key={movie.id}
              className="py-1 hover:bg-gray-100 cursor-pointer"
              onClick={() => router.push(`/movie/${movie.id}`)}
            >
              {movie.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

{
  /* <Button variant="outline" size="icon" style={{width:"97px", height:36}}>
Genre 
<ChevronRight />
</Button> */
}

//   useEffect(() => {
//   const search = async () => {
//     try {
//       const res = await axios.get(
//         `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${page}`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${API_TOKEN}`,
//           },
//         }
//       );
//     } catch (error) {
//       console.error("aldaa", error);
//     }
//   };
//   if (searchValue) {
//     search();
//   }
// }, [searchValue, page]);
// console.log(value);
