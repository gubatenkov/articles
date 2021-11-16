import React, { useEffect, useState } from 'react';

import { ArticleList, SearchBar } from 'components';
import { CircularProgress, Divider, Typography } from '@mui/material';
import { useFetchArticlesByQuery } from 'utils/hooks';
import { useArticlesContext } from 'context/articlesContext';

const filterByKeyword = (items, query) => {
  function getMatchCountMap(data, criterias) {
    return data.reduce((countMap, curItem) => {
      let count = criterias.filter((criteria) =>
        new RegExp(criteria, 'i').test(curItem.title)
      ).length;
      countMap.push({
        value: curItem,
        count: count,
      });
      return countMap;
    }, []);
  }

  function sortBasedOnCount(data, criterias) {
    let map = getMatchCountMap(data, criterias);
    map.sort((a, b) => b.count - a.count);
    return map.map((x) => x.value);
  }

  return sortBasedOnCount(items, query);
};

const Homepage = () => {
  const [query, setQuery] = useState('bitcoin');
  let [articles, isLoading, isError] = useFetchArticlesByQuery(query);
  const { setArticles } = useArticlesContext();

  useEffect(() => {
    // set artcles to the state
    if (articles?.length && !isLoading) {
      setArticles(articles);
    }
    // eslint-disable-next-line
  }, [articles.length, isLoading]);

  return (
    <div>
      <header className='header'>
        <div className='container'>
          <SearchBar query={query} setQuery={setQuery} />
        </div>
      </header>

      {/* Articles */}
      <main className='content'>
        <div className='container'>
          <section className='articles'>
            <Typography className='articles-heading' variant='h6'>
              Results: {articles?.length ?? 0}
            </Typography>
            <Divider className='divider' />
            {/* render spinner then articles */}
            {isLoading ? (
              <CircularProgress
                style={{ display: 'block', margin: '3rem auto' }}
              />
            ) : (
              <ArticleList
                articles={filterByKeyword(articles, query.split(' '))}
                isError={isError}
                query={query}
              />
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
