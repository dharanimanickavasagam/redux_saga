import { ADD_ARTICLE } from "../constants/constants";

const initialState = {
  articles: ["Article 1", "Article 2"]
};

export const article = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.concat(payload)
      });

    default:
      return state;
  }
};
