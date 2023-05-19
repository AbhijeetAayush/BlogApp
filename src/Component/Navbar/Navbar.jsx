import "./Navbar.css";
import React from "react";
import { Popover } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
    return (
        <nav className="navbar" >
            <div className="container">
                <a href="/" className="logo">WRITING KIDA</a>
                <div className="navigation-wrapper">
                    <div className="navigation">
                        <Link to="/blogs" className="link">BLOGS</Link>
                        <Link to="/news" className="link">NEWS</Link>
                        <Link to="/" className="link">CONTACT</Link>
                        <Link to="/" className="link">SIGN IN</Link>
                        <Link to="/" className="link">ABOUT</Link>
                    </div>
                    <div className="avatar" aria-describedby={id} onClick={handleClick}></div>
                </div>
            </div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <div className="popover">
                    <div className="mobile-links">
                        <Link to="/blogs" className="link">BLOGS</Link>
                        <Link to="/news" className="link">NEWS</Link>
                        <Link to="/" className="link">CONTACT</Link>
                        <Link to="/" className="link">SIGNIN</Link>
                        <Link to="/" className="link">ABOUT</Link>

                    </div>
                    <Link to="/" className="link">DASHBOARD</Link>
                    <Link to="/" className="link">LOGOUT</Link>
                </div>
            </Popover>
        </nav>
    )
}

export default Navbar;