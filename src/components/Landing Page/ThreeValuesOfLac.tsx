import { libre_caslon_text } from "@/utils";
import Image from "next/image";
import React from "react";

const ThreeValuesOfLac = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-end  lg:justify-start gap-10 lg:h-[75vh] mt-[60px] lg:mt-0">
      <p
        className={
          "flex  lg:hidden font-[700] text-[64px] leading-[78.72px] text-[#DA8E63] " +
          libre_caslon_text.className
        }
      >
        Speaking
      </p>
      <div className="flex items-center justify-between gap-4 lg:w-1/3">
        <Image
          src={`/values/speaking.png`}
          height={200}
          width={200}
          alt="a cartoon of a man speaking with mic"
          className="h-[200px] lg:h-[432px] w-full"
        />
        <p className="text-[14px] w-1/2 flex lg:hidden">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div className="lg:w-1/2 h-full flex flex-col justify-center">
        <p
          className={
            "hidden lg:flex font-[700] text-[54px] leading-[78.72px] text-[#DA8E63] " +
            libre_caslon_text.className
          }
        >
          Speaking
        </p>
        <p className="text-xl my-5 hidden lg:flex">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          atque dignissimos, ipsa architecto corporis sapiente fugit deserunt
          impedit ducimus eos molestiae ipsam reprehenderit, minima nemo esse
          magnam iure maiores. Amet.
        </p>
        <div className="hidden lg:flex lg:relative h-[35vh] w-2/3">
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
