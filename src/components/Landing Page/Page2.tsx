import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page2 = () => {
  return (
    <div className="flex items-center my-[169px]">
      <div className="w-3/4 flex gap-[24px]">
        <div className="h-[686px] w-1/3 px-[21px] py-[19px] border border-black dark:border-white rounded-md">
          <div className="relative h-[397px] w-1/3">
            <Image src={`/some-image.png`} alt="blog's image" fill />
          </div>
        </div>

        <div className="h-[686px] w-1/3 px-[21px] py-[19px] border border-black dark:border-white rounded-md">
          <div className="relative h-[397px] w-1/3">
            <Image src={`/some-image.png`} alt="blog's image" fill />
          </div>
        </div>
        <div className="h-[686px] w-1/3 px-[21px] py-[19px] border border-black dark:border-white rounded-md">
          <div className="relative h-[397px] w-1/3">
            <Image src={`/some-image.png`} alt="blog's image" fill />
          </div>
        </div>
      </div>
      <Image
        src={`/right.svg`}
        width={70}
        height={70}
        alt="right pointing svg"
      />
      <div className="w-1/4 flex flex-col items-start justify-between">
        <p className="font-[500] text-[96px] leading-[100px] mb-[50px]">
          Featured <br />
          Blogs
        </p>
        <p className="font-[400] text-[20px] leading-[24.38px] mb-[80px] w-[328px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          porro illo ducimus natus aliquid, quam aut incidunt esse optio
          pariatur facilis dolor est doloribus distinctio deserunt error, autem
          a fuga!
        </p>
        <Link
          className="font-medium text-[24px] leading-[29.26px]"
          href={`/blogs`}
        >
          View all
        </Link>
      </div>
    </div>
  );
};

export default Page2;
