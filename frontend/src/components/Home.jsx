import React from "react";
import Login from "./Login";
import { fetchAllUsers } from "../../sanity/services.js/userServices";
import { useEffect, useState } from "react";


export default function Home({ setLogedIn, setUserId, userName }) {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const data = await fetchAllUsers();
    setUsers(data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);



  return (
    <section>
      {userName = localStorage.getItem("loggedInUser") ? (
        <>
          <p>Welcome: {userName}</p>
        </>
      ) : (
        <Login users={users} setLogedIn={setLogedIn} setUserId={setUserId} />
      )}
    </section>
  )
}


