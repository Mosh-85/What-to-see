import Button from "@mui/material/Button"
import TvIcon from '@mui/icons-material/Tv'
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import React from "react"


export default function Header({ logedIn, setLogedIn }) {
  const user = localStorage.getItem("loggedInUserName")

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleLogOut = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInUserName");
    setLogedIn("")
    handleClose() 
  }

  return (
    <header className="header">
      <nav>
        <Button className="logo" href="#text-buttons">What To See?</Button>
        <Button className="whattosee" startIcon={<TvIcon/>} href="#text-buttons" >Hva skal jeg se?</Button>
        <Button className="genre" href="#text-buttons">Bla gjennom sjangere</Button>
       
        <Button className="user"
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       {user}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu> 
      </nav>
    </header>
  )
}
