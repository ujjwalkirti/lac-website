import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";

import { getDownloadURL, getMetadata, listAll, ref } from "firebase/storage";
import Link from "next/link";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { db, storage } from "@/Firebase";
import { libre_caslon_text } from "@/utils";

export async function getServerSideProps() {
  let noticeDates = [];
  const docRef = doc(db, "notice-upload-dates", "date-array");
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
              <p className="text-xl my-4">There aren't any notices as of now!</p>
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

type propsOfNoticeCard = {
  noticeDate: any;
  index: number;
};

const NoticeCard = ({ noticeDate, index }: propsOfNoticeCard) => {
  const [images, setImages] = useState([]);
  const [pdfs, setPdfs] = useState([]);
  const [showNotice, setShowNotice] = useState(false);
  const [askedForNotice, setAskedForNotice] = useState(false);

  let buttonStyle = "ml-5 text-3xl cursor-pointer hover:shadow-lg rounded-full";

  useEffect(() => {
    if (askedForNotice && pdfs.length === 0 && images.length === 0) {
      const listRef = ref(
        storage,
        `notice/${noticeDate.date}/${noticeDate.uid ? noticeDate.uid : ""}`
      );

      // Find all the prefixes and items.
      listAll(listRef)
        .then((res) => {
          res.items.forEach((itemRef) => {
            getMetadata(itemRef)
              .then((metadata) => {
                if (metadata.contentType === "application/pdf") {
                  getDownloadURL(itemRef).then((url) => {
                    // @ts-ignore
                    setPdfs((pdfs) => [...pdfs, url]);

                    // console.log(pdfUrls);
                  });
                } else if (
                  metadata.contentType === "image/png" ||
                  "image/jpg" ||
                  "image/jpeg"
                ) {
                  getDownloadURL(itemRef).then((url) => {
                    //@ts-ignore
                    setImages((images) => [...images, url]);
                    // console.log(imgUrls);
                  });
                }
              })
              .catch((error) => {
                console.log(error);
              });
          });
        })
        .catch((error) => {
          // Uh-oh, an error occurred!
          console.log(error);
        });
    }
  }, [askedForNotice]);

  return (
    <div className="shadow-lg w-11/12 lg:w-8/12 mx-auto my-2 bg-white">
      <div className="flex flex-col lg:flex-row text-black gap-x-6 my-4 bg-gradient-to-r from-gray-100 to-white">
        <div className="lg:w-2/12 bg-gradient-to-r from-indigo-300 to-purple-400 py-2 lg:py-3">
          <p className="text-center text-lg lg:text-xl text-white">
            {noticeDate.date}
          </p>
        </div>
        <div className="flex flex-col items-center lg:flex-row py-3 gap-y-3">
          <p className="text-center text-lg lg:text-xl font-semibold">
            {index + 1}
            {". "}
            {noticeDate.caption}
          </p>
          {showNotice ? (
            <BsArrowUpCircle
              onClick={() => {
                setShowNotice(!showNotice);
                setAskedForNotice(!askedForNotice);
              }}
              className={`${buttonStyle}`}
            />
          ) : (
            <BsArrowDownCircle
              onClick={() => {
                setAskedForNotice(!askedForNotice);
                setShowNotice(true);
              }}
              className={`${buttonStyle}`}
            />
          )}
        </div>
      </div>
      {showNotice && (
        <NoticeDisplaySection
          images={images}
          pdfs={pdfs}
          description={noticeDate.description ? noticeDate.description : ""}
        />
      )}
    </div>
  );
};

type NoticeDisplaySectionProps = {
  images: string[];
  pdfs: string[];
  description: string;
};

const NoticeDisplaySection = ({
  images,
  pdfs,
  description,
}: NoticeDisplaySectionProps) => {
  return (
    <div>
      <p className="md:w-4/5 md:mx-auto md:text-xl my-4 text-center px-3">
        {description}
      </p>
      <div className="lg:grid lg:grid-cols-2 lg:w-4/5 lg:mx-auto lg:gap-4">
        {images.map((url, index) => (
          <Image
            key={index}
            alt="MMNCT Notice and Announcement"
            src={url}
            height={300}
            width={500}
            className="my-4 lg:rounded-lg lg:shadow-lg mx-auto"
          />
        ))}
      </div>
      {pdfs.map((url: string, index: number) => (
        <div key={index} className="flex justify-center">
          <object
            data={url}
            className="mx-auto hidden md:flex"
            width={1000}
            height={800}
          ></object>
          <Link
            href={url}
            className="md:hidden bg-purple-600 text-white px-2 py-2 rounded-lg font-bold text-xl"
          >
            Download Notice
          </Link>
        </div>
      ))}
      {images.length === 0 && pdfs.length === 0 && (
        <div className="flex justify-center">
          <Image
            src={`/loader.gif`}
            height={300}
            width={300}
            alt="Loading gif"
          />
        </div>
      )}
    </div>
  );
};
