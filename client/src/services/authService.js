  
  
  
  import api from "./api"; // Import the axios instance




// Signup API call
export const signupUser = async (userData) => {
  try {
    const response = await api.post("/auth/signup", userData); // Use axios for the request
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Signup error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to sign up");
  }
};





// Login API call
export const loginUser = async (userData) => {
  try {
    const response = await api.post("/auth/login", userData); // Use axios for the request
    return response.data; // Contains JWT and user info
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to log in");
  }
};
