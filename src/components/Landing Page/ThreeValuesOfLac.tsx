import { libre_caslon_text } from "@/utils";
import Image from "next/image";
import React from "react";

const ThreeValuesOfLac = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-end  lg:justify-start gap-10 lg:h-[75vh] mt-[60px] lg:mt-0">
      <p
        className={
          "flex lg:hidden font-[700] text-[64px] leading-[78.72px] text-[#DA8E63] " +
          libre_caslon_text.className
        }
      >
        Speaking
      </p>
      <div className="h-[432px] w-2/3 lg:w-1/3 relative">
        <Image
          src={`/values/speaking.png`}
          fill
          alt="a cartoon of a man speaking with mic"
        />
      </div>
      <div className="lg:w-1/2 h-full flex flex-col justify-evenly">
        <p
          className={
            "hidden lg:flex font-[700] text-[64px] leading-[78.72px] text-[#DA8E63] " +
            libre_caslon_text.className
          }
        >
          Speaking
        </p>
        <p className="text-xl my-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          atque dignissimos, ipsa architecto corporis sapiente fugit deserunt
          impedit ducimus eos molestiae ipsam reprehenderit, minima nemo esse
          magnam iure maiores. Amet.
        </p>
        <div className="hidden lg:relative h-[35vh] w-2/3">
          <span className="absolute w-[150px] h-[200px] top-0 left-0 z-10 bg-red-400 rounded-md"></span>
          <span className="absolute w-[150px] h-[200px] top-1/2  left-1/4 z-20 bg-red-200 rounded-md"></span>
          <span className="absolute w-[150px] h-[200px] top-1/4 right-0 bg-red-700 rounded-md"></span>
        </div>
        {/* similar component as above, except that it is having display set as flex */}
        <div className="lg:hidden flex gap-3">
          <span className="w-[30vw] h-[200px] bg-red-400 rounded-md"></span>
          <span className="w-[30vw] h-[200px] bg-red-200 rounded-md"></span>
          <span className="w-[30vw] h-[200px] bg-red-700 rounded-md"></span>
        </div>
      </div>
    </section>
  );
};

export default ThreeValuesOfLac;
