import React, { createContext, useState, useEffect } from "react";
import {users} from "../../Data/Users"

// Create Context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to log in
  const login = async (email, password) => {
    try {
      
      const foundUser = users.find(
        (u) => u["Email"] === email && u["Password"] === password);

      if (foundUser) {
        setUser(foundUser);         
        localStorage.setItem("user", JSON.stringify(foundUser)); // Store user data
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      return false;
    }
  };

  // Function to log out
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
