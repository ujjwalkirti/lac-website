import { monsterrat } from "@/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  BsCalendar2EventFill,
  BsFillSunFill,
  BsMoonFill,
} from "react-icons/bs";
import { ImBlog } from "react-icons/im";
import { GiHamburgerMenu, GiSparkles } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { HiHome } from "react-icons/hi";

const options = [
  { name: "EVENTS", url: "/events" },
  { name: "BLOGS", url: "/blogs" },
  { name: "LITFEST", url: "/Litfest" },
  { name: "ABOUT US", url: "/about_us" },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  function styleBasedOnRoute({ name, url }: styleProps) {
    switch (url) {
      case "/events":
        // code block
        return (
          "flex items-center gap-2 " +
          `${!showMenu ? "ml-[60px] " : ""}` +
          `${emphasiseRoute("/events")}`
        );
      case "/blogs":
        return "flex items-center gap-2 " + `${emphasiseRoute("/blogs")}`;
      // code block
      case "/Litfest":
        return "flex items-center gap-2 " + `${emphasiseRoute("/Litfest")}`;
      case "/about_us":
        return "flex items-center gap-2 " + `${emphasiseRoute("/about_us")}`;
      default:
      // code block
    }
  }

  return (
    <section
      className={
        "flex justify-between items-center w-11/12 mx-auto pt-4 lg:pt-[12px] font-medium " +
        monsterrat.className
      }
    >
      <GiHamburgerMenu
        className="text-[32px] lg:hidden cursor-pointer"
        onClick={() => {
          setShowMenu(true);
        }}
      />
      <Link href={`/`} className="h-[82px] w-[82px] relative">
        <Image
          className="rounded-full"
          src={theme === "dark" ? "/logo-black.png" : "/logo-white.png"}
          alt="Literary Affairs Committee, SVNIT Surat logo"
          fill
        />
      </Link>{" "}
      <div
        className={
          "hidden w-full lg:flex justify-start space-x-[28px] text-[14px] leading-[17.07px] "
        }
      >
        {" "}
        {showMenu && (
          <Link className="ml-[100px] hover:underline" href={`/`}>
            HOME
          </Link>
        )}
        {options.map((option, index) => {
          if (option.url !== "/")
            return (
              <Link
                key={index}
                href={option.url}
                className={styleBasedOnRoute(option)}
              >
                {renderIconsAsPerRoute(option.url)}
                {option.name}
              </Link>
            );
        })}
      </div>
      {/* 
        .
        .
        .
        .
        This navbar component will only be  displayed when screen is below md breakpoint
        .
        .
        .
        .
        .
      */}
      {showMenu && (
        <div
          className={
            "fixed lg:hidden top-0 left-0  w-screen min-h-screen z-40 flex filter backdrop-filter backdrop-blur-sm " +
            `${showMenu ? "animate-fade-in" : ""}`
          }
        >
          <div
            className={
              "w-[40%] px-[15px] h-screen bg-[#2C1810] dark:bg-[#603726] text-white pt-10 grayish-text flex flex-col items-center"
            }
          >
            <div className="flex justify-end w-full h-1/8">
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
                <Link
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  className="flex items-center justify-center gap-2 border-b-4 border-transparent hover:border-[#fffbf7]"
                  href={`/`}
                >
                  {renderIconsAsPerRoute("/")}
                  HOME
                </Link>
              )}
              {options.map((option, index) => (
                <Link
                  href={option.url}
                  key={index}
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  className="flex items-center justify-center gap-2 border-b-4 border-transparent hover:border-[#fffbf7]"
                >
                  {renderIconsAsPerRoute(option.url)}
                  {option.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Theme toggle button */}
      <div
        className="w-[62px] lg:w-[80px] h-[30px] relative rounded-full shadow-slate-400 shadow-inner cursor-pointer"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        <span className="h-[33px] lg:h-[35px] w-[33px] lg:w-[35px] rounded-full bg-[#DA8E63] -top-0.5 absolute dark:translate-x-full transition-all transform-gpu duration-500 ease-in-out"></span>
        {theme === "light" ? (
          <span className=" absolute right-2 text-[14px] md:text-[19px] text-[#DA8E63] h-full flex items-center">
            <BsFillSunFill />
          </span>
        ) : (
          <span className=" absolute left-2 text-[14px] md:text-[19px] text-[#DA8E63] h-full flex items-center">
            <BsMoonFill />
          </span>
        )}
      </div>
    </section>
  );
};

export default Navbar;

function emphasiseRoute(url: string) {
  const router = useRouter();
  return router.asPath === url
    ? "bg-[#daaa63] px-4 rounded-full py-2 text-sm font-semibold"
    : "text-sm font-normal hover:bg-[#daaa63] rounded-full px-4 py-2 ";
}

type styleProps = {
  name: string;
  url: string;
};

function renderIconsAsPerRoute(url: String) {
  switch (url) {
    case "/events":
      return <BsCalendar2EventFill />;
    case "/blogs":
      return <ImBlog />;
    case "/about_us":
      return <RiTeamLine />;
    case "/Litfest":
      return <GiSparkles />;
    case "/":
      return <HiHome />;
  }
}
