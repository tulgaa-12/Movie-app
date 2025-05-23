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
  name: string;
};

type Genre = {
  name: string;
  id: number;
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

  const [genres, setGenres] = useState<Genre[]>([]);

  const handleClick = () => {
    setInput(true);
  };

  useEffect(() => {
    const search = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${page}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_TOKEN}`,
            },
          }
        );
      } catch (error) {
        console.error("aldaa", error);
      }
    };
    if (searchValue) {
      search();
    }
  }, [searchValue]);

  useEffect(() => {
    const genre = async () => {
      const movieGenres = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?language=en`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      setGenres(movieGenres.data.genres);
    };

    genre();
  }, []);

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
                    <div className="flex flex-col gap-y-7 grid grid-cols-3">
                      {genres?.map((el, index) => {
                        return (
                          <Link href={`/Genre/${el.id}`}>
                            <div key={index} className="flex flex-row ">
                              <Badge
                                variant="outline"
                                className="flex flex-row items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                              >
                                {el.name} <ChevronRight />
                              </Badge>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Input
              placeholder="       Search.."
              className="w-[157px] sm:w-[251px] lg:w-[379px] "
              type="Search"
              onChange={(e) => setValue(e.target.value)}
              style={{ paddingLeft: "10px" }}
            />
            {/* <div className="absolute left-249 top-7.5  -translate-y-1/2">
              <Search className=" w-[16px] h-[16px] text-[#71717A]" />
            </div> */}
          </div>
        )}
        {!input && (
          <Button
            onClick={handleClick}
            className="pl-[300px] ml-[200px] xl:ml-[1000px]"
          >
            <Search />
          </Button>
        )}

        <Button variant="outline" size="icon" onClick={Toggle}>
          {isDark ? <Sun /> : <Moon />}
        </Button>
      </div>
      <div>
        {results.map((el, index) => {
          return <AllSearch key={index} page="1" searchValue="" />;
        })}
      </div>
    </div>
  );
};

{
  /* <Button variant="outline" size="icon" style={{width:"97px", height:36}}>
Genre 
<ChevronRight />
</Button> */
}
