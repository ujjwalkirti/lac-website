import { Libre_Caslon_Text } from "next/font/google";
import Image from "next/image";
import React from "react";

const libre_caslon_text = Libre_Caslon_Text({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const ThreeValuesOfLac = () => {
  return (
    <section className="flex items-end justify-start gap-10 h-[75vh]">
      <div className="h-[432px] w-1/3 relative">
        <Image
          src={`/values/speaking.png`}
          fill
          alt="a cartoon of a man speaking with mic"
        />
      </div>
      <div className="w-1/2 h-full flex flex-col justify-evenly">
        <p
          className={
            "font-[700] text-[64px] leading-[78.72px] text-[#DA8E63] " +
            libre_caslon_text.className
          }
        >
          Speaking
        </p>
        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          atque dignissimos, ipsa architecto corporis sapiente fugit deserunt
          impedit ducimus eos molestiae ipsam reprehenderit, minima nemo esse
          magnam iure maiores. Amet.
        </p>
        <div className="relative h-[35vh] w-2/3">
          <span className="absolute w-[150px] h-[200px] top-0 left-0 z-10 bg-red-400 rounded-md"></span>
          <span className="absolute w-[150px] h-[200px] top-1/2  left-1/4 z-20 bg-red-200 rounded-md"></span>
          <span className="absolute w-[150px] h-[200px] top-1/4 right-0 bg-red-700 rounded-md"></span>
        </div>
      </div>
    </section>
  );
};

export default ThreeValuesOfLac;
