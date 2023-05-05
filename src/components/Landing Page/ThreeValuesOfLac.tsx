import { libre_caslon_text, valuesOfLAC } from "@/utils";
import Image from "next/image";

import React from "react";

import Link from "next/link";

const ThreeValuesOfLac = () => {
  return (
    <section className="hidden lg:relative lg:flex lg:flex-row items-start gap-10 z-30 mt-[60px] lg:mt-10 px-3">
      {valuesOfLAC.map((value, index) => (
        <div
          className="w-1/3 bg-white dark:bg-[#9a7b4f] shadow-lg rounded-lg hover:scale-105 transition-all transform-gpu duration-300"
          key={index}
        >
          <Image
            src={value.img}
            height={300}
            width={300}
            className="h-[300px] w-full object-cover"
            alt={`${value.title} image`}
          />
          <div className="px-2 py-1 mt-3 flex flex-col gap-4">
            <p
              className={
                "text-3xl font-semibold text-center " +
                libre_caslon_text.className
              }
            >
              {value.title}
            </p>
            <p className="text-justify">{value.desc}</p>
            <div className="w-full flex flex-col gap-2">
              {value.gallery.map((imgUrl, index) => (
                <Image
                  key={index}
                  src={imgUrl}
                  alt={`${value.title} other images`}
                  height={300}
                  width={300}
                  className=" w-full h-[300px] object-cover"
                />
              ))}
            </div>
            <Link
              className="bg-[#2c1810]text-[#f8f3ed] dark:bg-[#dfa437] px-3 py-1 rounded-lg mb-4 w-10/12 mx-auto text-center"
              href={`/events/${value.title.toLowerCase()}`}
            >
              Participate / Know-more
            </Link>
          </div>
        </div>
      ))}
      <div className="hidden">
        <button>LAC</button>
      </div>
    </section>
  );
};

export default ThreeValuesOfLac;
