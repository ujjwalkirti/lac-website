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
  date: string;
};

type Book = {
  name: string;
  author: string;
  image: string;
  rating: number;
  reviewLink: string;
  genres: string[];
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
  type: string;
};

type Developer = {
  [key: string]: string;
  image: string;
  name: string;
  tag: string;
  branch: string;
  year: number;
  links: string[];
};

type Litevent = {
  [key: string]: string;
  img: string;
  title: string;
  description: string;
  date: string;
};
