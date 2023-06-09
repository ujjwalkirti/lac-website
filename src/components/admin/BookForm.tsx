import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import BookDisplayBox from "../Book Club/BookDisplayBox";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db2, storage2 } from "@/Firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { ImBooks } from "react-icons/im";
import { AiTwotoneDelete } from "react-icons/ai";
import { adminButton, inputStyle } from "@/local-data/StyleStrings";

const BookForm = () => {
  const name = useRef<HTMLInputElement | null>(null);
  const author = useRef<HTMLInputElement | null>(null);
  const reviewLink = useRef<HTMLInputElement | null>(null);
  const genres = useRef<HTMLInputElement | null>(null);

  const [books, setBooks] = useState<any[]>([]);
  const [showBooks, setShowBooks] = useState<boolean>(false);
  const [rating, setRating] = useState<number | "">("");
  const [imageFile, setImageFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("");
  /*
    name
    author
    reviewLink
    rating
    genres
    image

  */
  useEffect(() => {
    const bookQuery = query(collection(db2, "books"));

    const unsubscribe = onSnapshot(bookQuery, (querySnapshot) => {
      setBooks(
        querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    handleUpload();
  };
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value; // Get the input value
    const parsedValue = parseFloat(inputValue);
    if (parsedValue >= 0 && parsedValue < 5) {
      setRating(parsedValue); // Update the state with the valid input value
    } else {
      toast.error(
        "Rating value is out of 5 only, please enter a suitable value."
      );
    }
  };

  const handleUpload = () => {
    if (imageFile && typeof rating === "number" && rating >= 0 && rating < 5) {
      //@ts-ignore
      const imageRef = ref(storage2, `books/${imageFile.name}`);
      const uploadTask = uploadBytesResumable(imageRef, imageFile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded

          setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          switch (snapshot.state) {
            case "paused":
              setUploadStatus("Upload is paused");
              break;
            case "running":
              setUploadStatus("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          toast.error(
            "Sorry something wet wrong, Please try again. Reason:" +
              error.message
          );
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            const genreString = genres.current?.value || "";
            const splitWords = genreString.split(",");
            let localGenres = [];
            // Looping over the words
            for (let i = 0; i < splitWords.length; i++) {
              const word = splitWords[i].trim(); // Remove leading/trailing spaces
              localGenres.push(word);
            }
            const data = {
              name: name.current?.value || "",
              author: author.current?.value || "",
              reviewLink: reviewLink.current?.value || "",
              rating: rating,
              genres: localGenres,
              image: downloadURL,
            };
            const docRef = await addDoc(collection(db2, "books"), data);
            toast.success("Book added successfully! LAC for the win! ✌️");
            if (author.current) {
              author.current.value = "";
            }
            if (name.current) {
              name.current.value = "";
            }
            if (reviewLink.current) {
              reviewLink.current.value = "";
            }
            if (genres.current) {
              genres.current.value = "";
            }
            setRating(0);
            setProgress(0);
            setUploadStatus("");
          });
        }
      );
    } else {
      toast.error("Rating doesnot have a valid value");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-3">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-start space-y-3 w-full mb-5 px-2 py-2 bg-white dark:bg-gray-300 text-black"
      >
        <p className="font-semibold text-3xl flex items-center gap-3">
          Add Books <ImBooks />
        </p>
        <input
          type="text"
          className={inputStyle}
          placeholder="name of the book"
          required
          ref={name}
        />
        <input
          type="text"
          placeholder="author of the book"
          required
          className={inputStyle}
          ref={author}
        />
        <input
          type="text"
          placeholder="enter the review link of the book"
          required
          className={inputStyle}
          ref={reviewLink}
        />
        <input
          type="text"
          className={inputStyle}
          placeholder="Enter the rating of the book, out of 5."
          onChange={handleChange}
          required
        />
        <div className="w-full">
          <input
            type="text"
            className={inputStyle}
            ref={genres}
            placeholder="Enter the genres to which book belongs."
          />
          <p>Note: Enter the genres separated by comma(,).</p>
        </div>
        <input
          type="file"
          className={inputStyle}
          onChange={handleFileChange}
          required
        />

        <div>Upload status: {uploadStatus}</div>
        {progress !== 0 && (
          <div className="h-10 flex justify-start items-center w-full border border-black shadow-md rounded-full bg-gray-300">
            <div
              className={`h-full bg-green-500 rounded-full`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
        <button className={adminButton} type="submit">
          Submit
        </button>
      </form>
      <button
        className={adminButton}
        onClick={() => {
          setShowBooks(!showBooks);
        }}
      >
        {showBooks ? "Hide" : "Show"} all books!
      </button>
      {showBooks && (
        <div className="px-2 flex flex-col lg:grid lg:grid-cols-2 lg:w-screen gap-3 lg:px-5">
          {books.map((book, index) => {
            return (
              <div
                key={index}
                className="bg-gray-200 flex flex-col px-2 py-1 rounded-md"
              >
                <div
                  className="text-red-600 text-2xl flex items-center mt-1 w-full justify-end cursor-pointer"
                  onClick={async () => {
                    await deleteDoc(doc(db2, "books", book.id));
                    toast.success(
                      `Book named ${book.data.name} has been deleted successfully!`
                    );
                  }}
                >
                  <AiTwotoneDelete />
                </div>
                <BookDisplayBox book={book.data} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BookForm;
