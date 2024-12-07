import axios from "axios";

const api = axios.create({
  baseURL: "https://button-store-lzy3.vercel.app", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
