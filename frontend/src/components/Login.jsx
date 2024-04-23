import { useEffect, useState } from "react";

import Button from "@mui/material/Button";

export default function Login({ users, setLogedIn }) {
  return (
    <article className="login">
      <h1>Login</h1>

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
    </article>
  );
}
