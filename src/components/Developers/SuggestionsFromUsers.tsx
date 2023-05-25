import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/Firebase";

const SuggestionsFromUsers = () => {
  const [message, setMessage] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    addDoc(collection(db, "suggestions"), {
      suggestion: message,
    })
      .then((docRef) => {
        alert("you have successfully submitted your suggestion");
        setMessage("");
      })
      .catch((e) => alert("try again"));
  };
  return (
    <div className=" dark:bg-[#9A7B4F] dark:text-white border mt-5 py-2 w-full md:w-11/12  rounded xl:w-4/5 md:px-4">
      <p className="text-center font-semibold lg:text-3xl text-2xl mb-3 ">
        Message from Developers
      </p>
      <div className="border-b-4 border-[#F4A68D] w-full md:w-3/5 lg:w-2/5 mx-auto mb-8"></div>
      <div className="px-2 text-justify lg:flex lg:items-center lg:justify-center lg:w-full lg:mx-auto lg:gap-x-8 lg:px- text-md lg:text-lg ">
        <div className="lg:w-2/4 mb-6">
          <p>
            We firmly believe that nothing is built perfect in first attempt and
            often requires iteration after iteration in order to become the
            best.
          </p>
          <p>
            Hence, if you got any suggestions to incorporate in the website,
            don't hesitate to leave your suggestions and reviews!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="lg:my-3 shadow-lg px-2 flex flex-col py-2 border w-full lg:w-2/4 lg:mx-auto rounded-lg bg-white"
        >
          <textarea
            placeholder="Write here"
            className="px-2 py-1 h-[250px] lg:h-[150px] dark:bg-white dark:text-black"
            required
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
          />
          <input
            type="submit"
            className="my-3 py-1 px-6 bg-[#9A7B4F] hover:text-[#9A7B4F] hover:bg-white border-[#9A7B4F] border text-white mx-auto font-semibold text-xl rounded-lg cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default SuggestionsFromUsers;
