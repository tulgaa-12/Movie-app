import { Film, Mail, Phone } from "lucide-react";

export const FooterContent = () => {
  //   const Parent = [
  //     {
  //       Email: "support@movieZ.com",
  //     },
  //     {
  //       Phone: "+976 (11) 123-4567",
  //     },
  //   ];
  //   Parent.map((el,index) => {

  //   })

  return (
    <div className="w-full h-[280px] flex justify-center items-center bg-[#4338CA]">
      <div className="w-full  h-[200px] flex flex-row justify-center gap-45 ">
        <div className="flex flex-col gap-3  w-[247px] text-[#FAFAFA] ">
          <h1 className="flex flex-row ">
            {" "}
            <Film /> Movie Z
          </h1>
          <p className=" font-Inter text-sm ">
            © 2024 Movie Z. All Rights Reserved.
          </p>
        </div>
        <div className="w-[913px] flex  justify-center gap-70 flex-row">
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
            <div className="flex flex-row gap-5 ">
              <p>FaceBook </p>
              <p>Instagram</p>
              <p> Twitter</p>
              <p>Youtube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
