import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CgScreen, CgBoard } from "react-icons/cg";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";
import { Avatar } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Header({ setLogedIn, userName, user2Name }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInUserName");
    localStorage.removeItem("loggedInUser2");
    localStorage.removeItem("loggedInUserName2");
    setLogedIn("");
    handleClose();
    navigate("/");
    //KILDE: https://www.geeksforgeeks.org/reactjs-usenavigate-hook/?ref=ml_lbp
  };

  return (
    <header className="header">
      <h1>
        <a href="/" className="logo">
          What To See?
        </a>
      </h1>
      <nav className="myNav">
        <Menu
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem className="button" onClick={handleLogOut}>
            Logg ut
          </MenuItem>
        </Menu>
        <NavLink to="/" className="nav-button">
          <CgScreen />
          <p> Hva skal jeg se?</p>
        </NavLink>

        {
          (user2Name = localStorage.getItem("loggedInUser2") ? (
            <NavLink to="/dashboard" className="nav-button">
              <CgBoard />
              <p> Sammenligning </p>
            </NavLink>
          ) : (
            ""
          ))
        }
        <NavLink to="/genres" className="nav-button">
          <MdOutlinePlaylistAddCheck />
          <p> Bla gjennom sjangere</p>
        </NavLink>
        {/* KILDE: https://reactrouter.com/en/main/components/nav-link */}
      </nav>
      <a
        className="user"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar className="avatar" variant="square">
          {userName}
        </Avatar>
        {/* KILDE: https://mui.com/material-ui/react-avatar/ */}
      </a>
    </header>
  );
}
