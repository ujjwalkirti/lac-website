import { Libre_Caslon_Text, Montserrat } from "next/font/google";

const inputStyle =
  "flex-1 rounded-md p-2 pl-5 outline-none h-22 bg-gray-200 dark:text-[#2c1810]";
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
  "color",
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
    img: "",
  },
  {
    title: "Reading",
    desc: "LAC believes in fostering a vibrant reading culture, where like-minded individuals can come together to read and discuss their favorite literary works. From classic fiction to short stories and fantasy to thrillers, we have them all! Join us for engaging discussions, insightful analysis, and the opportunity to connect with fellow book lovers.",
    img: "",
  },
  {
    title: "Quizzing",
    desc: "Join the world of quizzes and let your brain cells go wild! Quizzing is more than just pleasure or leisure; it is a tool for personal development and self-discovery. It pushes you to think outside the box, improves your logical thinking talents, and keeps you updated on everything from pop culture to current events. There's nothing quite like the adrenaline rush of competing with others and proving your knowledge against them in real-time.",
    img: "",
  },
];
export {
  inputStyle,
  adminButton,
  trimString,
  monsterrat,
  modules,
  formats,
  valuesOfLAC,
  libre_caslon_text,
};
