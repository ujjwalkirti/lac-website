import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillCiCircle, AiOutlineArrowRight } from "react-icons/ai";
import RecentEventDialogueBox from "./RecentEventDialogueBox";

const Page1 = () => {
  return (
    <div className="mt-[69px]">
      <p className=" font-[500] text-[96px] leading-[115.2px]">
        Literary Affairs Committee
      </p>
      <p className="font-[400] text-[20px] leading-[24.38px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        repudiandae ab nam molestias officiis mollitia voluptate illo nemo
        tenetur, nihil, vero odio sapiente, dolorum quidem itaque optio magnam
        debitis atque!
      </p>
      <div className="flex items-end mt-[39px]">
        <div className="flex flex-col w-[30%] h-[517px] justify-between">
          <div className="flex flex-col w-[75%] h-[70%]  mx-auto pb-4 items-center justify-between border border-black dark:border-white rounded-md px-8">
            {" "}
            <Image
              src={`/book.svg`}
              alt="Book svg"
              height={200}
              width={200}
              className="w-[140px] h-[108.18px] mx-auto"
            />
            <p className="font-[400] text-[16px] leading-[21.01px] text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
              facere iure exercitationem assumenda aliquid accusamus blanditiis,
              id saepe? Corrupti magni illo non deserunt ut consequatur quae
              dolore expedita itaque. Iusto.
            </p>
            <Link
              href={`/book_club`}
              className="h-[40px] w-[137px] text-[14px] font-[600] leading-[17.07px] py-[12px] px-[23px] bg-gray-400"
            >
              BOOK CLUB
            </Link>
          </div>
          <div className="text-[96px] font-[400] leading-[115.2px]  mx-auto">
            <p className="flex justify-end items-center">
              Events{" "}
              <Image
                src={`/right-arrow.svg`}
                height={100}
                width={80}
                alt="right pointing svg"
              />
            </p>
          </div>
        </div>
        <div className="w-[70%] flex justify-between gap-[40px] ml-[66px]">
          <RecentEventDialogueBox isFirst={true} isLast={false} />
          <RecentEventDialogueBox isFirst={false} isLast={false} />
          <RecentEventDialogueBox isFirst={false} isLast={true} />
        </div>
      </div>
      <div className="font-[600] text-[24px] leading-[29.26px] text-end my-4">
        <Link href={`/events`}>View all</Link>
      </div>
    </div>
  );
};

export default Page1;
