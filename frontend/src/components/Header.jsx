import React from "react"
import { useNavigate } from "react-router-dom"
import { CgScreen } from "react-icons/cg";
import { Avatar } from "@mui/material"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"



export default function Header({ setLogedIn, userName }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleLogOut = () => {
    localStorage.removeItem("loggedInUser")
    localStorage.removeItem("loggedInUserName")
    localStorage.removeItem("loggedInUser2")
    localStorage.removeItem("loggedInUserName2")
    setLogedIn("")
    handleClose()
    navigate("/")
    //KILDE: https://www.geeksforgeeks.org/reactjs-usenavigate-hook/?ref=ml_lbp
  }

  return (
    <header className="header">
      <nav>
        <a href="/" className="logo">What To See?</a>

        <Menu aria-labelledby="demo-positioned-button" anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleLogOut} >Logout</MenuItem>
        </Menu> 
        <a href="/" className="toosee"><CgScreen className="tv"/>  Hva skal jeg se?</a>
        <a className="genre" href="/genres">Bla gjennom sjangere</a>
        <a className="user" aria-controls={open ? 'demo-positioned-menu' : undefined} aria-haspopup="true"aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
          <Avatar className="avatar" variant="square">{userName}</Avatar>
          {/* KILDE: https://mui.com/material-ui/react-avatar/ */}
        </a>

      </nav>
    </header>
  )
} 
