import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar" >
            <div className="container">
                <a href="/" className="logo">WRITING KIDA</a>
                <ul className="navigation">
                    <li><a href="/">BLOG</a></li>
                    <li><a href="/">NEWS</a></li>
                    <li><a href="/">CONTACT</a></li>
                    <li><a href="/">SIGN IN</a></li>
                    <li><a href="/">ABOUT</a></li>
                    <li className="avatar"></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;