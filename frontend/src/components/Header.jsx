import Button from "@mui/material/Button"
import TvIcon from '@mui/icons-material/Tv'
import { Avatar } from "@mui/material"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import React from "react"
import { Link } from "react-router-dom"


export default function Header( {logedIn} ) {
  

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
    handleClose() 
  }
  

  return (
    <header className="header">
      <nav>
        <Button className="logo" href="./">What To See?</Button>
        <Button className="whattosee" startIcon={<TvIcon/>} href="./postpage" >Hva skal jeg se?</Button>
        <Button className="genre" href="./Genres">Bla gjennom sjangere</Button>
        <Button className="user" 
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <Avatar className="avatar">{logedIn}</Avatar>
      </Button>
      <Menu 
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogOut}><Link to="/">Logout</Link></MenuItem>
      </Menu> 
      </nav>
    </header>
  )
}
