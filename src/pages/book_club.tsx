import React from "react";
import FirstLetterCapital from "@/components/Landing Page/FirstLetterCapital";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/Firebase";
import { libre_caslon_text } from "@/utils";
import Head from "next/head";
import BookDisplayBox from "@/components/Book Club/BookDisplayBox";

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
      <p>
        Do you often get lost in the world of dreams setting off on adventures
        with Harry, Percy or Katniss? Do you sometimes imagine yourself living
        in the enchanted land of Westeros or solving mysteries with Hercule
        Poirot? Do you feel mesmerized by Shakespeare's sonnets? Or are you
        still new to this fantastic world of literature? Well, don't you worry!
        We've got you covered. LAC has its very own bookclub for all passionate
        readers out there. <br />
        Venue: 3rd floor, Central Library 
      </p>
      {books.map((book: Book, index: number) => {
        return <BookDisplayBox book={book} key={index} />;
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
