import { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import axios from "axios";

const Home = () => {

  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/users/me`,
          {
            withCredentials: true,
          }
        );
  
        setUser(data.user);
      } catch (err) {
          window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`;
      }
    };
  
      getUser();
    }, []);

  return (
    <>
      <TopBar user={user} />
      <Dashboard user={user} />
    </>
  );
};

export default Home;
