const BASE_URL = "http://localhost:8080";  // Adjust if necessary for your backend

// Signup API call
export const signupUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/signup`, {  // Ensure this URL matches the backend route
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to sign up");
    }

    return data; // Return successful signup response
  } catch (error) {
    console.error("Signup error:", error);
    throw error;  // Propagate the error to the caller
  }
};

// Login API call
export const loginUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {  // Ensure this URL matches the backend route
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to log in");
    }

    return data;  // Return successful login response
  } catch (error) {
    console.error("Login error:", error);
    throw error;  // Propagate the error to the caller
  }
};
