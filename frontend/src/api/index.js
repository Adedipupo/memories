import axios from 'axios';

const url = 'http://localhost:5000/api/v1/memories/posts';
const createUrl = 'http://localhost:5000/api/v1/memories/posts/create';
const updateUrl = 'http://localhost:5000/api/v1/memories/posts/edit/:id';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(`${url}/create`, newPost);
export const updatePost = (id,updatedPost) => axios.patch(`${url}/edit/${id}`, updatedPost);