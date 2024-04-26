import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Login({ users }) {
  return (
    <article className="login">
      <h3>Who is watching today?</h3>
      <p>Choose a profile</p>

      <ul>
        {users.map((user, i) => (
          <li key={i}>
            <Button
              variant="contained"
              onClick={() => {
                localStorage.setItem("loggedInUser", user._id);
                localStorage.setItem("loggedInUserName", user.name);
              }}
            ><Link to="/postpage"> 
              {user.name}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </article>
  );
}
