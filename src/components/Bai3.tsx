import React, { useEffect, useState } from "react";
import axios from "axios";

interface News {
  id: number;
  title: string;
  summary: string;
  image_url: string;
  published_at: string;
  url: string;
}

const NewsApp: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v4/articles?limit=10")
      .then((res) => setNews(res.data.results))
      .catch(() => alert("Không thể tải tin tức!"));
  }, []);

  return (
    <div className="page-container">
      <h2>Tin tức vũ trụ</h2>
      {news.map((item) => {
        const siteName = new URL(item.url).hostname.replace("www.", "");
        return (
          <div key={item.id} className="news-item" style={{ marginBottom: "20px" }}>
            <img src={item.image_url} alt={item.title} width="300" />
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <a href={item.url} target="_blank" rel="noreferrer">
              Đọc thêm tại {siteName}
            </a>
            <p>
              <small>Ngày đăng: {new Date(item.published_at).toLocaleDateString()}</small>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default NewsApp;

