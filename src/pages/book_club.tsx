import React from "react";
import FirstLetterCapital from "@/components/Landing Page/FirstLetterCapital";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/Firebase";
import { libre_caslon_text } from "@/utils";
import Head from "next/head";
import BookDisplayBox from "@/components/Book Club/BookDisplayBox";
import { SiTarget } from "react-icons/si";

type props = {
  books: Book[];
};

const BookClub = ({ books }: props) => {
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
      <p>
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
      <div>
        {books.map((book: Book, index: number) => {
          return <BookDisplayBox book={book} key={index} />;
        })}
      </div>
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
