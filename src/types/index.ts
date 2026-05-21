export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover: string;
  category: string;
  author: string;
  authorAvatar: string;
  date: string;
  readTime: number;
  tags: string[];
  featured?: boolean;
};

export type Comment = {
  id: string;
  postId: string;
  author: string;
  content: string;
  date: string;
};
