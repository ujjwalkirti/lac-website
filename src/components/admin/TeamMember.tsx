import React, { useState, useEffect, useRef, FormEvent } from "react";
import { toast } from "react-toastify";
import InformationHolder from "../About us/InformationHolder";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  setDoc,
} from "firebase/firestore";
import { db2, storage2 } from "@/Firebase";
import {
  StorageReference,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { AiTwotoneDelete } from "react-icons/ai";
import { adminButton, inputStyle } from "@/local-data/StyleStrings";

const posts = ["Chairperson", "Co-Chairperson", "Secretary", "Joint-Secretary"];

const TeamMember = () => {
  const name = useRef<HTMLInputElement | null>(null);
  const position = useRef<HTMLInputElement | null>(null);
  const department = useRef<HTMLInputElement | null>(null);
  const designation = useRef<HTMLSelectElement | null>(null);
  const contact = useRef<HTMLInputElement | null>(null);
  const socials = useRef<HTMLInputElement | null>(null);
  const year = useRef<HTMLInputElement | null>(null);

  const [members, setMembers] = useState<any[]>([]);
  const [showMembers, setShowMembers] = useState<boolean>(false);
  const [imageFile, setImageFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("");
  /*
    name
    position
    department
    img
    designation
    contact
    socials

  */

  useEffect(() => {
    const teamMemberQuery = query(collection(db2, "members"));

    const unsubscribe = onSnapshot(teamMemberQuery, (querySnapshot) => {
      setMembers(
        querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
          storage2,
          //@ts-ignore
          `about_us/student representatives/${imageFile.name}`
        );
      } else {
        //@ts-ignore
        imageRef = ref(storage2, `about_us/faculty advisors/${imageFile.name}`);
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
              position: position.current?.value || "",
              department: department.current?.value || "",
              img: downloadURL,
              designation: designation.current?.value || "",
              contact: contacts || [],
              socials: splitLinks || [],
              coreCommitteeYear: year,
            };
            addDoc(collection(db2, "members"), data)
              .then((docRef) => {
                toast.success(
                  `Member added successfully with id: ${docRef.id}! LAC for the win! ✌️`
                );
                name.current && (name.current.value = "");
                designation.current && (designation.current.value = "");
                position.current && (position.current.value = "");
                department.current && (department.current.value = "");
                contact.current && (contact.current.value = "");
                socials.current && (socials.current.value = "");
                year.current && (year.current.value = "");
                setProgress(0);
                setUploadStatus("");
              })
              .catch((err) =>
                toast.error("Something went wrong, Please try again!")
              );
          });
        }
      );
    }
  };

  return (
    <div className="flex flex-col items-center space-y-3">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-start space-y-3 w-full mb-5 px-2 py-2 bg-white dark:bg-gray-300 text-black"
      >
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
          placeholder="enter position like Professor, Assistant Professor, Student etc."
          required
          className={inputStyle}
          ref={position}
        />
        <input
          type="text"
          placeholder="enter department"
          required
          className={inputStyle}
          ref={department}
        />
        <input
          type="file"
          className={inputStyle}
          onChange={handleFileChange}
          required
        />
        <p className="text-left w-full">Choose the designation:</p>
        <select ref={designation} className={inputStyle}>
          {posts.map((post, index) => (
            <option key={index} value={post} className={inputStyle}>
              {post}
            </option>
          ))}
        </select>
        <div className="w-full">
          <input
            type="text"
            className={inputStyle}
            required
            placeholder="Mention the session for which the member was in core committee"
            ref={year}
          />
          <p className="w-full">Ex: for year 2023, it will be 2023-24.</p>
        </div>
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
        <button className={adminButton} type="submit">
          Submit
        </button>
      </form>
      <button
        className={adminButton}
        onClick={() => {
          setShowMembers(!showMembers);
        }}
      >
        {showMembers ? "Hide" : "Show"} all Members!
      </button>
      {showMembers && (
        <div className="px-2 flex flex-col lg:grid lg:grid-cols-2 lg:w-screen gap-3 lg:px-5">
          {members.map((member, index) => {
            return (
              <div
                key={index}
                className="bg-gray-200 flex flex-col px-2 py-1 rounded-md"
              >
                <div className="flex items-center gap-4 w-full justify-end text-2xl">
                  <div
                    className="text-red-600 text-2xl flex items-center mt-1 justify-end cursor-pointer"
                    onClick={async () => {
                      await deleteDoc(doc(db2, "members", member.id));
                      toast.success(
                        `Member named ${member.data.name} has been removed successfully!`
                      );
                    }}
                  >
                    <AiTwotoneDelete />
                  </div>
                </div>
                <InformationHolder {...member.data} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TeamMember;
