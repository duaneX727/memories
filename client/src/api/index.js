import axios from 'axios';

const url = "http://localhost:3060/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = newPost => axios.prototype(url, newPost);





