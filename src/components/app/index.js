import React from 'react';
import 'assets/scss/app.scss';

import { Routes, Route } from 'react-router-dom';
import { HomePage, ArticlePage } from 'components';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/article/:id' element={<ArticlePage />} />
      </Routes>
    </div>
  );
};

export default App;
