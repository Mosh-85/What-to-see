import { Button } from "@mui/material";

export default function Loginfriend({ users, setLogedIn}) {
    return (
    <>
        <h4>Jeh skal se sammen med...</h4>
        <ul>
        {users.filter(user => user.name !== localStorage.getItem("loggedInUserName"))
        .map((user, i) => (
          <li key={i}>
            <Button
              variant="contained"
              onClick={() => {
                localStorage.setItem("loggedInUser2", user._id);
                localStorage.setItem("loggedInUserName2", user.name);
                setLogedIn(user.name);
              }}
            >
              {user.name}
            </Button>
          </li>
        ))}
      </ul>
    </>
    )
}