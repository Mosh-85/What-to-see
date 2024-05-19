import React from "react";
import Login from "./Login";
import Userprofile from "./Userprofile";
import { fetchAllUsers } from "../../sanity/services.js/userServices";
import { useEffect, useState } from "react";

export default function Home({ setLogedIn, userName, user2Name, userId }) {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const data = await fetchAllUsers();
    setUsers(data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <main>
      {
        (userName = localStorage.getItem("loggedInUser") ? (
          <>
            <Userprofile
              userName={userName}
              user2Name={user2Name}
              users={users}
              setLogedIn={setLogedIn}
              userId={userId}
            />
          </>
        ) : (
          <Login users={users} setLogedIn={setLogedIn} />
        ))
      }
    </main>
  );
}
