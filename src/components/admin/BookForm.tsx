import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import BookDisplayBox from "../Book Club/BookDisplayBox";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db, db2, storage2 } from "@/Firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { adminButton } from "@/utils";
import { inputStyle } from "@/utils";
import { ImBooks } from "react-icons/im";

const BookForm = () => {
  const name = useRef<HTMLInputElement | null>(null);
  const author = useRef<HTMLInputElement | null>(null);
  const reviewLink = useRef<HTMLInputElement | null>(null);
  const genres = useRef<HTMLInputElement | null>(null);

  const [books, setBooks] = useState<any[]>([]);
  const [rating, setRating] = useState<number>(0);
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

  const fetchBooks = async () => {
    const querySnapshot = await getDocs(collection(db, "books"));
    setBooks([]);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setBooks((books) => [...books, doc.data()]);
    });
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    handleUpload();
  };
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleChange = (e: { target: { value: string } }) => {
    const value = parseFloat(e.target.value);
    if (value <= 5 && value >= 0) {
      setRating(value);
    } else {
      toast.error(
        "Rating value is out of 5 only, please enter a suitable value."
      );
    }
  };

  const handleUpload = () => {
    if (imageFile) {
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
    }
  };

  return (
    <div className="flex flex-col items-center space-y-3">
      <form className="flex flex-col items-center justify-start space-y-3 w-full mb-5 px-2 py-2 bg-white dark:bg-gray-300 text-black">
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
          type="number"
          placeholder="enter the rating of the book"
          max={5}
          value={rating}
          className={inputStyle}
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
          <div className="h-10 flex justify-start items-center w-full border border-black shadow-md rounded-full bg-white">
            <div
              className={`h-full bg-green-500 rounded-full`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
        <button className={adminButton} type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <button className={adminButton} onClick={fetchBooks}>
        Show all books!
      </button>
      <div className="px-2 flex flex-col">
        {books.map((book, index) => {
          return <BookDisplayBox book={book} key={index} />;
        })}
      </div>
    </div>
  );
};

export default BookForm;
