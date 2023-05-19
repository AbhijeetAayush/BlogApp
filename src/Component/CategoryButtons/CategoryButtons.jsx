import "./CategoryButtons.css";
import { Link } from "react-router-dom";

const CategoryButtons = () => {
    return (
        <section className="category-buttons">
            <div className="links">
                <Link to="/" className="tag" >POLITICS</Link>
                <Link to="/" className="tag" >STOCK MARKET</Link>
                <Link to="/" className="tag" >TECHNOLOGY</Link>
                <Link to="/" className="tag" >SPORTS</Link>
                <Link to="/" className="tag" >ENTERTAINMENT</Link>
                <Link to="/" className="tag" >NATURE</Link>
            </div>
        </section>
    )
}

export default CategoryButtons;