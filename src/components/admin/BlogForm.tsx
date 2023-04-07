import { inputStyle } from "@/utils";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/Firebase";

const BlogForm = () => {
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
    </section>
  );
};

export default BlogForm;
