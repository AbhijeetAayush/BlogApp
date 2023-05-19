import "./Home.css"
import Post from "../../Component/Post/Post";

const Home = () => {
    return (
        <div className="home">
            <section className="post-wrapper">
                <Post />
                <Post />
                <Post />
                <Post />
            </section>
        </div>
    )
}

export default Home;