import React from "react";
import Login from "./Login";
import { fetchAllUsers } from "../../sanity/services.js/userServices";
import { useEffect, useState } from "react";
import { apiClient } from "../../imdbapi/apiClient";




export default function Home({ logedIn }) {
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
      {logedIn ? (
        <>
          <p>Welcome: {logedIn}</p>
        </>
      ) : (
        <Login users={users} />
      )}
    </section>
  )
}


