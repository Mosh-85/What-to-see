import { Link } from "react-router-dom";

export default function Loginfriend({ users, setLogedIn }) {
  return (
    <>
      <h3>Jeg skal se sammen med...</h3>
      <ul>
        {users
          .filter(
            (user) => user.name !== localStorage.getItem("loggedInUserName")
          )
          .map((user, i) => (
            <Link
              to="/dashboard"
              className="button"
              key={i}
              variant="contained"
              onClick={() => {
                localStorage.setItem("loggedInUser2", user._id);
                localStorage.setItem("loggedInUserName2", user.name);
                setLogedIn(user.name);
              }}
            >
              {user.name}
            </Link>
          ))}
      </ul>
    </>
  );
}
