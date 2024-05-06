import React from "react";
import Login from "./Login";
import Userprofile from "./Userprofile";
import { fetchAllUsers } from "../../sanity/services.js/userServices";
import { useEffect, useState } from "react";



export default function Home({ setLogedIn, setUserId, userName, user2Name }) {
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
          <Userprofile userName={userName} user2Name={user2Name} users={users} setLogedIn={setLogedIn}/>
        </>
      ) : (
        <Login users={users} setLogedIn={setLogedIn} setUserId={setUserId} />
      )}
    </section>
  )
}


