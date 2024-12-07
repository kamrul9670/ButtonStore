import axios from "axios";

const api = axios.create({
  baseURL: "button-store-lzy3.vercel.app", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
