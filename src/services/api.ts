import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST,
  headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_KEY },
});

export default api;
