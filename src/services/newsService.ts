type NewsItem = {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  createdAt: number;
};

export const getNews = async (): Promise<NewsItem[]> => {
  const res = await fetch("http://localhost:4000/news", {
    next: {
      revalidate: 60 * 5,
    },
  });
  const data = res.json();

  return data;
};
