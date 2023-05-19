import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="social">
            <Link to="/" className="icn"><i className="uil uil-youtube"></i></Link>
            <Link to="/" className="icn"><i className="uil uil-facebook"></i></Link>
            <Link to="/" className="icn"><i className="uil uil-instagram-alt"></i></Link>
            <Link to="/" className="icn"><i className="uil uil-linkedin"></i></Link>
            <Link to="/" className="icn"><i className="uil uil-twitter"></i></Link>
        </div>
        <div className="links">
            <div>
                <h4>Cateogries</h4>
                <Link to="/" className="link">Politics</Link>
                <Link to="/" className="link">Stock Market</Link>
                <Link to="/" className="link">Technology</Link>
                <Link to="/" className="link">Sports</Link>
                <Link to="/" className="link">Entertainment</Link>
                <Link to="/" className="link">Nature</Link>
            </div>
            <div>
                <h4>Support</h4>
                <Link to="/" className="link">Online Support</Link>
                <Link to="/" className="link">Phone Numbers</Link>
                <Link to="/" className="link">Emails</Link>
                <Link to="/" className="link">Sports</Link>
            </div>
            <div>
                <h4>Permalinks</h4>
                <Link to="/" className="link">Home</Link>
                <Link to="/" className="link">Blog</Link>
                <Link to="/" className="link">News</Link>
                <Link to="/" className="link">Contact</Link>
                <Link to="/" className="link">Sign In</Link>
            </div>
        </div>
        <div className="copy-right">
            <small>Copyright &copy; 2022 WRITING KIDA</small>
        </div>
    </footer>
  )
}

export default Footer;