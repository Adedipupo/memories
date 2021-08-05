import axios from 'axios';

const url = 'https://pro-memories-web-app.herokuapp.com/api/v1/memories/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(`${url}/create`, newPost);
export const updatePost = (id,updatedPost) => axios.patch(`${url}/edit/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/delete/${id}`);
export const likePost = (id) => axios.patch(`${url}/like/${id}`);