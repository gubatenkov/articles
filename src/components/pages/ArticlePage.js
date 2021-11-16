import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { useArticlesContext } from 'context/articlesContext';

const ArticlePage = () => {
  const { singleArticle } = useArticlesContext();

  if (singleArticle === null) {
    return <Typography variant='body1'>There is no related content</Typography>;
  }

  return (
    <div className='single-article'>
      <div className='container'>
        <div className='single-article-inner'>
          <Typography className='single-article-title' variant='h1'>
            {singleArticle.title}
          </Typography>
          <Typography className='single-article-content' variant='body1'>
            {singleArticle.content}
          </Typography>

          <Link className='single-article-link' to='/'>
            Back To Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
