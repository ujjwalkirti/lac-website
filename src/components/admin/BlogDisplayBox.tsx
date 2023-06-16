import { db2 } from "@/Firebase";
import { DotSpinner, DotWave } from "@uiball/loaders";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { toast } from "react-toastify";
import TimeAgo from "react-timeago";
import Image from "next/image";
import { formats, inputStyle, modules } from "@/utils";
import dynamic from "next/dynamic";
type props = {
  blog: Blog;
  id: string;
};

//@ts-ignore
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function BlogDisplayBox({ blog, id }: props) {
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
                  await deleteDoc(doc(db2, "blogs", id));
                  toast.success("Blog Successfully deleted!");
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

export default BlogDisplayBox;
