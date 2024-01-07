// userModel
// Import the necessary modules here
import axios from "axios";

import { userModel } from '../models/users.model.js';

export const userController = async (req, res) => {
 // Inside userController
// Inside userController
try {
  const response = await userModel();

  // Assuming users is an array
  const users = response.users;

  // Ensure users is an array before accessing its properties
  const formattedUsers = users.map(user => ({
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
    mobile: user.phone,
    gender: user.gender,
    city: user.city, 
    pincode: user.address.postalCode,
    profileImage: user.image,
  }));

  res.render("index", { users: formattedUsers });
} catch (error) {
  console.error(error);
  res.status(500).send("Internal Server Error");
}


};
