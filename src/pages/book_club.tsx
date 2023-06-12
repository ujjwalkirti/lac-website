import React, { ChangeEvent, useEffect, useState } from "react";
import FirstLetterCapital from "@/components/Landing Page/FirstLetterCapital";
import { collection, getDocs, query, limit, orderBy, where } from "firebase/firestore";
import { db2 } from "@/Firebase";
import { getBooks, libre_caslon_text } from "@/utils";
import Head from "next/head";
import BookDisplayBox from "@/components/Book Club/BookDisplayBox";
import { SiTarget } from "react-icons/si";
import { LineWobble } from "@uiball/loaders";
import { useTheme } from "next-themes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsSearch,
} from "react-icons/bs";
import { set } from "react-hook-form";

type props = {
  serverbooks: Book[];
};

const BookClub = ({ serverbooks }: props) => {
  const { theme } = useTheme();

  const [books, setBooks] = useState([[], serverbooks]);
  const [searchedBooks, setSearchedBooks] = useState<Book[]>([]);
  const [searchStatus, setSearchStatus] = useState("not started");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    typeof books[currentPage] === "undefined" && fetchBooks();
  }, [currentPage]);

  const fetchBooks = async () => {
    try {
      const lastBook =
        books[currentPage - 1][books[currentPage - 1].length - 1];
      const response = await getBooks(lastBook.name, currentPage);
      //@ts-ignore
      setBooks([...books, response]);
    } catch (error) {
      toast.error("Error fetching books.");
    }
  };

  const findBooks = async (book: String) => {
    try {
      const string = book.split(" ");
      string.forEach((word, index) => {
        string[index] = word.charAt(0).toUpperCase() + word.slice(1);
        book = string.join(" ");
      });
      const q = query(collection(db2, "books"), where("name", "==", book));
      const querySnapshot = await getDocs(q);
      const books: Book[] = [];
      querySnapshot.forEach((doc) => {
        books.push(doc.data() as Book);
        setSearchedBooks((prev:any)=>[...prev,doc.data()]);
      });

      if(books.length){
        setSearchStatus("searched");
      }
    } catch (error) {
      toast.error("Error finding books.");
    }
  }

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setSearchStatus("searching");
    findBooks(e.target.value);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
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
      <div className="flex justify-end w-full mb-5">
        <div className="bg-white text-black flex items-center w-full lg:w-2/5 px-2 py-1 rounded-md">
          <BsSearch className="text-gray-500" />
          <input
            type="text"
            onChange={handleSearch}
            value={searchQuery}
            placeholder="Search books"
            className="bg-white  px-2 py-1 rounded-md outline-none w-full"
          />
        </div>
      </div>

      {/* searched books */}
      {searchStatus === "searching" ? (
        <div className="flex justify-center items-center my-8">
          <LineWobble
            size={80}
            lineWeight={5}
            speed={1.75}
            color={theme === "dark" ? "white" : "black"}
          />
        </div>
      ) : (
        <div className="lg:grid lg:grid-cols-2 gap-4">
          {searchedBooks.map((book: Book, index: number) => {
            if (book.name.length !== 0) {
              return <BookDisplayBox book={book} key={index} />;
            }
          })}
        </div>
      )}

      {searchedBooks.length === 0 && (
        <div className="lg:grid lg:grid-cols-2 gap-4">
          {books[currentPage] &&
            books[currentPage].map((book: Book, index: number) => {
              if (currentPage === 1 && book.name.length !== 0) {
                return <BookDisplayBox book={book} key={index} />;
              } else if (
                currentPage !== 1 &&
                index !== 0 &&
                book.name.length !== 0
              ) {
                return <BookDisplayBox book={book} key={index} />;
              }
            })}
        </div>
      )}

      {/* Pagination */}
      {searchedBooks.length == 0 && searchStatus != "searthing" && <div className="flex justify-center mt-5">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`flex items-center justify-center gap-2 px-4 py-2 mr-2 text-white bg-[#2C1810] dark:bg-[#DA8E63] rounded active:scale-90 trnasition duration-300 ${
            currentPage === 1 ? "cursor-not-allowed" : ""
          }`}
        >
          <BsChevronDoubleLeft /> Previous
        </button>

        <button
          onClick={handleNextPage}
          className={`flex items-center justify-center gap-2 px-8 py-2 mr-2 text-white bg-[#2C1810] dark:bg-[#DA8E63] rounded active:scale-90 trnasition duration-300 ${
            typeof books[currentPage] !== "undefined" &&
            books[currentPage].length < 20
              ? "cursor-not-allowed"
              : ""
          }`}
          disabled={
            typeof books[currentPage] !== "undefined" &&
            books[currentPage].length < 20
          }
        >
          Next <BsChevronDoubleRight />
        </button>
      </div>}
      <ToastContainer />
    </div>
  );
};

export default BookClub;

export async function getServerSideProps(context: any) {
  let serverbooks: Book[] = [];
  const q = query(collection(db2, "books"), orderBy("name"), limit(20));
  const localbooks = await getDocs(q);
  localbooks.forEach((doc: { id: any; data: () => any }) => {
    serverbooks.push(doc.data());
  });

  return {
    props: {
      serverbooks,
    },
  };
}
