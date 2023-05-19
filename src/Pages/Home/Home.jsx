import "./Home.css";
import Headline from "../../Component/Headline/Headline";
import Posts from "../../Component/Posts/Posts";

const Home = () => {
    return (
        <div className="home">
            <Headline/>
            <Posts/>
        </div>
    )
}

export default Home;