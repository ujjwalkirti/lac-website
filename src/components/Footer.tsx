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
    <div>
      <div className="h-[72px] w-[72px] relative">
        <Image
          className="rounded-full"
          src={theme === "dark" ? "/logo-black.jpeg" : "/logo-white.png"}
          alt="Literary Affairs Committee, SVNIT Surat logo"
          fill
        />
      </div>
      <p>Literary Affairs Committee</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ab,
        fugit beatae quia voluptatem voluptatum nesciunt doloremque excepturi
        autem, vitae tenetur veniam quos vel et id neque accusamus delectus nam.
      </p>
      <div>
        <Link href={`/`}>HOME</Link>
        <Link href={`/events`}>EVENTS</Link>
        <Link href={`/blogs`}>BLOGS</Link>
        <Link href={`/about_us`}>ABOUT US</Link>
        <Link href={`/committee`}>TEAM</Link>
        <Link href={`/contact`}>CONTACT</Link>
      </div>
      <div>
        <p>CopyRight 2023 LAC, All Rights Reserved</p>
        <div>
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
