import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const API_KEY= '3737';

// Fetch Posts Action Creator
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}?key=${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
};
