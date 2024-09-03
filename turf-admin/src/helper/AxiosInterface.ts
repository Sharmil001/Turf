import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/",
});

// Request Interceptor: Attach JWT token to headers if available
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle response errors like 401
axiosInstance.interceptors.response.use(
  (response) => {
    // Return the response if no error occurs
    return response;
  },
  (error) => {
    // Handle response errors
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("jwtToken");

      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
