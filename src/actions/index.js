import jsonPlaceholder from '../apis/jsonPlaceholder';

// async await will just modify the return values of the inner function
// but redux-thunk does not use the return values of that function
// so it won't matter whether we return something from the inner function or not
//
// If we want to use the getState function, then we can use it by adding a parameter
// to the inner function:
// export const fetchPosts = () => async (dispatch, getState) => {
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};
