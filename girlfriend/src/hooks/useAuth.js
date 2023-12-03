import { useState, useEffect } from "react";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const dataUser = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || " ")
      : {};
    if (dataUser) {
      setUser(dataUser);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return { isLoggedIn, user };
};

export default useAuth;
