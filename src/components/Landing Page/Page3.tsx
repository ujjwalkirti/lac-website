import Image from "next/image";
import React from "react";

const Page3 = () => {
  return (
    <div className="h-[60vh] flex items-center">
      <div className="w-3/5 ">
        <p className="w-2/3 mx-auto text-justify font-[400] text-[22px] leading-[32.01px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          a ad excepturi at quos est nulla voluptatem officia provident sequi
          sit voluptatum, quae corporis ipsam porro deleniti ullam molestias.
          Iusto!
        </p>
      </div>
      <div className="relative h-[200px] w-2/5">
        <Image src={`/book.svg`} alt="Litfest SVNIT Logo" fill />
      </div>
    </div>
  );
};

export default Page3;
