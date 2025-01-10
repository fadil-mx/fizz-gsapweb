import React from "react";
import { FizziLogo } from "./Fizzylogo";
import CircleText from "./CircleTxt";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="min-h-screen w-full">
      <div className="min-h-screen w-full bg-[#FE6334] overflow-hidden text-[#FEE832]">
        <h2 className="uppercase w-full text-center font-black py-10 leading-none ">
          <div className="text-[32vw]">soda</div>
          <div className="grid gap-[3vw] text-[32vw] md:flex md:text-[10vw] justify-center">
            <span className="inline-block">that</span>
            <span className="inline-block max-md:text-[27vw]">makes</span>
            <span className="inline-block max-md:text-[40vw]">you</span>
          </div>
          <div className="text-[30vw]">smile</div>
        </h2>
      </div>
      <div className=" relative">
        <div className="flex py-6 justify-center  ">
          <FizziLogo className="h-20 text-[#FE6334] z-10 cursor-pointer" />
        </div>
        <div className="size-32 absolute -top-16 right-14">
          <CircleText />
        </div>
      </div>
    </div>
  );
};

export default Footer;
