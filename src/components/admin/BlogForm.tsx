import {
  adminButton,
  formats,
  inputStyle,
  libre_caslon_text,
  modules,
} from "@/utils";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  collection,
  addDoc,
  getDocs,
  query,
  onSnapshot,
} from "firebase/firestore";
import { db2 } from "@/Firebase";
import { AiOutlineDownCircle, AiOutlineUpCircle } from "react-icons/ai";
import { DotSpinner } from "@uiball/loaders";

import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import BlogDisplayBox from "./BlogDisplayBox";

//@ts-ignore
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

type post = {
  blog: Blog;
  id: string;
};

const BlogForm = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [showBlogs, setShowBlogs] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    const blogQuery = query(collection(db2, "blogs"));

    const unsubscribe = onSnapshot(blogQuery, (querySnapshot) => {
      setBlogs(
        querySnapshot.docs.map((doc) => ({ id: doc.id, blog: doc.data() }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Blog>();
  const onBlogFormSubmit: SubmitHandler<Blog> = async (data) => {
    data.content = content;
    //@ts-ignore
    data.isVerified = JSON.parse(data.isVerified);
    // @ts-ignore
    data.isFeatured = JSON.parse(data.isFeatured);

    // Add a new document with a generated id.
    // const docRef = ;
    try {
      const docRef = await addDoc(collection(db2, "blogs"), data);
      toast.success("blog added successfully!");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  async function fetchAllBlogs() {
    const querySnapshot = await getDocs(collection(db2, "blogs"));
    let localblogs: any = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      localblogs.push({ blog: doc.data(), id: doc.id });
    });
    setBlogs(localblogs);
  }

  fetchAllBlogs();

  return (
    <section className="text-[#2c1810] py-5">
      <p
        className={
          "text-center font-bold text-2xl mt-2 " + libre_caslon_text.className
        }
      >
        Add blogs
      </p>
      <form
        onSubmit={handleSubmit(onBlogFormSubmit)}
        className="flex flex-col gap-4 px-2 my-4 bg-white dark:bg-gray-300 py-6"
      >
        <input
          className={inputStyle}
          {...register("name", { required: true })}
          placeholder="Title"
        />
        {errors.name && (
          <span className="text-center text-red-500">
            This field is required
          </span>
        )}
        <input
          className={inputStyle}
          {...register("author", { required: true })}
          placeholder="Author's name"
        />
        {errors.author && (
          <span className="text-center text-red-500">
            This field is required
          </span>
        )}
        <ReactQuill
          //@ts-ignore
          value={content}
          style={{ height: "400px" }}
          className="mb-32 md:mb-16 dark:text-white dark:bg-white"
          onChange={(e: React.SetStateAction<string>) => {
            setContent(e);
          }}
          modules={modules}
          formats={formats}
        />
        {content.length === 0 && (
          <span className="text-center text-red-500">
            This field is required
          </span>
        )}
        <input
          className={inputStyle}
          {...register("designation", { required: true })}
          placeholder="Designation"
        />
        {errors.designation && (
          <span className="text-center text-red-500">
            This field is required
          </span>
        )}
        <input
          className={inputStyle}
          {...register("date", { required: true })}
          placeholder="Please enter the date and time as 11 January, 2023"
        />
        {errors.date && (
          <span className="text-center text-red-500">
            This field is required
          </span>
        )}
        <input
          className={inputStyle}
          {...register("illustration", { required: true })}
          placeholder="Illustration"
        />
        {errors.illustration && (
          <span className="text-center text-red-500">
            This field is required
          </span>
        )}
        <input
          className={inputStyle}
          {...register("about", { required: true })}
          placeholder="About"
        />
        {errors.about && (
          <span className="text-center text-red-500">
            This field is required
          </span>
        )}
        <div>
          <label htmlFor="isVerified">
            Do you want to publish the blog directly?
          </label>
          <div className="flex space-x-4 items-center" id="isVerified">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="isVerifiedTrue"
                value={"true"}
                {...register("isVerified", { required: true })}
              />
              <label htmlFor="isVerifiedTrue">Yes</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                id="isVerifiedFalse"
                type="radio"
                value={"false"}
                {...register("isVerified", { required: true })}
              />
              <label htmlFor="isVerifiedFalse">No</label>
            </div>
          </div>
          {errors.isVerified && (
            <span className="text-center text-red-500">
              This field is required
            </span>
          )}
        </div>
        <div>
          <label htmlFor="isFeatured">Is this a featured blog?</label>
          <div className="flex space-x-4 items-center" id="isFeatured">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="isFeaturedTrue"
                value={"true"}
                {...register("isFeatured", { required: true })}
              />
              <label htmlFor="isFeaturedTrue">Yes</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                id="isFeaturedFalse"
                type="radio"
                value={"false"}
                {...register("isFeatured", { required: true })}
              />
              <label htmlFor="isFeaturedFalse">No</label>
            </div>
          </div>
          {errors.isFeatured && (
            <span className="text-center text-red-500">
              This field is required
            </span>
          )}
        </div>
        <button
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-3/5 mx-auto"
          type="submit"
        >
          Create Blog
        </button>
      </form>
      <div className="my-5 px-2">
        <p className="mb-3 text-xl font-semibold">List of all the blogs:</p>
        <div className="flex flex-col items-center">
          {showBlogs &&
            blogs.length !== 0 &&
            blogs.map((post: post, index) => (
              <BlogDisplayBox id={post.id} blog={post.blog} key={index} />
            ))}
          {showBlogs && blogs.length === 0 && (
            <div>
              <DotSpinner size={40} speed={0.9} color="purple" />
            </div>
          )}
          <button
            className={"flex items-center gap-3 " + adminButton}
            onClick={() => {
              setShowBlogs(!showBlogs);
            }}
          >
            {showBlogs ? "Hide" : "Show"} All{" "}
            {showBlogs ? (
              <AiOutlineUpCircle className="text-2xl" />
            ) : (
              <AiOutlineDownCircle className="text-2xl" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogForm;
