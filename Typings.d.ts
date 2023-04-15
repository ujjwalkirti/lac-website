type Blog = {
  [key: string]: string | number | boolean;
  isFeatured: boolean;
  isVerified: boolean;
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
  reviewLink: string;
};

type LAC_Event = {
  [key:string]: string | number;
  img: string;
  title: string;
  description: string;
  teamMembers: number;
  date: string;
};

type Team_Member = {
  [key: string]: string;
  picture: string;
  name: string;
  post: string;
  desc: string;
};

type Litevent = {
  [key:string]: string;
  img: string;
  title: string;
  description: string;
  date: string;
  link?: string;
}
