import { monsterrat } from "@/local-data/Fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

type props = {
  book: Book;
};

const iconStyle = "text-3xl lg:text-xl text-yellow-400 mb-3";
const BookDisplayBox = ({ book }: props) => {
  return (
    <div
      className={
        "flex flex-col lg:flex-row lg:items-start bg-white shadow-md w-full mx-auto my-4 pr-2 lg:pr-0 lg:hover:scale-y-110 transition-transform duration-300 rounded-lg dark:bg-[#412B47] " +
        monsterrat.className
      }
    >
      {/* div for image */}

      <Image
        src={book.image}
        alt={"novel image"}
        height={300}
        width={200}
        className=" lg:rounded-l-lg object-fit mx-auto lg:h-full"
      />
      {/* genres */}

      {/* div for description and name */}
      <div className="flex flex-col justify-between h-full w-full p-6 lg:py-1 lg:px-1 ">
        <h2 className="text-3xl lg:text-xl mb-4 lg:mb-1 font-bold">
          {book.name}
        </h2>
        <h6 className="text-lg mb- lg:mb-1">{book.author}</h6>
        <div className="text-sm italic">
          {book.genres.map((genre, index) => {
            if (index < 3) {
              return (
                <span className="whitespace-pre-wrap" key={index}>
                  {genre}
                  {index !== book.genres.length - 1 ? "," : ""}{" "}
                </span>
              );
            }
          })}
        </div>
        {/* @ts-ignore */}
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
