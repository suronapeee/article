import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../api"; // Import your configured Axios instance

const Article = () => {
  const { article_id } = useParams(); // Get the article ID from the URL
  const [articleTitle, setArticleTitle] = useState("");
  const [recentArticles, setRecentArticles] = useState([]);

  useEffect(() => {
    // Fetch the article and recently viewed articles from the backend
    api.get(`/article/${article_id}/`, { withCredentials: true }) // Enable cookies for session tracking
      .then((response) => {
        // Update the current article title
        setArticleTitle(response.data.title);

        // Update the list of recently viewed articles
        setRecentArticles(response.data.recent_articles);
      })
      .catch((error) => {
        console.error("Error fetching the article:", error);
        setArticleTitle("Error loading article");
        setRecentArticles([]);
      });
  }, [article_id]);

  return (
    <div>
      <h3>{articleTitle}</h3>
      <Link to="/">Go back to Home</Link>

      {/* Display recently viewed articles */}
      {recentArticles.length > 0 && (
        <div>
          <h4>Recently Viewed Articles:</h4>
          <ul>
            {recentArticles.map((article, index) => (
              <li key={index}>
                <Link to={article.url}>{article.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Article;
