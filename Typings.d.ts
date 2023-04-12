type Blog = {
  [key: string]: string | number;
  isVerified: string;
  name: string;
  author: string;
  designation: string;
  about: string;
  content: string;
  illustration: string;
  date: number;
};

type Book = {
  name: string;
  author: string;
  image: string;
  genre: string[];
  rating: number;
};

type LAC_Event = {};

type Team_Member = {
  [key: string]: string;
  picture:string;
  name:string;
  post:string;
  desc:string;
};
