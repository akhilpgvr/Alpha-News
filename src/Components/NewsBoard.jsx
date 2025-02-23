import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2 className="text-center">
        Breaking <span className="text-muted">News</span>
      </h2>
      {articles.map((news, index) => (
        <NewsItem 
          key={index} 
          title={news.title} 
          description={news.description} 
          src={news.urlToImage} 
          url={news.url} 
        />
      ))}
    </div>
  );
};

export default NewsBoard;
