import Image from "next/image";
import Link from "next/link";
import React from "react";
import FirstLetterCapital from "./FirstLetterCapital";
import { libre_caslon_text } from "@/utils";

const BookClubIndicator = () => {
  return (
    <div className="flex flex-col space-y-5 relative  lg:w-10/12 h-auto py-7 px-7 rounded-md bg-[#FFE1BC]">
      <p
        className={
          "text-[#DA8E63] lg:text-center font-[400] text-[34px] lg:text-[44px] leading-[29px] lg:leading-[59.04px] " +
          libre_caslon_text.className
        }
      >
        <FirstLetterCapital letter="B" />
        ook <FirstLetterCapital letter="C" />
        lub
      </p>{" "}
      <div className="flex">
        <div className="w-[70%] lg:w-4/5">
          {" "}
          <p className="font-[400] text-[13px] lg:text-[15px] leading-[16px] lg:leading-[18.29px] text-left mb-4 lg:mb-14 lg:px-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            facere iure exercitationem assumenda aliquid accusamus blanditiis
          </p>
          <Link
            href={`/book_club`}
            className="h-[40px] lg:w-4/5 text-[13px] lg:text-[17px] font-[600] leading-[17.07px] py-[12px] px-[23px] bg-[#DA8E63] text-white rounded-md absolute lg:relative lg:flex"
          >
            Go, have a look!
          </Link>
        </div>

        <Image
          src={`/books.png`}
          height={200}
          width={200}
          alt="books piled up"
          className="absolute bottom-0 -right-4 lg:-right-20 h-[150px] w-[150px]"
        />
      </div>
    </div>
  );
};

export default BookClubIndicator;
