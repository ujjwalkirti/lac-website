import Image from "next/image";
import React from "react";

const Page3 = () => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, a
        ad excepturi at quos est nulla voluptatem officia provident sequi sit
        voluptatum, quae corporis ipsam porro deleniti ullam molestias. Iusto!
      </p>
      <div className="relative h-10 w-10">
        <Image
          src={`/some-image.svg`}
          alt="Some image that I don't know yet"
          fill
        />
      </div>
    </div>
  );
};

export default Page3;
