import { valuesOfLAC } from "@/utils";
import Image from "next/image";
import React from "react";

const ThreeValuesOfLACForMobile = () => {
  return (
    <div className="flex lg:hidden overflow-x-scroll">
      {valuesOfLAC.map((value, index) => {
        return (
          <div className="relative min-h-[30vh] w-[90vw]" key={index}>
            <Image src={value.img} fill alt="Values of LAC" />
          </div>
        );
      })}
    </div>
  );
};

export default ThreeValuesOfLACForMobile;
