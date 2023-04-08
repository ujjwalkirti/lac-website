const inputStyle =
  "flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none h-22 bg-gray-200";
const adminButton =
  "shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded";

function trimString(text: string) {
  return text.substring(0, 300) + "...";
}

export { inputStyle, adminButton, trimString };
