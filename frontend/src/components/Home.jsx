import React from "react";
import Login from "./Login";
import { fetchAllUsers } from "../../sanity/services.js/userServices";
import { useEffect, useState } from "react";
import Genres from "./Genres";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [logedIn, setLogedIn] = useState(false);

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
          <p>{logedIn}</p>
          <Genres />

          <button
            onClick={() => {
              localStorage.removeItem("loggedInUser");
              localStorage.removeItem("loggedInUserName");
              setLogedIn("");
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <Login users={users} setLogedIn={setLogedIn} />
      )}
    </section>
  );
}
