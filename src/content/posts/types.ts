export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readingTime: string;
  coverWord: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
};
