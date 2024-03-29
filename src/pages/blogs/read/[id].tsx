import { db2 } from "@/Firebase";
import { doc, getDoc } from "firebase/firestore";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiArrowToTop } from "react-icons/bi";
import { libre_caslon_text } from "@/local-data/Fonts";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTheme } from "next-themes";

type Props = {
  blog: Blog;
};

const SingleBlogById = ({ blog }: Props) => {
  const { theme } = useTheme();
  const divRef = React.useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    blog.content && setMounted(true);
    if (mounted) {
      const content = document.getElementById("content-of-blog");
      if (content) {
        content.innerHTML = blog.content;
      }
    }
  }, []);

  function handleClick() {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  if (!mounted) {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-center gap-x-5 h-screen px-2">
        <Head>
          <title>404: The blog was not found!</title>
        </Head>
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-red-500 my-10">
            404 - Blog Not Found
          </h1>
          <p className="text-lg my-4">
            Oops! The Blog you are looking for does not exist.
          </p>
          <button className="bg-[#DA8E63] px-2 py-1 rounded-md mx-auto my-3 lg:mt-10 flex items-center justify-center gap-4 hover:shadow-lg text-white dark:text-[#2C1810] font-bold">
            <Link href="/blogs">Go To Blogs</Link>
          </button>
        </div>
        <Image
          src={"/404-light.svg"}
          alt="SVG depicting that resource you are searching not found, 404!"
          height={400}
          width={400}
        />
      </div>
    );
  }

  return (
    <section className="min-h-[30vh] px-2 flex flex-col items-center pt-24">
      <Head>
        <title>{blog.name}</title>
      </Head>
      <p
        ref={divRef}
        className={
          "text-3xl lg:text-[60px] font-semibold text-center my-5 " +
          libre_caslon_text.className
        }
      >
        {blog.name}
      </p>
      <p className="text-center lg:text-2xl lg:my-5">"{blog.about}"</p>
      <div className="w-full lg:w-3/5 text-right my-2 lg:mb-6">
        <p className="text-lg">~ by {blog.author}</p>
        <p className="italic text-sm">({blog.designation})</p>
      </div>

      <div className="dark:bg-[#8B6134] bg-white shadow-xl w-full lg:w-3/5 lg:mx-auto px-3 overflow-x-hidden py-2 rounded-md">
        {blog && (
          <>
            <Image
              src={
                blog.illustration === " "
                  ? "https://firebasestorage.googleapis.com/v0/b/lac-website-c4a02.appspot.com/o/6192594_3125988.jpg?alt=media&token=f255e3cb-bc07-4e8a-8df7-eea5d3853158"
                  : blog.illustration
              }
              height={200}
              width={200}
              className="w-full lg:h-[400px] object-cover  mb-5 lg:mb-10"
              alt={`${blog.name} image`}
            />

            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
              id="content-of-blog"
              className=""
            ></div>
            <BsThreeDots className="text-center text-[50px] font-bold w-full" />
          </>
        )}
      </div>
      <button
        onClick={handleClick}
        className="bg-[#DA8E63] px-2 py-1 rounded-md mx-auto my-3 lg:mt-10 flex items-center justify-center gap-4 hover:shadow-lg"
      >
        Go back to top <BiArrowToTop className="text-3xl" />
      </button>
    </section>
  );
};

export default SingleBlogById;

export async function getServerSideProps(context: any) {
  let blog: any = {};
  const id = context.params.id;
  const docRef = doc(db2, "blogs", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    blog = docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
  }
  return {
    props: {
      blog,
    },
  };
}
