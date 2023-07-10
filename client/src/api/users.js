import axios from "axios";
export const fetchUsers = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/users");
    console.log(response.data.users);
    return response.data.users;
  } catch (error) {
    console.log("Error Fetching", error);
  }
};
