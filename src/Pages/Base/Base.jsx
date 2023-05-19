import Headline from "../../Component/Headline/Headline";
import Navbar from "../../Component/Navbar/Navbar";
import Home from "../Home/Home";
import "./Base.css";

const Base = () => {
  return (
    <div className="base">
        <Navbar/>
        <div className="main">
            <Headline/>
            <Home/>
        </div>
    </div>
  )
}

export default Base;