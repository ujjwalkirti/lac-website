import Image from "next/image";
import React from "react";

const Page3 = () => {
  return (
    <div className="lg:h-[60vh] py-5 lg:my-0 flex flex-col lg:flex-row lg:items-center">
      <div className="lg:hidden relative my-5 h-[200px] w-[200px] mx-auto shadow-xl rounded-full">
        <Image
          src={`/litfest-logo.png`}
          alt="Litfest SVNIT Logo"
          fill
          className="rounded-full"
        />
      </div>
      <div className="lg:w-3/5 ">
        <p className="lg:w-2/3 mx-auto text-justify font-[400] text-[18px] lg:text-[22px] leading-[24px] lg:leading-[32.01px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          a ad excepturi at quos est nulla voluptatem officia provident sequi
          sit voluptatum, quae corporis ipsam porro deleniti ullam molestias.
          Iusto!
        </p>
      </div>
      <div className="my-5 hidden lg:relative lg:flex h-[400px] mx-auto w-[400px] shadow-xl rounded-full">
        <Image
          src={`/litfest-logo.png`}
          alt="Litfest SVNIT Logo"
          fill
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Page3;
