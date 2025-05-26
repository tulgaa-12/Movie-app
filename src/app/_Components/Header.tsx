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
interface User {
  id: string;
}

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

export const Header = ({ page, id }: { page: string; id: string }) => {
  const { setTheme, theme } = useTheme();
  const [input, setInput] = useState(false);

  const [value, setValue] = useState<string>("");
  const [results, setResults] = useState<LikeMovie[]>([]);

  const [genres, setGenres] = useState<Genre[]>([]);

  const handleClick = () => {
    setInput(true);
  };

  useEffect(() => {
    // hailtiin useEffect
    const search = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${value}&language=en-US&page=${1}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_TOKEN}`,
            },
          }
        );

        console.log(res.data.results, "all datta");
        setResults(res.data.results);
      } catch (error) {
        console.error("aldaa", error);
      }
    };
    if (id) {
      search();
    }
  }, [id]);

  useEffect(() => {
    // genre useEffect
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

  const Handlers = results.filter((el) => {
    if (
      el.title?.toLocaleLowerCase().includes(value) ||
      el.original_title.toLocaleLowerCase().includes(value)
    ) {
      return el;
    }
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  console.log(value);
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
                          <Link key={index} href={`/Genre/${el.id}`}>
                            <div className="flex flex-row ">
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
              onChange={handleChange}
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
        {Handlers.map((el, index) => {
          return (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
                alt={el.original_title}
              />
              <AllSearch id={id} />
            </div>
          );
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

// "use client";

// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import axios from "axios";
// import { Film, Moon, Sun, Search, ChevronRight } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";

// type LikeMovie = {
//   backdrop_path: string;
//   id: number;
//   title: string;
//   original_title: string;
// };

// type Genre = {
//   name: string;
//   id: number;
// };

// const API_TOKEN = process.env.NEXT_PUBLIC_TMDB_API_TOKEN; // <-- Use .env securely

// export const Header = () => {
//   const { setTheme, theme } = useTheme();
//   const isDark = theme === "dark";
//   const router = useRouter();

//   const [inputVisible, setInputVisible] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [results, setResults] = useState<LikeMovie[]>([]);
//   const [genres, setGenres] = useState<Genre[]>([]);

//   const toggleTheme = () => setTheme(isDark ? "light" : "dark");

//   // Fetch genres once
//   useEffect(() => {
//     const fetchGenres = async () => {
//       try {
//         const res = await axios.get(
//           "https://api.themoviedb.org/3/genre/movie/list?language=en",
//           {
//             headers: {
//               Authorization: `Bearer ${API_TOKEN}`,
//             },
//           }
//         );
//         setGenres(res.data.genres);
//       } catch (error) {
//         console.error("Failed to load genres", error);
//       }
//     };
//     fetchGenres();
//   }, []);

//   // Search movies based on searchTerm
//   useEffect(() => {
//     const fetchSearch = async () => {
//       if (!searchTerm.trim()) return;

//       try {
//         const res = await axios.get(
//           `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&language=en-US&page=1`,
//           {
//             headers: {
//               Authorization: `Bearer ${API_TOKEN}`,
//             },
//           }
//         );
//         setResults(res.data.results);
//       } catch (error) {
//         console.error("Search failed", error);
//       }
//     };

//     const debounce = setTimeout(fetchSearch, 500); // debounce
//     return () => clearTimeout(debounce);
//   }, [searchTerm]);

//   const filteredResults = results.filter(
//     (movie) =>
//       movie.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       movie.original_title?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <header className="h-[59px] w-full flex flex-col items-center">
//       <div className="w-full flex justify-between items-center px-4 py-2">
//         <div className="flex items-center gap-2">
//           <Film className="text-indigo-600" />
//           <p className="text-indigo-600 font-semibold">Movie Z</p>
//         </div>

//         {inputVisible && (
//           <div className="flex items-center gap-4 w-full max-w-xl">
//             <NavigationMenu>
//               <NavigationMenuList>
//                 <NavigationMenuItem>
//                   <NavigationMenuTrigger>Genres</NavigationMenuTrigger>
//                   <NavigationMenuContent className="grid grid-cols-3 gap-2 p-4 max-h-[300px] overflow-y-auto">
//                     {genres.map((genre) => (
//                       <Link key={genre.id} href={`/Genre/${genre.id}`}>
//                         <Badge
//                           variant="outline"
//                           className="flex items-center gap-1 rounded-full"
//                         >
//                           {genre.name} <ChevronRight size={14} />
//                         </Badge>
//                       </Link>
//                     ))}
//                   </NavigationMenuContent>
//                 </NavigationMenuItem>
//               </NavigationMenuList>
//             </NavigationMenu>

//             <Input
//               placeholder="Search..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full"
//             />
//           </div>
//         )}

//         {!inputVisible && (
//           <Button onClick={() => setInputVisible(true)} variant="ghost">
//             <Search />
//           </Button>
//         )}

//         <Button
//           onClick={toggleTheme}
//           variant="outline"
//           size="icon"
//           aria-label="Toggle theme"
//         >
//           {isDark ? <Sun /> : <Moon />}
//         </Button>
//       </div>

//       {searchTerm && filteredResults.length > 0 && (
//         <div className="w-full flex overflow-x-auto gap-4 p-4 bg-gray-50 dark:bg-gray-900">
//           {filteredResults.map((movie) => (
//             <div key={movie.id} className="w-[200px] flex-shrink-0">
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
//                 alt={movie.original_title}
//                 className="rounded shadow"
//               />
//               <p className="text-sm mt-2 text-center">{movie.title}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// };
