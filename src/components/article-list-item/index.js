import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import { useArticlesContext } from 'context/articlesContext';

const cutOneHundredSymbols = (string) => {
  if (string?.length > 100) {
    return string.slice(0, 100) + '...';
  } else {
    return string;
  }
};

const ArticleListItem = (props) => {
  const { query, article } = props;
  const { setSingleArticle } = useArticlesContext();

  const handleClick = () => setSingleArticle(article);

  return (
    <Grid className='article-list-item' item component='li' md={6} xs={12}>
      <Link
        className='article-link'
        to={`/article/${article.title}`}
        onClick={handleClick}
      >
        <article className='article'>
          <Typography className='article-heading' variant='h1'>
            <Highlighter
              highlightClassName='yellow'
              searchWords={query.split(' ')}
              autoEscape={true}
              textToHighlight={cutOneHundredSymbols(article.title) ?? ''}
            />
          </Typography>
          <p className='article-description-title mb-15'>Description:</p>
          <p className='article-description'>
            <Highlighter
              highlightClassName='yellow'
              searchWords={query.split(' ')}
              autoEscape={true}
              textToHighlight={cutOneHundredSymbols(article.description) ?? ''}
            />
          </p>
        </article>
      </Link>
    </Grid>
  );
};

export default ArticleListItem;
