import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const Filmerklaren = () => {
  return (
    <div className="w-[404px] h-[264px] flex gap-[16px] flex-col">
      <Button>
        {" "}
        <Play /> Watch Trailer
      </Button>
    </div>
  );
};
