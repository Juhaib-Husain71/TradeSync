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
          "http://localhost:3001/users/me",
          {
            withCredentials: true,
          }
        );
  
        setUser(data.user);
      } catch (err) {
          window.location.href = "http://localhost:5173/login";
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
