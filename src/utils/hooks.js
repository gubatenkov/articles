import { useState, useEffect } from 'react';

export const useFetchArticlesByQuery = (query) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async (query) => {
      if (query) {
        try {
          const res = await fetch(
            `https://newsapi.org/v2/everything?q=${query}&sortBy=relevancy&page=1&apiKey=${process.env.REACT_APP_NEWSAPI}`
          );
          const data = await res.json();
          if (data.status !== 'ok') {
            setIsError(true);
          } else {
            setArticles(data.articles);
          }
          setIsLoading(false);
        } catch (e) {
          setIsError(true);
        }
      }
    };

    fetchData(query);
  }, [query]);

  return [articles, isLoading, isError];
};
