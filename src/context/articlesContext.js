import React, { createContext, useContext, useReducer } from 'react';
import reducer, { SET_ARTICLES, SET_SINGLE_ARTICLE } from './reducer';

const ArticlesContext = createContext();

const initialState = {
  articles: [],
  singleArticle: null,
  errors: [],
};

const ArticlesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setArticles = (data) => dispatch({ type: SET_ARTICLES, payload: data });

  const setSingleArticle = (data) => {
    dispatch({ type: SET_SINGLE_ARTICLE, payload: data });
  };

  return (
    <ArticlesContext.Provider
      value={{ ...state, setArticles, setSingleArticle }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticlesContext = () => {
  return useContext(ArticlesContext);
};

export { ArticlesProvider, ArticlesContext };
