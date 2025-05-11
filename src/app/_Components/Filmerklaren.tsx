import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const Filmerklaren = () => {
  return (
    <div className="w-[404px] h-[264px] flex gap-[16px] flex-col">
      <div className="h-[112px] flex flex-col">
        <h2>Now Playing:</h2>
        <p className="text-[36px] font-inter ">Wicked</p>
        <div className="w-[83px] h-[48px]">
          <img src="Star.png" />
          6.9/10
        </div>
      </div>
      <div className="w-[302px] ">
        <p>
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.
        </p>
      </div>
      <Button>
        {" "}
        <Play /> Watch Trailer
      </Button>
    </div>
  );
};
