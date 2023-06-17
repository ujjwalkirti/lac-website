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
import bgImg from "../../public/book_club.png";
import img1 from "../../public/img1.png";
import img1Dark from "../../public/img1Dark.png";
import img2 from "../../public/img2.png";
import img2Dark from "../../public/img2Dark.png";
import bgImgDark from "../../public/book_club_Dark.png";

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
    if(e.target.value.length==0){
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
    <div className="relative">
      <Image
          src={theme === 'dark' ? bgImgDark : bgImg}
          className="absolute w-screen top-0 h-[60vh] lg:h-[80vh]"
          alt="blogs image"
        />
    <div className="px-3 flex flex-col lg:w-11/12 mx-auto">
      <Head>
        <title>Book Club - LAC</title>
      </Head>
      <div className="z-20 h[60vh] lg:h-[70vh]">
        <p
        className={
          "lg:text-[70px] text-[50px] mt-10 text-center lg:text-left " + libre_caslon_text.className
        }
        >
          <FirstLetterCapital letter="LAC" bgColor="#DA8E63"/>   <FirstLetterCapital letter="B" />
          ook <FirstLetterCapital letter="C" />
          lub
        </p>

        <p className="text-center lg:text-left leading-[30px] lg:leading-[40px] lg:text-2xl text-md ">
          {/* Do you often get lost in the world of dreams setting off on adventures
          with Harry, Percy or Katniss? <br />
          Do you sometimes imagine yourself living in the enchanted land of
          Westeros or solving mysteries with Hercule Poirot?
          <br /> Do you feel mesmerized by Shakespeare's sonnets? <br />
          Or are you still new to this fantastic world of literature? <br />
          Well, don't you worry! We've got you covered. LAC has its very own
          bookclub for all passionate readers out there. <br /> */}
          <p className="bg-gradient-to-r from-transparent mx-auto px-4 lg:mx-0 via-[#D68D68] to-transparent w-fit font-medium">For all passionate readers out there.</p>
        </p>
        <div className={`relative mt-24 mb-12 lg:mb-16 lg:mt-36 lg:mx-0 mx-auto flex justify-start items-start w-fit pr-4 py-2 gap-2 font-medium rounded-r-md rounded-bl-xl ${theme === 'dark' ? "bg-transperent" : "bg-[#DA8E63]" }`}>
          <MdLocationOn className={`text-6xl absolute -left-6 -top-4 text-[#2C1810] ${theme === 'dark' ? "text-[#DA8E63]" : "text-[#2C1810]"}`} />
          <p className="pl-10">3rd floor, Central Library, SVNIT</p>
        </div>
      </div>
      <div className={`flex justify-center w-full mt-20 ${theme === 'dark' ? 'bg-transparent' : 'bg-gradient-to-r from-transparent via-transparent to-[#FDE7CA]'}`}>
        <div className={`flex items-center`}>
            <p className="ml-3 md:mx-12 lg:mx-20 text-[12px] sm:text-lg bg-transparent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eum tenetur quae ipsam nobis hic maiores consectetur<br/><br/> repellat, alias excepturi autem id tempora amet necessitatibus ipsa laboriosam cumque tempore. Inventore.</p>
            <Image src={theme === 'dark' ? img2Dark : img2} alt="Image" className="ml-8 md:ml-20 lg:ml-32 w-48 lg:w-72" />
        </div>
      </div>
      <div className={`flex justify-center w-full my-4 ${theme === 'dark' ? 'bg-transparent' : 'bg-gradient-to-l from-transparent via-transparent to-[#FDE7CA]'}`}>
        <div className={`flex items-center`}>
            <Image src={theme === 'dark' ? img1Dark : img1} alt="Image" className="ml-8 md:ml-20 lg:ml-32 w-48 lg:w-72" />
            <p className="ml-3 md:mx-12 lg:mx-20 text-[12px] sm:text-lg bg-transparent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eum tenetur quae ipsam nobis hic maiores consectetur<br/><br/> repellat, alias excepturi autem id tempora amet necessitatibus ipsa laboriosam cumque tempore. Inventore.</p>
        </div>
      </div>
      <div className="flex justify-end w-full my-5">
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
