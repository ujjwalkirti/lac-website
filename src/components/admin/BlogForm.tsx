import { adminButton, inputStyle, trimString } from "@/utils";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/Firebase";

import {
  AiOutlineDelete,
  AiOutlineDownCircle,
  AiOutlineEdit,
} from "react-icons/ai";
import Image from "next/image";
import TimeAgo from "react-timeago";

const BlogForm = () => {
  const [blogs, setBlogs] = useState([]);
  const [showBlogs, setShowBlogs] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Blog>();
  const onBlogFormSubmit: SubmitHandler<Blog> = async (data) => {
    data.date = Date.now();
    // Add a new document with a generated id.
    // const docRef = ;
    try {
      const docRef = await addDoc(collection(db, "blogs"), data);
      alert("blog added successfully!");
    } catch (error: any) {
      alert(error.message);
    }
  };

  async function fetchAllBlogs() {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    let localblogs: any = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      localblogs.push({ blog: doc.data(), id: doc.id });
    });
    setBlogs(localblogs);
  }

  return (
    <section>
      <p className="text-center font-bold text-2xl mt-2">Add blogs</p>
      <form
        onSubmit={handleSubmit(onBlogFormSubmit)}
        className="flex flex-col space-y-2 px-2"
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
        <textarea
          className={inputStyle + " h-[200px]"}
          {...register("content", { required: true })}
          placeholder="Content"
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
          {blogs.length !== 0 &&
            blogs.map((post, index) => (
              <Blog id={post.id} blog={post.blog} key={index} />
            ))}
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
            <AiOutlineDownCircle className="text-2xl" />
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
function Blog({ blog, id }: props) {
  const [showEditForm, setShowEditForm] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Blog>();
  const onEditBlogFormSubmit: SubmitHandler<Blog> = async (data) => {
    data.date = !data.date ? Date.now() : data.date;

    try {
      const updatedFields: { [key: string]: string | number } = {};

      // loop through form data and compare with defaultValues to detect changes

      Object.keys(data).forEach((key) => {
        if (data[key] !== blog[key]) {
          updatedFields[key] = data[key];
        }
      });

      // update Firestore with updatedFields object
      if (Object.keys(updatedFields).length) {
        const frankDocRef = doc(db, "blogs", id);

        // To update age and favorite color:
        await updateDoc(frankDocRef, updatedFields);
      }
      alert("blog updated successfully!");
    } catch (error: any) {
      alert(error.message + " Please try again");
    }
  };
  return (
    <div className="w-full flex flex-col justify-evenly  shadow-lg px-3 py-3 rounded-lg">
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
            <AiOutlineDelete className="text-red-500 cursor-pointer hover:shadow-lg" />
          </div>
        </div>
        <p className="text-lg">{blog.about}</p>
        <p>{blog.designation}</p>
        <p className="text-sm">{trimString(blog.content)}</p>
        <p className="text-xs text-gray-400">
          <TimeAgo date={blog.date} /> by {blog.author}
        </p>
        <div className="h-[300px] w-full relative object-contain mt-4">
          <Image src={blog.illustration || " "} fill alt="blogs image" />
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
          <textarea
            className={"h-[400px] " + inputStyle}
            {...register("content", { required: true })}
            placeholder="Content"
            defaultValue={blog.content}
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
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-3/5 mx-auto"
            type="submit"
          >
            Edit Blog
          </button>
        </form>
      )}
    </div>
  );
}
