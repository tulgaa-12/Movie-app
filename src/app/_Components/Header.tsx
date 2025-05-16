"use client";

import Image from "next/image";

import { Input } from "@/components/ui/input";

import { ChevronRight, Film, Moon, Search, Sun } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { useTheme } from "next-themes";

export const Header = () => {
  const { setTheme, theme } = useTheme();

  const isDark = theme === "dark";

  const Toggle = () => setTheme(isDark ? "light" : "dark");
  return (
    <div className="h-[59px] w-full flex justify-center items-center   ">
      <div className="h-[36px] w-full flex flex-row justify-around items-center sm:">
        <div className="flex flex-row gap-[7px]">
          <Film style={{ color: "Indigo" }} />
          <p style={{ color: "Indigo" }}>Movie Z</p>
        </div>
        <div className=" flex gap-[12px]">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Genre</NavigationMenuTrigger>
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
                        Animation <ChevronRight />
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex flex-row  items-center rounded-full h-[20px] hover:bg-[#E4E4E7] border"
                      >
                        Biography <ChevronRight />
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
                        Crime <ChevronRight />{" "}
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
                        Film-Noir <ChevronRight />{" "}
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
            className="w-[51px] sm:w-[251px] lg:w-[379px] "
          />
        </div>

        <Button variant="outline" size="icon" onClick={Toggle}>
          {isDark ? <Sun /> : <Moon />}
        </Button>
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
