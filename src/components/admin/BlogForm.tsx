import {
  adminButton,
  formats,
  inputStyle,
  libre_caslon_text,
  modules,
  trimString,
} from "@/utils";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  query,
  where,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {  db2 } from "@/Firebase";
import {
  AiOutlineDelete,
  AiOutlineDownCircle,
  AiOutlineEdit,
  AiOutlineUpCircle,
} from "react-icons/ai";
import Image from "next/image";
import TimeAgo from "react-timeago";
import { DotSpinner, DotWave } from "@uiball/loaders";

import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";

//@ts-ignore
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

type post = {
  blog: Blog;
  id: string;
};

const BlogForm = () => {
  const [blogs, setBlogs] = useState([]);
  const [showBlogs, setShowBlogs] = useState(false);
  const [content, setContent] = useState("");
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
              <Blog id={post.id} blog={post.blog} key={index} />
            ))}
          {showBlogs && blogs.length === 0 && (
            <div>
              <DotSpinner size={40} speed={0.9} color="purple" />
            </div>
          )}
          <button
            className={"flex items-center gap-3 " + adminButton}
            onClick={() => {
              if (blogs.length === 0) {
                fetchAllBlogs();
              }
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

type props = {
  blog: Blog;
  id: string;
};

// component which shows the already existing blogs

function Blog({ blog, id }: props) {
  const [showEditForm, setShowEditForm] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [content, setContent] = useState(blog.content);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Blog>();
  const onEditBlogFormSubmit: SubmitHandler<Blog> = async (data) => {
    data.content = content;
    console.log(data);

    // data.date = !data.date ? Date.now() : data.date;
    setFormSubmitting(true);
    try {
      const updatedFields: { [key: string]: string | number | boolean } = {};

      // loop through form data and compare with defaultValues to detect changes

      Object.keys(data).forEach((key) => {
        if (data[key] !== blog[key]) {
          updatedFields[key] = data[key];
        }
      });

      // update Firestore with updatedFields object
      if (Object.keys(updatedFields).length) {
        const frankDocRef = doc(db2, "blogs", id);

        // To update age and favorite color:
        await updateDoc(frankDocRef, updatedFields);
      }
      toast.success("blog updated successfully!");
      setShowEditForm(false);
      setFormSubmitting(false);
    } catch (error: any) {
      toast.error(error.message + " Please try again");
      setFormSubmitting(false);
    }
  };
  if (typeof blog === "undefined") {
    return (
      <div className="flex justify-center items-center my-10">
        <DotSpinner size={40} speed={0.9} color="purple" />
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col justify-evenly  shadow-lg px-3 py-3 rounded-lg my-3 bg-white dark:bg-gray-300">
      <div className="space-y-3">
        <div className="flex justify-between">
          <div className="font-semibold flex justify-center w-full text-3xl text-center">
            {blog.name}
          </div>
          <div className="flex gap-3 text-2xl">
            <AiOutlineEdit
              onClick={() => {
                setShowEditForm(true);
              }}
              className=" text-green-500 cursor-pointer hover:shadow-lg"
            />
            <AiOutlineDelete
              onClick={async () => {
                try {
                  const q = query(collection(db2, "blogs"), where("name", "==", blog.name));

                      const querySnapshot = await getDocs(q);

                      querySnapshot.forEach(async (doc) => {
                        await deleteDoc(doc.ref);
                  });
                  toast.success(
                    "Blog Successfully deleted!"
                  );
                } catch (error) {
                  if (error) {
                    toast.error("Something went wrong, please try again!");
                  }
                }
              }}
              className="text-red-500 cursor-pointer hover:shadow-lg"
            />
          </div>
        </div>
        <p className="text-lg">{blog.about}</p>
        <p>{blog.designation}</p>
        <div
          className="text-sm"
          id="blog-content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        <hr />
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-400">
            <TimeAgo date={blog.date} /> by {blog.author}
          </p>
          <p className="text-xs">
            {blog.isVerified ? "Published" : "Not Published, under review."}
          </p>
          <p className="text-xs">
            {blog.isFeatured ? "Featured" : "Not Featured."}
          </p>
        </div>
        <div className="h-[300px] w-full relative object-contain mt-4">
          <Image
            src={`${
              blog.illustration === " "
                ? "https://firebasestorage.googleapis.com/v0/b/lac-website-c4a02.appspot.com/o/6192594_3125988.jpg?alt=media&token=f255e3cb-bc07-4e8a-8df7-eea5d3853158"
                : blog.illustration
            }`}
            fill
            className="object-cover"
            alt="blogs image"
          />
        </div>
      </div>
      {showEditForm && (
        <form
          className="flex flex-col space-y-2 px-2 mt-2"
          onSubmit={handleSubmit(onEditBlogFormSubmit)}
        >
          <p className="text-center font-medium text-xl">Edit Blog</p>{" "}
          <input
            className={inputStyle}
            {...register("name", { required: true })}
            placeholder="Title"
            defaultValue={blog.name}
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
            defaultValue={blog.author}
          />
          {errors.author && (
            <span className="text-center text-red-500">
              This field is required
            </span>
          )}
          <ReactQuill
            //@ts-ignore
            value={content}
            onChange={(e: React.SetStateAction<string>) => {
              setContent(e);
            }}
            modules={modules}
            formats={formats}
          />
          <input
            hidden
            {...register("content", { required: true })}
            value={content}
          />
          {errors.content && (
            <span className="text-center text-red-500">
              This field is required
            </span>
          )}
          <input
            className={inputStyle}
            {...register("designation", { required: true })}
            placeholder="Designation"
            defaultValue={blog.designation}
          />
          {errors.designation && (
            <span className="text-center text-red-500">
              This field is required
            </span>
          )}
          <input
            className={inputStyle}
            {...register("illustration", { required: true })}
            placeholder="Illustration"
            defaultValue={blog.illustration}
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
            defaultValue={blog.about}
          />
          {errors.about && (
            <span className="text-center text-red-500">
              This field is required
            </span>
          )}
          <button
            className="shadow flex justify-center bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-3/5 mx-auto"
            type="submit"
          >
            {formSubmitting ? (
              <DotWave size={47} speed={1} color="white" />
            ) : (
              "Edit Blog"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
