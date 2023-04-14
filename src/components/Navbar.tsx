import { libre_caslon_text } from "@/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <section className="flex justify-between items-center w-11/12 mx-auto pt-[32px] text-[#2C1810] font-medium">
      <GiHamburgerMenu
        className="text-[32px] md:hidden cursor-pointer"
        onClick={() => {
          setShowMenu(true);
        }}
      />
      <Link href={`/`} className="h-[82px] w-[82px] relative">
        <Image
          className="rounded-full"
          src={theme === "dark" ? "/logo-black.jpeg" : "/logo-white.png"}
          alt="Literary Affairs Committee, SVNIT Surat logo"
          fill
        />
      </Link>{" "}
      <div
        className={
          "hidden w-full md:flex justify-start space-x-[48px] text-[14px] leading-[17.07px] " +
          libre_caslon_text.className
        }
      >
        {" "}
        {showMenu && (
          <Link className="ml-[100px] hover:underline" href={`/`}>
            HOME
          </Link>
        )}
        <Link
          className={"hover:underline " + `${!showMenu ? "ml-[100px]" : ""}`}
          href="/events"
        >
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
      </div>
      {/* 
        This navbar component will only be  displayed when screen is below md breakpoint
      */}
      {showMenu && (
        <div
          className={
            "absolute md:hidden top-0 left-0  w-screen min-h-screen z-40 flex filter backdrop-filter backdrop-blur-sm "
          }
        >
          <div
            className={
              "w-2/3 px-[15px] md:w-[56%] h-screen bg-[#2C1810] text-white pt-10 grayish-text flex flex-col " +
              libre_caslon_text.className
            }
          >
            <div className="flex justify-end h-1/8">
              <MdOutlineClose
                className="text-[40px] aqua cursor-pointer transition-all transform-gpu hover:rotate-180 duration-300"
                onClick={() => {
                  setShowMenu(false);
                }}
              />
            </div>
            <div className="flex flex-col gap-8 justify-center h-5/6 pb-10">
              {" "}
              {showMenu && (
                <Link className="hover:underline" href={`/`}>
                  HOME
                </Link>
              )}
              <Link className=" hover:underline" href="/events">
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
            </div>
          </div>
        </div>
      )}
      {/* Theme toggle button */}
      <div
        className="w-[62px] md:w-[86px] h-[24px] md:h-[36px] relative rounded-full shadow-slate-400 shadow-inner cursor-pointer"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        <span className="h-[30px] md:h-[40px] w-[30px] md:w-[40px] rounded-full bg-[#DA8E63] absolute -top-0.5 dark:right-0 transition-all duration-500 ease-in-out"></span>
        {theme === "light" ? (
          <span className=" absolute right-2 text-[14px] md:text-[19px] text-[#DA8E63] h-full flex items-center">
            <BsMoonFill />
          </span>
        ) : (
          <span className=" absolute left-2 text-[14px] md:text-[19px] text-[#DA8E63] h-full flex items-center">
            <BsFillSunFill />
          </span>
        )}
      </div>
    </section>
  );
};

export default Navbar;
