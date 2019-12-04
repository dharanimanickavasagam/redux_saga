import { GET_POST, ADD_POST } from "../constants/constants";

const initialState = {
  posts: []
};

export const post = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POST:
      return Object.assign({}, state, {
        posts: state.posts
      });

    case ADD_POST:
      return Object.assign({}, state, {
        posts: state.posts.concat(payload)
      });

    default:
      return state;
  }
};
