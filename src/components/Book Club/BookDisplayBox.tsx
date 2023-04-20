import { monsterrat } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type props = {
  book: Book;
};

const BookDisplayBox = ({ book }: props) => {
  return (
    <div
      className={
        "flex flex-col lg:flex-row items-center bg-white shadow-md w-full lg:w-[70vw] mx-auto my-4 lg:hover:scale-110 transition-transform duration-300 rounded-lg dark:bg-[#603726] " +
        monsterrat.className
      }
    >
      {/* div for image */}

      <div className="relative h-[50vh] w-full">
        <Image
          src={book.image}
          alt={"novel image"}
          fill
          className="rounded-t-lg lg:rounded-l-lg"
        />
      </div>
      {/* image */}

      {/* div for description and name */}
      <div className="w-full lg:w-2/3 p-6 ">
        <h2 className="text-3xl mb-4">{book.name}</h2>
        <h6 className="text-lg mb-4">{book.author}</h6>
        <h5 className="text-lg mb-4">{book.rating}/5</h5>
        <Link
          href={book.reviewLink}
          className="bg-[#2C1810] hover:bg-[#DA8E63] text-white font-bold py-2 px-4 rounded"
        >
          Know More
        </Link>
      </div>
    </div>
  );
};

export default BookDisplayBox;
