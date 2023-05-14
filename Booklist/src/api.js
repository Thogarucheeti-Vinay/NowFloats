//api.js
import axios from "axios";

const API_BASE_URL = "https://booklistbackend-production.up.railway.app";

export const getBook = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/books/${id}`);
  console.log("got book");
  return response.data;
};

export const getBooks = async () => {
  const response = await axios.get(`${API_BASE_URL}/books`);
  console.log("got books");
  return response.data;
};

export const addBook = async (title, author) => {
  const response = await axios.post(`${API_BASE_URL}/books`, { title, author });
  return response.data;
};
