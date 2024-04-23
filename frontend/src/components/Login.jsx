import { useEffect, useState } from "react";
import { fetchAllUsers } from "../../sanity/services.js/userServices";
import Button from "@mui/material/Button";

export default function Login() {
  const [users, setUsers] = useState([]);
  const [logedIn, setLogedIn] = useState("Not loged in");

  const getAllUsers = async () => {
    const data = await fetchAllUsers();
    setUsers(data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <h1>Login</h1>
      <p>{logedIn}</p>
      <ul>
        {users.map((user, i) => (
          <li key={i}>
            <Button
              variant="contained"
              onClick={() => {
                localStorage.setItem("loggedInUser", user._id);
                localStorage.setItem("loggedInUserName", user.name);
                setLogedIn(user.name);
              }}
            >
              {user.name}
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}
