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
          "mt-[25px] font-[500] text-[38px] leading-[57.6px] " +
          libre_caslon_text.className
        }
      >
        Literary Affairs Committee
      </p>
      <p className="mt-[16px] w-[75vw] mb-[20px] text-[20px] font-[400] leading-[24.38px] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ab,
        fugit beatae quia voluptatem voluptatum nesciunt doloremque excepturi
        autem, vitae tenetur veniam quos vel et id neque accusamus delectus nam.
      </p>
      <div
        className={
          "flex gap-[50px] items-center justify-center mb-[34px] " +
          libre_caslon_text.className
        }
      >
        <Link className="hover:underline" href={`/`}>
          HOME
        </Link>
        <Link className="hover:underline" href={`/events`}>
          EVENTS
        </Link>
        <Link className="hover:underline" href={`/blogs`}>
          BLOGS
        </Link>
        <Link className="hover:underline" href={`/about_us`}>
          ABOUT US
        </Link>
        <Link className="hover:underline" href={`/committee`}>
          TEAM
        </Link>
        <Link className="hover:underline" href={`/contact`}>
          CONTACT
        </Link>
      </div>
      <div className="flex justify-between items-center mb-[20px] w-full">
        <p>CopyRight 2023 LAC, All Rights Reserved</p>
        <div className="flex space-x-8 text-[36px]">
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillLinkedin />
        </div>
      </div>
    </section>
  );
};

export default Footer;
