import Image from "next/image";
import React from "react";
import FirstLetterCapital from "@/components/Landing Page/FirstLetterCapital";
import { local_books } from "@/local-data/Books";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/Firebase";
import { libre_caslon_text } from "@/utils";
import Link from "next/link";
import Head from "next/head";

type props = {
  books: Book[];
};

const BookClub = ({ books }: props) => {
  return (
    <div className="px-3 flex flex-col ">
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
      {books.map((book: Book, index: number) => {
        return (
          <div className="flex flex-col lg:flex-row items-center bg-white shadow-md w-full lg:w-[70vw] mx-auto my-4 lg:hover:scale-110 transition-transform duration-300 rounded-lg dark:bg-[#603726] ">
            {/* div for image */}

            <div className="relative h-[50vh] w-full">
              <Image
                src={
                  "https://imgs.search.brave.com/Wigg6Klx55WOPadgxWxb3lVEnGvKZOIxY7ibjlVKvTo/rs:fit:465:250:1/g:ce/aHR0cHM6Ly9idXR0/ZXJjbXMuY29tL3N0/YXRpYy9pbWFnZXMv/dGVjaF9iYW5uZXJz/L05leHRqcy5iOGE3/MTczMjJjMDgucG5n"
                }
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
              <div className="text-lg">
                {book.genre.map((genre, index) => {
                  return <span className="mr-2 bg-gray-200 px-1 py-1 rounded-md" key={index}>{genre}</span>;
                })}
              </div>
              <h5 className="text-lg mb-4">{book.rating}</h5>
              <Link
                href={book.reviewLink}
                className="bg-[#2C1810] hover:bg-[#DA8E63] text-white font-bold py-2 px-4 rounded"
              >
                Know More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookClub;

export async function getServerSideProps(context: any) {
  let books: any[] = [];
  const q = query(collection(db, "books"));
  const localbooks = await getDocs(q);
  localbooks.forEach((doc: { id: any; data: () => any }) => {
    books.push(doc.data());
  });

  return {
    props: {
      books,
    },
  };
}
