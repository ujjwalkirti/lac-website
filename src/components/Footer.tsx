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

const Footer = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  return (
    <section className="w-11/12 mx-auto flex flex-col items-center">
      <div className="h-[72px] w-[72px] relative mt-[51px]">
        <Image
          className="rounded-full"
          src={theme === "dark" ? "/logo-black.jpeg" : "/logo-white.png"}
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
          "grid grid-cols-3 gap-4 lg:grid-cols-6 lg:gap-[50px] mb-[34px] " +
          libre_caslon_text.className
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
        <Link className="hover:underline  text-center" href={`/committee`}>
          TEAM
        </Link>
        <Link className="hover:underline  text-center" href={`/contact`}>
          CONTACT
        </Link>
      </div>
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
        </div>
      </div>
    </section>
  );
};

export default Footer;
