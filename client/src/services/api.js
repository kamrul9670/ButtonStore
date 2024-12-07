import axios from "axios";

const api = axios.create({
  baseURL: "https://button-store-tmeo.vercel.app/", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
