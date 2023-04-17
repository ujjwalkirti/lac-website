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
  [key: string]: string | number | boolean;
  completed: boolean;
  img: string;
  title: string;
  description: string;
  teamMembers: number;
  date: string;
  reglink: string;
};

type Developer = {
  [key: string]: string;
  image: string;
  coverImage: string;
  name: string;
  tag: string;
  links: string[];
};

type Litevent = {
  [key: string]: string;
  img: string;
  title: string;
  description: string;
  date: string;
};
