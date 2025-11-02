import axios from "axios";

export const loginUser = async (payload) => {
  return axios.post("/api/auth/login", payload);
};

export const registerUser = async (payload) => {
  return axios.post("/api/auth/register", payload);
};
