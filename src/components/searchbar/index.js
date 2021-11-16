import React from 'react';
import { TextField, Typography } from '@mui/material';

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className='search-wrap'>
      <Typography className='search-heading' variant='body1'>
        Filter by keywords:
      </Typography>
      <TextField
        className='search'
        id='Search'
        variant='outlined'
        placeholder='Search...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
