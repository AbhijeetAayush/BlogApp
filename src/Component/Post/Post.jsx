import { Link } from "react-router-dom";
import "./Post.css";

const Post = () => {
    return (
        <article className="post">
            <img src="/Assets/Images/ADANI.jpeg" alt="" className="thumbnail" />
            <div className="tag">STOCKS</div>
            <h3 className="title"><Link to="/">Adani Group stocks hit lower circuits</Link></h3>
            <div className="peek">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi iste officia distinctio esse nulla omnis tempora dolores delectus debitis praesentium totam itaque rem repellendus illum sit, ea soluta fugiat unde.</div>
            <div className="author">
                <img src="/Assets/Images/Gaiety.jpeg" alt="" />
                <div className="name-wrapper">
                    <div>By: <span className="name">Gaiety Bhabhya</span></div>
                    <div className="date">Jan 25, 2023</div>
                </div>
            </div>
        </article>
    )
}

export default Post;