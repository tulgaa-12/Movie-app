import { Film, Mail, Phone } from "lucide-react";

export const FooterContent = () => {
  const Parent = ["FaceBook", "Instagram", "Twitter", "Youtube"];

  return (
    <div className="w-full h-[308px] flex justify-center items-center bg-[#4338CA]">
      <div className="w-full  h-[228px] flex gap-[10px] flex-col justify-center  items-center  ">
        <div className="flex flex-col gap-3  w-[247px] text-[#FAFAFA] ">
          <h1 className="flex flex-row ">
            {" "}
            <Film /> Movie Z
          </h1>
          <p className=" font-Inter text-sm ">
            © 2024 Movie Z. All Rights Reserved.
          </p>
        </div>
        <div className="w-[335px] flex  justify-center  flex-row">
          <div className="w-[174px] text-[#FAFAFA] flex flex-col gap-5">
            <p>Contact Information</p>

            <p className="flex flex-row justify-center items-center gap-1 text-sm  ">
              <Mail />
              Email: support@movieZ.com
            </p>
            <p className="flex flex-row justify-center items-center gap-1 text-sm  ">
              <Phone />
              Phone: +976 (11) 123-4567
            </p>
          </div>
          <div className="flex flex-col text-[white] gap-3 text-sm ">
            <p>Follow us </p>
            <div className="flex flex-col gap-5 ">
              {Parent.map((el, index) => (
                <p key={index}>{el}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
