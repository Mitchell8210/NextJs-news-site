import axios from "axios";

const API_KEY = process.env.NEWS_API_KEY;
export const getAllNewsSources = async () => {
  const sources = await axios
    .get(`https://newsapi.org/v2/top-headlines/sources?apiKey=${API_KEY}`)
    .then((resp) => resp.data);
  return sources;
};

export const getAllArticlesForParticularSource = async (source: any) => {
  const { articles } = await axios
    .get(
      `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${API_KEY}`
    )
    .then((resp) => resp.data);

  return articles;
};
