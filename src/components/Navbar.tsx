import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillPlaySquare } from "react-icons/ai";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <section className="flex justify-between items-center w-11/12 mx-auto pt-[32px] text-[#2C1810] font-medium">
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
      <div
        className="w-[86px] h-[36px] relative rounded-full shadow-slate-400 shadow-inner cursor-pointer"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        <span className="h-[40px] w-[40px] rounded-full bg-[#DA8E63] absolute -top-0.5 dark:right-0"></span>
        {theme === "light" ? (
          <span className=" absolute right-2 text-[19px] text-[#DA8E63] h-full flex items-center">
            <BsMoonFill />
          </span>
        ) : (
          <span className=" absolute left-2 text-[19px] text-[#DA8E63] h-full flex items-center">
            <BsFillSunFill />
          </span>
        )}
      </div>
    </section>
  );
};

export default Navbar;
