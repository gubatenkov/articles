import React from 'react';

import { ArticleListItem } from 'components';
import { Grid } from '@mui/material';

const renderArticles = (articles = [], query) => {
  if (articles.length) {
    // some IDs from API has null or repeats their value. Using index as key prop instead of ID
    return articles.map((a, idx) => (
      <ArticleListItem key={idx} article={a} query={query} />
    ));
  }

  return null;
};

const ArticleList = ({ articles, isError, query }) => {
  return (
    <Grid
      className='article-list'
      container
      component='ul'
      justifyContent='space-between'
    >
      {isError ? (
        <li>Oops... There is an error trying to fetch articles</li>
      ) : (
        renderArticles(articles, query)
      )}
    </Grid>
  );
};

export default ArticleList;
