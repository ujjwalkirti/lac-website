import Image from "next/image";
import Link from "next/link";
import React from "react";

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

export default NoticeDisplaySection;
