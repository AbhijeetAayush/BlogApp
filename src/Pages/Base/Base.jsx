import "./Base.css";
import CategoryButtons from "../../Component/CategoryButtons/CategoryButtons";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Base = () => {
  return (
    <div className="base">
        <Navbar />
        <div className="main">
          <Outlet/>
        </div>
        <CategoryButtons />
        <Footer />
    </div>
  )
}

export default Base;