import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page3 = () => {
  return (
    <div className="lg:min-h-[50vh] py-5 lg:my-0 flex flex-col lg:flex-row lg:items-center">
      <div className="lg:hidden relative my-5 h-[200px] w-full mx-auto shadow-xl rounded-md">
        <Image
          src={`/litfest-logo.jpg`}
          alt="Litfest SVNIT Logo"
          fill
          className="rounded-md"
        />
      </div>
      <div className="lg:w-3/5 ">
        <p className="lg:w-2/3 mx-auto text-left font-[400] text-[18px] lg:text-[22px] leading-[24px] lg:leading-[32.01px]">
          A vision that our seniors saw and our juniors witnessed, an aspiration
          of the club, a reality that thousands enjoyed, LITFEST'23 came into
          being on the 14th and 15th of October 2022.
        </p>
      </div>
      <div className="my-5 hidden lg:relative lg:flex h-[300px] mx-auto w-[400px] shadow-xl rounded-md">
        <Image
          src={`/litfest-logo.jpg`}
          alt="Litfest SVNIT Logo"
          fill
          className="rounded-md"
        />
      </div>
      
    </div>
  );
};

export default Page3;
