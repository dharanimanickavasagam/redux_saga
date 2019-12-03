import { GET_POST } from "../constants/constants";

const initialState = {
  posts: []
};

export const post = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POST:
      return Object.assign({}, state, {
        posts: state.posts
      });

    default:
      return state;
  }
};
