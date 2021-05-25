import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST,
  headers: { 'X-Api-Key': process.env.POKEMONIO_KEY },
});
