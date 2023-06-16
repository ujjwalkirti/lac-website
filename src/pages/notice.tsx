import Head from "next/head";
import React from "react";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";

import { db2 } from "@/Firebase";
import NoticeCard from "@/components/Notice/NoticeCard";
import { GetServerSidePropsContext } from "next";
import { libre_caslon_text } from "@/local-data/Fonts";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let noticeDates = [];
  const docRef = doc(db2, "notice-upload-dates", "date-array");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    noticeDates = docSnap.data().dates;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

  return {
    props: {
      noticeDates,
    },
  };
}

type props = {
  noticeDates: any[];
};

export default function Notice({ noticeDates }: props) {
  return (
    <div>
      <Head>
        <title>Notice and Announcements</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen">
        <div className=" mb-4">
          <p
            className={
              "text-center lg:text-4xl text-3xl font-bold py-10 px-2 " +
              libre_caslon_text.className
            }
          >
            Notice and Announcements
          </p>
        </div>
        {[...noticeDates].reverse().map((noticeDate, index) => {
          return (
            <NoticeCard key={index} noticeDate={noticeDate} index={index} />
          );
        })}
        <div>
          {noticeDates.length === 0 && (
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl my-4">
                There aren't any notices as of now!
              </p>
              <Image
                src="/waiting.jpg"
                height={300}
                width={300}
                alt="No notices from LAC!"
                className="rounded-full"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
