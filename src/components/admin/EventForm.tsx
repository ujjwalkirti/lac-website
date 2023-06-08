import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import EventBox from "../Events/EventBox";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db, storage } from "@/Firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { adminButton } from "@/utils";
import { inputStyle } from "@/utils";

const EventForm = () => {
  const date = useRef<HTMLInputElement | null>(null);
  const description = useRef<HTMLTextAreaElement | null>(null);
  const title = useRef<HTMLInputElement | null>(null);
  const teamMembers = useRef<HTMLInputElement | null>(null);
  const type = useRef<HTMLSelectElement | null>(null);
  const regLink = useRef<HTMLInputElement | null>(null);

  const [events, setEvents] = useState<any[]>([]);
  const [imageFile, setImageFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("");
  /*
    date
    description
    title
    teamMembers
    image

  */

  const fetchEvents = async () => {
    const querySnapshot = await getDocs(collection(db, "events"));
    setEvents([]);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setEvents((events) => [...events, doc.data()]);
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

  const handleUpload = () => {
    if (imageFile) {
      //@ts-ignore
      const imageRef = ref(storage, `events/${imageFile.name}`);
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
            const data = {
              title: title.current?.value || "",
              description: description.current?.value || "",
              teamMembers: Number(teamMembers.current?.value || 1),
              date: date.current?.value.toString() || new Date().toDateString(),
              img: downloadURL,
              completed: false,
              type: type.current?.value || "general",
              reglink: regLink.current?.value || "",
            };
            const docRef = await addDoc(collection(db, "events"), data);
            toast.success("Event added successfully! LAC for the win! ✌️");
            if (title.current) {
              title.current.value = "";
            }
            if (description.current) {
              description.current.value = "";
            }
            if (teamMembers.current) {
              teamMembers.current.value = "0";
            }
            if (date.current) {
              date.current.value = date.current.defaultValue;
            }
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
          Add Events
        </p>
        <input
          type="text"
          className={inputStyle}
          placeholder="name of the Event"
          required
          ref={title}
        />
        <textarea
          rows={5}
          cols={8}
          placeholder="Description of the event"
          required
          className={inputStyle}
          ref={description}
        />
        <input
          type="number"
          placeholder="enter the size of the team"
          required
          className={inputStyle}
          ref={teamMembers}
          min={0}
        />
        <select id="dropdown" className={inputStyle} ref={type}>
          <option value="">-- Select --</option>
          <option value="speaking">Speaking</option>
          <option value="reading">Reading</option>
          <option value="quizzing">Quizzing</option>
          <option value="general">General</option>
        </select>
        <input
          type="text"
          placeholder="enter the registration link"
          required
          className={inputStyle}
          ref={regLink}
        />
        <div className="w-full">
          <input
            type="date"
            className={inputStyle}
            ref={date}
            defaultValue={new Date().toISOString().split("T")[0]}
            placeholder="Enter the date of the event"
          />
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
      <button className={adminButton} onClick={fetchEvents}>
        Show all Events!
      </button>
      <div className="px-2 flex flex-col">
        {events.map((event, index) => {
          return (
            <EventBox
              key={index}
              completed={event.completed}
              date={event.date}
              description={event.description}
              img={event.img}
              teamMembers={event.teamMembers}
              title={event.title}
              reglink={event.reglink ? event.reglink : ""}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EventForm;
