import React, { useState } from "react";
import FirstLetterCapital from "@/components/Landing Page/FirstLetterCapital";
import { collection, getDocs, query, startAt, limit, orderBy } from "firebase/firestore";
import { db2 } from "@/Firebase";
import { libre_caslon_text } from "@/utils";
import Head from "next/head";
import BookDisplayBox from "@/components/Book Club/BookDisplayBox";
import { SiTarget } from "react-icons/si";

type props = {
  books: Book[];
};

const BookClub = ({ books }: props) => {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [lastbook, setLastBook] = useState(books[books.length - 1]);

  // Calculate start and end index for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get books for current page
  const [currentBooks, setCurrnetBooks] = useState(books.slice(startIndex, endIndex));

  // Function to handle page change
  const handlePageChange = async (page: number) => {
    setCurrentPage(page);
    const newBooks = await getBooks(page);
    setCurrnetBooks(newBooks);
  };

  async function getBooks(page: number) {
    const itemsPerPage = 20;
  
    const q = query(
      collection(db2, "books"),
      limit(itemsPerPage),
      orderBy("name"),
      startAt(lastbook),
    );
    
    const localbooks = await getDocs(q);
    const books: Book[] = [];
    
    localbooks.forEach((doc: { id: any; data: () => any }) => {
      books.push(doc.data());
    });

    setLastBook(books[books.length - 1]);
    
    return books;
  }

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
        {currentBooks.map((book: Book, index: number) => {
          return <BookDisplayBox book={book} key={index} />;
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-5">
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2 mr-2 text-white bg-[#2C1810] dark:bg-[#DA8E63] rounded active:scale-90 trnasition duration-300"
          >
            Previous
          </button>
        )}
        {books.length == itemsPerPage  && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-8 py-2 mr-2 text-white bg-[#2C1810] dark:bg-[#DA8E63] rounded active:scale-90 trnasition duration-300"
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
  let books: Book[] = [];
  const q = query(collection(db2, "books"), limit(20));
  const localbooks = await getDocs(q);
  localbooks.forEach((doc: { id: any; data: () => any }) => {
    books.push(doc.data());
  });

  console.log(books.length);

  return {
    props: {
      books,
    },
  };
}