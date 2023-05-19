import Posts from "../../Component/Posts/Posts";
import "./News.css";

const News = () => {
  return (
    <div className="news">
        <div className="heading" >Top 10 of The Day</div>
        <Posts/>
    </div>
  )
}

export default News;