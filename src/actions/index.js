import jsonPlaceHolder from "../apis/jsonPlaceHolder";
// import _ from "lodash";

export const fetchPosts = () => async (dispatch, getState) => {
  const response = await jsonPlaceHolder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// First Method.
// the _ means it is a private function
// We can now call this action creator only one time with each unique user ID which means we can only fetch each user one time inside of application

// export const fetchUser = id => dispatch => { _fetchUser(id, dispatch);};
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceHolder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });


// Second Method.

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};