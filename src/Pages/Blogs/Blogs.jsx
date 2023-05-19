import Posts from "../../Component/Posts/Posts";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
        <div className="search">
            <div>
                <i class="uil uil-search"></i>
                <input type="text" placeholder="Search" />
            </div>
            <button>Go</button>
        </div>
        <Posts/>
    </div>
  )
}

export default Blogs;