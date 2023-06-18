import React, { ChangeEvent, useEffect, useState } from "react";
import FirstLetterCapital from "@/components/Landing Page/FirstLetterCapital";
import {
  collection,
  getDocs,
  query,
  limit,
  orderBy,
  where,
} from "firebase/firestore";
import { db2 } from "@/Firebase";
import { getBooks } from "@/utils";
import Head from "next/head";
import BookDisplayBox from "@/components/Book Club/BookDisplayBox";
import { LineWobble } from "@uiball/loaders";
import { useTheme } from "next-themes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsSearch,
} from "react-icons/bs";
import { libre_caslon_text } from "@/local-data/Fonts";
import { GetServerSidePropsContext } from "next";
import { MdLocationOn } from "react-icons/md";
import Image from "next/image";

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

  const [widthOfScreen, setWidthOfScreen] = useState(window.innerWidth);

  useEffect(() => {
    typeof books[currentPage] === "undefined" && fetchBooks();
  }, [currentPage]);

  useEffect(() => {
    setWidthOfScreen(window.innerWidth);
  }, []);

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
        setSearchedBooks((prev: any) => [...prev, doc.data()]);
      });

      if (books.length) {
        setSearchStatus("searched");
      }
    } catch (error) {
      toast.error("Error finding books.");
    }
  };

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value.length == 0) {
      setSearchStatus("not started");
      return;
    }
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
    <div className="bg-[#F8F3ED] dark:bg-[#26102c]">
      <Head>
        <title>Book Club - LAC</title>
      </Head>
      <div className="flex flex-col mx-auto">
        <div
          className=" h-[60vh] lg:h-[70vh] relative"
          style={{
            backgroundImage: `url(${
              theme === "dark" ? "/book_club_Dark.png" : "/book_club.png"
            })`,
            backgroundOrigin: "content-box",
            backgroundPosition: "left center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* gradient  div */}
          {theme === "light" && (
            <div className="absolute top-0 h-full w-full book-club-gradient z-0"></div>
          )}
          {/* text content */}
          <section className=" lg:w-11/12 lg:mx-auto relative px-3">
            <p
              className={
                `lg:text-[88px] text-4xl leading-[55px] mt-10 pt-[82px] pb-[11px] text-center lg:text-left ` +
                libre_caslon_text.className
              }
            >
              <span className=" text-[#B86D43]">
                <FirstLetterCapital letter="LAC" />
              </span>{" "}
              <FirstLetterCapital letter="B" />
              ook <FirstLetterCapital letter="C" />
              lub
            </p>

            <p className="book-club-text-gradient text-xl lg:text-[32px] leading-[24.38px] w-fit  font-medium mx-auto px-4 mt-5 lg:mx-0">
              For all Passionate
              <br className="lg:hidden" /> readers out there.
            </p>
            <div
              className={`relative mt-24 mb-12 lg:mb-16 lg:mt-36 lg:mx-5 mx-auto flex justify-start items-start w-fit lg:w-[385px] lg:h-[42px] pr-4 py-2 gap-2 font-medium rounded-r-md rounded-bl-xl text-[18px] ${
                theme === "dark" ? "bg-transperent" : "bg-[#DA8E63]"
              }`}
            >
              <MdLocationOn
                className={`text-6xl absolute -left-6 -top-4 text-[#2C1810] ${
                  theme === "dark" ? "text-[#DA8E63]" : "text-[#2C1810]"
                }`}
              />
              <p className="pl-10">3rd floor, Central Library, SVNIT</p>
            </div>
          </section>
        </div>

        {/* ---------------------------------------------------------------------- */}

        <div className="">
          <p className="mt-12 text-center px-2 lg:hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            eum tenetur quae ipsam nobis hic maiores consectetur
          </p>
          <div
            className={`flex justify-between items-center w-full mt-6 relative`}
          >
            {theme === "light" && (
              <div className="book-club-image-gradient-left absolute top-0 left-0 h-full w-[87%] z-10"></div>
            )}
            <Image
              src={theme === "dark" ? "/img2Dark.png" : "/img2.png"}
              alt="Image"
              height={300}
              width={300}
              className={`z-20 md:ml-20 lg:ml-32 lg:w-72 w-56 ml-2 rounded-full ${
                theme === "dark" ? "h-64 w-64 rounded-full -ml-6" : "w-48"
              }`}
            />
            <div className="z-20 pr-2 ml-3 md:mx-12 lg:mx-20 lg:text-[23px] sm:text-lg bg-transparent">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus eum tenetur quae ipsam nobis hic maiores consectetur
              </p>
              <p className="">
                <br /> repellat, alias excepturi autem id tempora amet
                necessitatibus ipsa laboriosam cumque tempore. Inventore.
              </p>
            </div>
          </div>

          {/* ---------------------------------------------------------------------- */}

          <div
            className={`flex justify-center items-center w-full mt-6 relative dark:overflow-x-hidden`}
          >
            {theme === "light" && (
              <div className="book-club-image-gradient-right absolute top-0 right-0 h-full w-[87%] z-10"></div>
            )}
            <p className="z-20 pl-2 mr-1 ml-8 md:mx-12 lg:mx-20 lg:text-[23px] sm:text-lg bg-transparent">
              repellat, alias excepturi autem id tempora amet necessitatibus
              ipsa laboriosam cumque tempore. Inventore.
            </p>
            <Image
              src={theme === "dark" ? "/img1Dark.png" : "/img1.png"}
              alt="Image"
              height={300}
              width={300}
              className={`z-20 w-56 mr-3 sm:mr-0 md:ml-20 lg:ml-32 lg:w-72  ${
                theme === "dark"
                  ? "h-72 w-72 rounded-full -mr-12 lg:mr-12"
                  : "w-48"
              }`}
            />
          </div>
          <p className="text-center px-2 pt-10 text-[20px] mb-[55px]">
            Well, don’t you worry! We’ve got you covered. LAC has it’s very own
            book club for all the passionate readers out there.
          </p>

          {/* -------------------------------------------------------------------- */}

          <div className="flex justify-end w-full my-5 px-2">
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
        </div>

        {/* ---------------------------------------------------------------------- */}

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
          <div className="lg:w-4/5 lg:mx-auto sm:grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
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
        {searchedBooks.length == 0 && searchStatus != "searthing" && (
          <div className="flex justify-center mt-5">
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
          </div>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default BookClub;

export async function getServerSideProps(context: GetServerSidePropsContext) {
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
