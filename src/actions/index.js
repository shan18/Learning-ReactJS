import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// async await will just modify the return values of the inner function
// but redux-thunk does not use the return values of that function
// so it won't matter whether we return something from the inner function or not

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts()); // await ensures that the parent waits for the child to finish

  // it first returns an array of userId from posts and then extracts all the unique userIds
  _.chain(getState().posts) // chain will add the posts automatically as the first arg of the chained functions
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value(); // this will execute the chain above

  // alternate version of the userIds portion above
  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // userIds.forEach(id => dispatch(fetchUser(id)));

  // if we want to wait for the userid to be fetched:
  // await Promise.all(userIds.map(id => dispatch(fetchUser(id))));
};

// If we want to use the getState function, then we can use it by adding a parameter to the inner function:
// export const fetchPosts = () => async (dispatch, getState) => {
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// Memoized version of the fetchUser
// The problem with this approach is that if the user data on the server changes
// and we execute the memoized function, it will still return the old data
//
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });
