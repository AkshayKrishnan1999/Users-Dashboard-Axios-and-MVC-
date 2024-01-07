// Please don't change the pre-written code
// Import the necessary modules here
import axios from "axios";
import { response } from "express";
export const userModel = async () => {
  // Write your code here
  try {
    const response = await axios.get('https://dummyjson.com/users');
    return response.data; 
  } catch (error) {
    throw error;
  }
};
