import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import InformationHolder from "../About us/InformationHolder";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db, storage } from "@/Firebase";
import {
  StorageReference,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { adminButton } from "@/utils";
import { inputStyle } from "@/utils";

const TeamMember = () => {
  const position = useRef<HTMLInputElement | null>(null);
  const designation = useRef<HTMLInputElement | null>(null);
  const name = useRef<HTMLInputElement | null>(null);
  const contact = useRef<HTMLInputElement | null>(null);
  const socials = useRef<HTMLInputElement | null>(null);

  const [members, setMembers] = useState<any[]>([]);
  const [imageFile, setImageFile] = useState<
    string | number | readonly string[] | undefined
  >("");
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("");
  /*
    contact
    position
    name
    designation
    img

  */

  const fetchEvents = async () => {
    const querySnapshot = await getDocs(collection(db, "members"));
    setMembers([]);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setMembers((members) => [...members, doc.data()]);
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
      let imageRef: StorageReference;
      if (
        designation.current &&
        (designation.current.value === "Secretary" ||
          designation.current.value === "Joint Secretary")
      ) {
        imageRef = ref(
          storage,
          //@ts-ignore
          `about_us/student representatives/${imageFile.name}`
        );
      } else {
        //@ts-ignore
        imageRef = ref(storage, `about_us/faculty advisors/${imageFile.name}`);
      }
      //@ts-ignore
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
            "Sorry something went wrong, Please try again. Reason:" +
              error.message
          );
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...

          const getContact = contact.current?.value || "";
          const splitContacts = getContact.split(",");
          let contacts: number[] = [];
          // Looping over the numbers
          for (let i = 0; i < splitContacts.length; i++) {
            const contactNo = parseInt(splitContacts[i].trim()); // Remove leading/trailing spaces
            contacts.push(contactNo);
          }

          const getSocials = socials.current?.value || "";
          const splitLinks = getSocials.split(",");
          // Looping over the words
          for (let i = 0; i < splitLinks.length; i++) {
            splitLinks[i] = splitLinks[i].trim();
            if (splitLinks[i] === "") {
              splitLinks[i] = " ";
            } // Remove leading/trailing spaces
          }

          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            const data = {
              name: name.current?.value || "",
              designation: designation.current?.value || "",
              position: position.current?.value || "",
              contact: contacts || [],
              img: downloadURL,
              socials: splitLinks || [],
            };
            const docRef = await addDoc(collection(db, "members"), data);
            toast.success("Member added successfully! LAC for the win! ✌️");
            name.current && (name.current.value = "");
            designation.current && (designation.current.value = "");
            position.current && (position.current.value = "");
            contact.current && (contact.current.value = "");
            socials.current && (socials.current.value = "");
            setImageFile("");
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
          Add Member
        </p>
        <input
          type="text"
          className={inputStyle}
          placeholder="Enter Name"
          required
          ref={name}
        />
        <input
          type="text"
          placeholder="Enter designation"
          required
          className={inputStyle}
          ref={designation}
        />
        <input
          type="text"
          placeholder="enter position"
          required
          className={inputStyle}
          ref={position}
        />
        <input
          type="file"
          className={inputStyle}
          value={imageFile}
          onChange={handleFileChange}
          required
        />
        <div className="w-full">
          <input
            type="text"
            className={inputStyle}
            ref={contact}
            placeholder="Enter the contact numbers"
          />
          <p>
            Note: Enter the contact separated by comma(,).Format = [contact
            number, whatsapp number]
          </p>
        </div>
        <div className="w-full">
          <input
            type="text"
            className={inputStyle}
            ref={socials}
            placeholder="Enter the social accounts link here"
          />
          <p>
            Note: Enter the details separated by comma(,).
            <b>Format = [Facebook, linkedin, tweeter, Email, Instagram]</b>
          </p>
        </div>
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
        Show all Members!
      </button>
      <div className="px-2 flex flex-col">
        {members.map((member, index) => {
          return (
            <InformationHolder
              key={index}
              name={member.name}
              position={member.position}
              img={member.img}
              designation={member.designation}
              contact={member.contact}
              socials={member.socials}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TeamMember;
