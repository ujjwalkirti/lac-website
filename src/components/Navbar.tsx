import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillIeSquare, AiFillPlaySquare } from "react-icons/ai";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <section className="flex justify-between items-center mt-[32px]">
      <div className="h-[72px] w-[72px] relative">
        <Image
          className="rounded-full"
          src={theme === "dark" ? "/logo-black.jpeg" : "/logo-white.png"}
          alt="Literary Affairs Committee, SVNIT Surat logo"
          fill
        />
      </div>
      <div className="w-full flex justify-start space-x-[48px] text-[14px] leading-[17.07px]">
        <Link className="ml-[100px]" href="/events">
          EVENTS
        </Link>
        <Link href={`/blogs`}>BLOGS</Link>
        <Link href={`/about_us`}>ABOUT US</Link>
        <Link href={`/committee`}>TEAM</Link>
      </div>
      {/* Theme toggle button */}
      <div className="w-[66px] h-[34px] bg-black dark:bg-white relative flex items-center rounded-md">
        <AiFillPlaySquare
          className="text-[33px] cursor-pointer text-white dark:text-black absolute dark:right-0"
          onClick={() => {
            console.log("button clicked");
            setTheme(theme === "light" ? "dark" : "light");
          }}
        />
      </div>
    </section>
  );
};

export default Navbar;
