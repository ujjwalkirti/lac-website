import { monsterrat } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

type props = {
  book: Book;
};

const iconStyle = "text-3xl text-yellow-400 mb-3";
const BookDisplayBox = ({ book }: props) => {
  return (
    <div
      className={
        "flex flex-col lg:flex-row lg:items-start bg-white shadow-md w-full mx-auto my-4 pr-2 lg:hover:scale-y-110 transition-transform duration-300 rounded-lg dark:bg-[#603726] " +
        monsterrat.className
      }
    >
      {/* div for image */}

      <div className="relative h-full w-full">
        <Image
          src={book.image}
          alt={"novel image"}
          fill
          className=" lg:rounded-l-lg object-cover"
        />
      </div>
      {/* genres */}

      {/* div for description and name */}
      <div className="flex flex-col justify-between h-full w-full p-6 ">
        <div className="flex flex-col justify-between">
          <h2 className="text-3xl mb-4 font-bold">{book.name}</h2>
          <h6 className="text-lg mb-4">{book.author}</h6>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-2 my-4">
            {book.genres.map((genre, index) => {
              return (
                <span
                  className="bg-[#2c1810] text-white px-2 py-1 rounded-md text-center"
                  key={index}
                >
                  {genre}
                </span>
              );
            })}
          </div>
          <Rating
            initialRating={book.rating}
            start={0}
            stop={5}
            readonly
            emptySymbol={<FaRegStar className={iconStyle + " "} />}
            fullSymbol={<FaStar className={iconStyle + " "} />}
            step={1}
            fractions={100}
          />
        </div>
        <Link
          href={book.reviewLink}
          className="bg-[#2C1810] hover:bg-[#DA8E63] text-white text-center font-bold py-2 px-4 rounded"
        >
          Know More
        </Link>
      </div>
    </div>
  );
};

export default BookDisplayBox;
