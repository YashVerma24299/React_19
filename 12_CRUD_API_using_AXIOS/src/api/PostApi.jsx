// import axios from 'axios';

// const api = axios.create({
//     baseURL:'https://jsonplaceholder.typicode.com'
// })

// //get method
// export const getApi = ()=>{
//     return api.get('/posts')
// }

// // delete
// export const deleteApi =(id)=>{
//     return api.delete(`/posts/${id}`);
// }

// // post
// export const postApi=(data)=>{
//     return api.post('/posts',data);
// }

// //Put
// export const updateApi=(id,data)=>{
//     return api.put(`/posts/${id}`,data);
// }

import axios from "axios";

// Create axios instance
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// REQUEST INTERCEPTOR
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    console.log("Authorize");
  }

  console.log("REQUEST:", config); // for debugging
  return config;
});

// RESPONSE INTERCEPTOR
api.interceptors.response.use(
  (response) => {
    console.log("RESPONSE:", response);
    return response;
  },
  (error) => {
    console.log("ERROR:", error);
    return Promise.reject(error);
  }
);

// GET
function handleAxiosError(error) {
  if (error.code === "ECONNABORTED") {
    return "Timeout! Server too slow.";
  }

  if (!error.response) {
    return "No internet connection!";
  }

  switch (error.response.status) {
    case 400:
      return "Bad Request!";
    case 401:
      return "Unauthorized!";
    case 403:
      return "Forbidden!";
    case 404:
      return "Not Found!";
    case 500:
      return "Server Error!";
    default:
      return "Something went wrong.";
  }
}
export const getApi = async () => {
  try {
    const res = await api.get("/posts", {
      params: {
        _limit: 10
      },
    });
    return res;
  } catch (err) {
    alert(handleAxiosError(err));
  }
};

// DELETE
export const deleteApi = (id) => api.delete(`/posts/${id}`);

// POST
export const postApi = (data) => api.post("/posts", data);

// PUT
export const updateApi = (id, data) => api.put(`/posts/${id}`, data);

export default api;
