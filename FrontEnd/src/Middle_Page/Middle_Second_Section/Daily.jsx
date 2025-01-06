import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Daily.css'; // Make sure to create this CSS file



const Daily = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=205125fcc7414b038a14b45538669b52');
        
        // Filter out articles with missing title or image
        const filteredArticles = response.data.articles.filter(article => article.title && article.urlToImage);
        
        setNewsData(filteredArticles);
        setLoading(false);
      } catch (err) {
        setError("Error fetching news data.");
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <div className="App">
      <h1 className="text-center my-4 text-primary">Current Affairs News - Tesla</h1>

      {loading ? (
        <p>Loading news...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="container ">
          {newsData.length > 0 ? (
            <div className="row">
              {newsData.map((article, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="card h-100">
                    <div className="card-img-top-wrapper">
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        className="card-img-top"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{article.title}</h5>
                      <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No news found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Daily;
