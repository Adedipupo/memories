import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000/api/v1/memories' })

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts/create', newPost);
export const updatePost = (id,updatedPost) => API.patch(`/posts/edit/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/delete/${id}`);
export const likePost = (id) => API.patch(`/posts/like/${id}`);

export const signUp = (formData) => API.post('/users/register',formData)
export const signIn = (formData) => API.post('/users/login',formData)