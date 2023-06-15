import { storage2 } from "@/Firebase";
import { getDownloadURL, getMetadata, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import NoticeDisplaySection from "./NoticeDisplaySection";
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
        storage2,
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

export default NoticeCard;
