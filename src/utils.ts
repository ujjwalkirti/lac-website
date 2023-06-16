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

export { trimString, modules, formats, getBooks };
