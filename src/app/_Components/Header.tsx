"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Film,
  Moon,
  Search,
  Sun,
  Star,
  ArrowRight,
} from "lucide-react";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
  release_date: number;
};

type Genre = {
  name: string;
  id: number;
};
type Movie = {
  id: number;
};
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

export const Header = () => {
  const { setTheme, theme } = useTheme();
  const [input, setInput] = useState(false);
  const [value, setValue] = useState("");
  const [results, setResults] = useState<LikeMovie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const isDark = theme === "dark";
  const router = useRouter();
  const [movie, setMovie] = useState<Movie[]>([]);
  const handleClick = () => setInput(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${value}&language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        setResults(res.data.results);
      } catch (err) {
        console.error("Search error", err);
      }
    };

    if (value.trim()) fetchResults();
  }, [value]);

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?language=en`,
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      setGenres(res.data.genres);
    };
    fetchGenres();
  }, []);
  const handle = useRouter();

  const routerHandler = (path: string) => {
    handle.push(path);
  };

  return (
    <div className="relative h-[59px] w-full flex justify-center items-center">
      <div className="h-[36px] w-full flex flex-row justify-around items-center">
        <div className="flex flex-row gap-[7px]">
          <Link href={`/app/`}>
            <Film className="text-indigo-600" />

            <p className="text-indigo-600">Movie Z</p>
          </Link>
        </div>

        {input ? (
          <div className="flex gap-[12px]">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger></NavigationMenuTrigger>
                  <NavigationMenuContent className="flex flex-col h-[513px] w-[335px]">
                    <div className="w-[213px] h-[60px] flex flex-col gap-[10px]">
                      <h1 className="font-semibold">Genres</h1>
                      <p>See lists of movies by genre</p>
                    </div>
                    <div className="w-[537px] h-[33px] flex justify-center items-center">
                      <div className="w-[537px] border-[1px]"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-y-7">
                      {genres.map((el) => (
                        <Link key={el.id} href={`/Genre/${el.id}`}>
                          <Badge
                            variant="outline"
                            className="rounded-full h-[20px] hover:bg-gray-200 border">
                            {el.name} <ChevronRight />
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Input
              placeholder="Search..."
              className="w-[157px] sm:w-[251px] lg:w-[379px] xl:w-[500px]"
              type="text"
              onChange={handleChange}
              value={value}
            />
          </div>
        ) : (
          <Button
            onClick={handleClick}
            className="pl-[300px] ml-[200px] xl:ml-[1000px]">
            <Search />
          </Button>
        )}

        <div className="">
          <div className="">
            {results.length > 0 && value.trim() && (
              <div className="absolute top-full left-0  bg-white z-10 w-[335px]  max-h-[400px] overflow-auto border rounded-md shadow-lg ml-[30px] md:ml-[220px] lg:ml-[350px] xl:ml-[390px] xl:w-[577px] 2xl:ml-[700px] ">
                {results.map((el, index) => (
                  <div
                    key={index}
                    className="w-[331px] h-full flex flex-row   gap-6  border-2 border-black-500 rounded-lg xl:w-[577px] shadow-sm hover:opacity-[0.5] hover:bg-gray-200 focus:outline-2  "
                    onClick={() => routerHandler(`/Details/${el.id}`)}>
                    <div className="w-[67px] h-[100px] rounded-lg pl-2 pt-2">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                      />
                    </div>
                    <div className="flex flex-col gap-7 ">
                      <div>
                        <h4 className="font-semibold text-[20px] text-[black]">
                          {el.title}
                        </h4>
                        <div className="flex flex-row gap-1  pt-[6px] pl-[10px]">
                          <Star className="text-[#FDE047]" />
                          <p className="text-[16px] font-medium text-[black]">{`${el.vote_average}`}</p>
                          <p className="text-[#71717A] text-[14px] font-semibold">
                            /10
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row gap-10 xl:gap-70">
                        <p className="text-[16px] font-medium text-[black]">
                          {el.release_date}
                        </p>
                        <Button variant="ghost" className="text-[black]">
                          See More <ArrowRight />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <Button variant="outline" size="icon" onClick={toggleTheme}>
          {isDark ? <Sun /> : <Moon />}
        </Button>
      </div>
    </div>
  );
};
