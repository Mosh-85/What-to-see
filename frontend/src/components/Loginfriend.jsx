import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

export default function Loginfriend({ users, setLogedIn}) {

  const navigate = useNavigate()

    return (
    <>
        <h4>Jeg skal se sammen med...</h4>
        <ul>
        {users.filter(user => user.name !== localStorage.getItem("loggedInUserName"))
        .map((user, i) => (
          <li key={i}>
            <Button
              variant="contained"
              onClick={() => {
                localStorage.setItem("loggedInUser2", user._id);
                localStorage.setItem("loggedInUserName2", user.name);
                setLogedIn(user.name)
                navigate("/dashboard")
                //KILDE: https://www.geeksforgeeks.org/reactjs-usenavigate-hook/?ref=ml_lbp
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