import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const getApiData = async () => {
  try {
    const response = await api.get("/products");
    return response?.data?.products;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

export const deleteProduct = async (id) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};

export const updateProduct = async ({ id, updatedData }) => {
  const response = await api.patch(`/products/${id}`, updatedData);
  return response.data;
};