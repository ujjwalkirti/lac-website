import { libre_caslon_text } from "@/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <section className="w-11/12 mx-auto flex flex-col items-center">
      <div className="h-[72px] w-[72px] relative mt-[51px]">
        <Image
          className="rounded-full"
          src={theme === "dark" ? "/logo-black.png" : "/logo-white.png"}
          alt="Literary Affairs Committee, SVNIT Surat logo"
          fill
        />
      </div>
      <p
        className={
          "lg:mt-[25px] font-[500] text-[24px] lg:text-[38px] leading-[57.6px] " +
          libre_caslon_text.className
        }
      >
        Literary Affairs Committee
      </p>
      <p className="mt-[16px] lg:w-[75vw] mb-[20px] text-[16px] lg:text-[20px] font-[400] leading-[24.38px] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ab,
        fugit beatae quia voluptatem voluptatum nesciunt doloremque excepturi
        autem, vitae tenetur veniam quos vel et id neque accusamus delectus nam.
      </p>
      <div
        className={
          "grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-[50px] mb-[34px] "
        }
      >
        <Link className="hover:underline  text-center" href={`/`}>
          HOME
        </Link>
        <Link className="hover:underline  text-center" href={`/events`}>
          EVENTS
        </Link>
        <Link className="hover:underline  text-center" href={`/blogs`}>
          BLOGS
        </Link>
        <Link className="hover:underline  text-center" href={`/about_us`}>
          ABOUT US
        </Link>
      </div>
      <Link className="hover:underline mb-4  text-center" href={`/developers`}>
        DEVELOPERS 💻
      </Link>
      <div className="flex flex-col lg:flex-row justify-between items-center mb-[20px] w-full gap-5">
        <p>CopyRight 2023 LAC, All Rights Reserved</p>
        <div className="flex space-x-8 text-[36px]">
          <Link href={`https://www.facebook.com/LACSVNIT/`}>
            <AiFillFacebook />
          </Link>
          <Link href={`https://www.instagram.com/lacsvnit/?hl=en`}>
            <AiFillInstagram />
          </Link>
          <Link
            href={`https://www.linkedin.com/company/lacsvnit/?originalSubdomain=in`}
          >
            <AiFillLinkedin />
          </Link>
          <Link href={`mailto:ujjwalkirti2000@gmail.com`}>
            <SiGmail />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
