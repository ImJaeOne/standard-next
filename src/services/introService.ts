type Intro = {
  description1: string;
  description2: string;
  description3: string;
};

const getIntro = async (): Promise<Intro> => {
  const res = await fetch("http://localhost:4000/intro", {
    cache: "force-cache",
  });
  const data = await res.json();

  return data;
};
