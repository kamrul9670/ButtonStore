   


   import React, { createContext, useState, useContext } from "react";

   // Create AuthContext
   const AuthContext = createContext();
   
   // Custom hook to use AuthContext
   export const useAuth = () => useContext(AuthContext);
   
   export const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
   
     const login = (userData) => {
       setUser(userData); // Set user data
       localStorage.setItem("authToken", userData.jwtToken); // Save token
     };
   
     const logout = () => {
       setUser(null); // Clear user data
       localStorage.removeItem("authToken"); // Remove token
     };
   
     return (
       <AuthContext.Provider value={{ user, login, logout }}>
         {children}
       </AuthContext.Provider>
     );
   };
   