import { libre_caslon_text, valuesOfLAC } from "@/utils";
import Image from "next/image";
import React from "react";

const ThreeValuesOfLac = () => {
  return (
    <section className="hidden lg:flex scrollbar-hide items-start gap-10  mt-[60px] lg:mt-0 overflow-x-scroll ">
      {valuesOfLAC.map((value, index) => (
        <div
          key={index}
          className="w-11/12 flex flex-col justify-between shadow-md bg-white dark:bg-[#9A7B4F] rounded-md"
        >
          <p
            className={
              "flex text-center  lg:hidden font-[700] text-[64px] leading-[78.72px] " +
              libre_caslon_text.className
            }
          >
            {value.title}
          </p>
          <div className="flex flex-col items-center justify-between gap-4">
            <Image
              src={value.img}
              height={200}
              width={200}
              alt="a cartoon of a man speaking with mic"
              className="h-[300px] lg:h-[432px] w-full object-cover rounded-t-md"
            />
            <p className="text-[15px] w-full flex lg:hidden">{value.desc}</p>
          </div>
          <div className=" h-full flex flex-col justify-center px-3">
            <p
              className={
                "hidden text-center lg:flex font-[700] text-[54px] leading-[78.72px] text-[#DA8E63] dark:text-white " +
                libre_caslon_text.className
              }
            >
              {value.title}
            </p>
            <p className="text- my-5 hidden lg:flex">{value.desc}</p>
            <div className="hidden lg:flex lg:relative h-[35vh] lg:gap-3">
              <span className="relative w-1/2 h-[240px] top-0 left-0 z-10 rounded-md">
                <div className="">
                  <Image src={value.gallery[0]} fill alt="lll" />
                </div>
              </span>
              {/* <span className="absolute w-[150px] h-[200px] top-1/2  left-1/4 z-20 bg-red-200 rounded-md"></span> */}
              <span className="relative w-1/2 h-[240px] top-0 left-0 z-10 bg-red-400 rounded-md">
                <div className="">
                  <Image src={value.gallery[1]} fill alt="lll" />
                </div>
              </span>
            </div>
            {/* similar component as above, except that it is having display set as flex */}
            <div className="lg:hidden grid grid-cols-2 px-2 gap-2 w-full">
              <span className="relative w-full h-[200px] bg-red-400 rounded-md">
                <div className="">
                  <Image src={value.gallery[0]} fill alt="lll" />
                </div>
              </span>
              <span className="relative w-full h-[200px] bg-red-200 rounded-md">
                <div className="">
                  <Image src={value.gallery[1]} fill alt="lll" />
                </div>
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ThreeValuesOfLac;
