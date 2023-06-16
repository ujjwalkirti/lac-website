import { Libre_Caslon_Text, Montserrat } from "next/font/google";
import { db2 } from "./Firebase";
import {
  DocumentData,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAt,
} from "firebase/firestore";

const inputStyle =
  "flex-1 rounded-md p-2 pl-5 outline-none h-22 w-full bg-gray-200 dark:text-[#2c1810]";
const adminButton =
  "shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded";

function trimString(text: string) {
  return text.substring(0, 300) + "...";
}

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "background",
  "code-block",
  "script",
  "sub",
  "super",
  "direction",
  "align",
  "clean",
];

const libre_caslon_text = Libre_Caslon_Text({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const monsterrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const valuesOfLAC = [
  {
    title: "Speaking",
    desc: "In LAC, we believe that oration is a powerful tool for communication and persuasion. Whether it's a group discussion or a formal debate, we encourage our members to hone their oratory skills and express their ideas with clarity and conviction. Through oration, we explore diverse perspectives, challenge our assumptions, and develop our critical thinking abilities. Join us to discover the art of effective communication and become a confident and persuasive orator.",
    short_desc:
      "Join LAC to develop your oratory skills, express ideas with clarity, and become a confident and persuasive communicator through the power of effective oration.",
    img: "https://firebasestorage.googleapis.com/v0/b/lac-website-c4a02.appspot.com/o/values%2Fspeaking%2FDSC_1648-1.JPG?alt=media&token=856806be-6e15-4cee-a89b-e0ad0fc96da6",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/lac-website-c4a02.appspot.com/o/values%2Fspeaking%2FIMG-20221116-WA0010.jpg?alt=media&token=c26db027-c9ae-40f5-8d93-cdc6208c06eb",
      "https://firebasestorage.googleapis.com/v0/b/lac-website-c4a02.appspot.com/o/values%2Fspeaking%2FWhatsApp%20Image%202023-04-19%20at%201.31.26%20PM.jpeg?alt=media&token=4d6877fb-0668-4557-9f22-eebd0974042e",
    ],
  },
  {
    title: "Reading",
    desc: "LAC believes in fostering a vibrant reading culture, where like-minded individuals can come together to read and discuss their favorite literary works. From classic fiction to short stories and fantasy to thrillers, we have them all! Join us for engaging discussions, insightful analysis, and the opportunity to connect with fellow book lovers.",
    short_desc:
      "Join LAC to cultivate a vibrant reading culture, where book lovers gather to discuss and analyze a wide range of literary works, fostering connections and meaningful conversations.",
    img: "https://firebasestorage.googleapis.com/v0/b/lac-website-c4a02.appspot.com/o/values%2Freading%2FWhatsApp%20Image%202023-04-21%20at%2012.14.28.jpg?alt=media&token=82437943-64d9-4302-a3a6-d27d451106b5",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/lac-website-c4a02.appspot.com/o/values%2Freading%2FIMG-20210216-WA0184.jpg?alt=media&token=ec2c5187-72d5-48bd-89bb-b5c57bd52665",
      "https://firebasestorage.googleapis.com/v0/b/lac-website-c4a02.appspot.com/o/values%2Freading%2FWhatsApp%20Image%202023-04-21%20at%2012.11.48.jpg?alt=media&token=2928056c-37b4-4c57-9b03-df5135c7294d",
    ],
  },
  {
    title: "Quizzing",
    desc: "Join the world of quizzes and let your brain cells go wild! Quizzing is more than just pleasure or leisure; it is a tool for personal development and self-discovery. It pushes you to think outside the box, improves your logical thinking talents, and keeps you updated on everything from pop culture to current events. There's nothing quite like the adrenaline rush of competing with others and proving your knowledge against them in real-time.",
    short_desc:
      "Join the world of quizzes for an exhilarating experience of personal growth, intellectual challenge, and real-time competition that expands your knowledge and logical thinking abilities.",
    img: "https://firebasestorage.googleapis.com/v0/b/lac-website-c4a02.appspot.com/o/values%2Fquizzing%2FWhatsApp%20Image%202023-04-19%20at%201.32.07%20PM.jpeg?alt=media&token=b931d2a9-6cd7-439c-8f76-49f62c90a720",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/lac-website-c4a02.appspot.com/o/values%2Fquizzing%2FSnapinsta.app_274959452_4629746337148377_3272822758412195358_n_1080.jpg?alt=media&token=ac444c8a-26b1-4f44-80df-d8cbbc8f7c5b",
      "https://firebasestorage.googleapis.com/v0/b/lac-website-c4a02.appspot.com/o/values%2Fquizzing%2F20220418_182335.jpg?alt=media&token=7fee507d-736c-47b5-8ace-a5e3eac9853d",
    ],
  },
];

const getBooks = async (
  lastBookName: string,
  page?: number,
  searchQuery?: string
) => {
  try {
    let books: DocumentData[] = [];
    const booksRef = collection(db2, "books");

    const q = query(
      booksRef,
      orderBy("name"),
      startAt(lastBookName),
      limit(20)
    );
    console.log(lastBookName);

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      books.push(doc.data());
    });
    return books;
  } catch (error) {
    throw new Error("Error fetching books");
  }
};

export {
  inputStyle,
  adminButton,
  trimString,
  monsterrat,
  modules,
  formats,
  valuesOfLAC,
  libre_caslon_text,
  getBooks,
};
