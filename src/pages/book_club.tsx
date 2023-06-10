import React, { useState } from "react";
import FirstLetterCapital from "@/components/Landing Page/FirstLetterCapital";
import { collection, getDocs, query, orderBy, startAfter, limit } from "firebase/firestore";
import { db2 } from "@/Firebase";
import { libre_caslon_text } from "@/utils";
import Head from "next/head";
import BookDisplayBox from "@/components/Book Club/BookDisplayBox";
import { SiTarget } from "react-icons/si";

type Props = {
  books: Book[];
};

const BookClub = ({ books }: Props) => {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate start and end index for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get books for current page
  const currentBooks = books.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="px-3 flex flex-col lg:w-11/12 mx-auto">
      <Head>
        <title>Book Club - LAC</title>
      </Head>
      <p
        className={
          "text-[60px] my-5 text-center " + libre_caslon_text.className
        }
      >
        <FirstLetterCapital letter="B" bgColor="#DA8E63" />
        ook <FirstLetterCapital letter="C" bgColor="#DA8E63" />
        lub
      </p>
      <p className="text-center  leading-[30px] lg:leading-[40px]">
        Do you often get lost in the world of dreams setting off on adventures
        with Harry, Percy or Katniss? <br />
        Do you sometimes imagine yourself living in the enchanted land of
        Westeros or solving mysteries with Hercule Poirot?
        <br /> Do you feel mesmerized by Shakespeare's sonnets? <br />
        Or are you still new to this fantastic world of literature? <br />
        Well, don't you worry! We've got you covered. LAC has its very own
        bookclub for all passionate readers out there. <br />
      </p>
      <div className="my-10 flex  justify-center items-center lg:w-1/3 mx-auto border dark:border-white border-[#2C1810] px-3 py-2 gap-2 rounded-md">
        Venue: 3rd floor, Central Library 
        <SiTarget className="" />
      </div>

      <div className="lg:grid lg:grid-cols-2 gap-4">
        {currentBooks.map((book: Book, index: number) => (
          <BookDisplayBox book={book} key={index} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-5">
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2 mr-2 w-30 text-white bg-[#2C1810] hover:bg-[#DA8E63] rounded transtition hover:shadow-lg active:scale-90 duration-300"
          >
            Previous
          </button>
        )}
        {currentPage < Math.ceil(books.length / itemsPerPage) && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-8 py-2 mr-2 w-30 text-white bg-[#2C1810] hover:bg-[#DA8E63] dark:bg-[#DA8E63] dark:hover:bg-[#2C1810] rounded transtition hover:shadow-lg active:scale-90 duration-300"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default BookClub;

export async function getServerSideProps(context: any) {
  const q = query(collection(db2, "books"), orderBy("name"), limit(20));
  const localbooks = await getDocs(q);
  const books: Book[] = [];
  localbooks.forEach((doc) => {
    books.push(doc.data() as Book);
  });

  return {
    props: {
      books,
    },
  };
}