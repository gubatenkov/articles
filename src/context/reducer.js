export const SET_ARTICLES = 'SET_ARTICLES';
export const CLEAR_ARTICLES = 'CLEAR_ARTICLES';
export const SET_SINGLE_ARTICLE = 'SET_SINGLE_ARTICLE';
export const CLEAR_SINGLE_ARTICLE = 'CLEAR_SINGLE_ARTICLE';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_ARTICLES:
      return { ...state, articles: payload };
    case SET_SINGLE_ARTICLE:
      return { ...state, singleArticle: payload };
    default:
      return state;
  }
};

export default reducer;
