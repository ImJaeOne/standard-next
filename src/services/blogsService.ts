type BlogsItem = {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  createdAt: number;
  tags: string[];
};

export const getBlogs = async (): Promise<BlogsItem[]> => {
  const res = await fetch("http://localhost:4000/blogs", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};
