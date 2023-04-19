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
      <div className="flex flex-col items-center justify-between gap-4 lg:w-1/3">
        <Image
          src={`/values/speaking.png`}
          height={200}
          width={200}
          alt="a cartoon of a man speaking with mic"
          className="h-[300px] lg:h-[432px] w-full"
        />
        <p className="text-[15px] w-full flex lg:hidden">
          Oration is a powerful tool for communication and persuasion. Whether
          it's a group discussion or a formal debate, we encourage our members
          to hone their oratory skills and express their ideas with clarity and
          conviction. Join us to discover the art of effective communication and
          become a confident and persuasive orator.
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
        <p className="text- my-5 hidden lg:flex">
          In LAC, we believe that oration is a powerful tool for communication
          and persuasion. Whether it's a group discussion or a formal debate, we
          encourage our members to hone their oratory skills and express their
          ideas with clarity and conviction. Through oration, we explore diverse
          perspectives, challenge our assumptions, and develop our critical
          thinking abilities. Join us to discover the art of effective
          communication and become a confident and persuasive orator.
        </p>
        <div className="hidden lg:flex lg:relative h-[35vh] w-2/3">
          <span className="absolute w-[150px] h-[200px] top-0 left-0 z-10 bg-red-400 rounded-md"></span>
          <span className="absolute w-[150px] h-[200px] top-1/2  left-1/4 z-20 bg-red-200 rounded-md"></span>
          <span className="absolute w-[150px] h-[200px] top-1/4 right-0 bg-red-700 rounded-md"></span>
        </div>
        {/* similar component as above, except that it is having display set as flex */}
        <div className="lg:hidden grid grid-cols-2 w-screen px-2 gap-2">
          <span className="w-full h-[200px] bg-red-400 rounded-md"></span>
          <span className="w-full h-[200px] bg-red-200 rounded-md"></span>
        </div>
      </div>
    </section>
  );
};

export default ThreeValuesOfLac;
