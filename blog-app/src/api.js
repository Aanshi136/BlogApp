import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    console.log(posts)
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const addPost = async (postData) => {
  try {
    const response = await axios.post(`${API_URL}/posts`, postData);
    return response.data;
  } catch (error) {
    console.error("Error adding post:", error);
    return null;
  }
};

export const editPost = async (id, updatedData) => {
    
  try {
    const response = await axios.put(`${API_URL}/posts/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating post:", error);
    return null;
  }
};

export const deletePost = async (id) => {
  try {
    await axios.delete(`${API_URL}/posts/${id}`);
  } catch (error) {
    console.error("Error deleting post:", error);
  }
};
