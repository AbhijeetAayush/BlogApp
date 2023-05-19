import "./Headline.css";

const Headline = () => {
  return (
    <section className="headline">
        <img className="thumbnail" src="/Assets/Images/Pm.jpeg" alt="" />
        <div className="info">
            <div className="tag">POLITICS</div>
            <h2 className="title">PM of INDIA</h2>
            <div className="peek">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed molestiae asperiores impedit hic, voluptatibus accusamus quas debitis eius totam dicta reprehenderit, consequatur inventore vitae. Architecto quisquam dicta veniam aperiam esse.</div>
            <div className="author">
                <img src="/Assets/Images/Gaiety.jpeg" alt="" />
                <div className="name-wrapper">
                    <div>By: <span className="name">Gaiety Bhabhya</span></div>
                    <div className="date">Jan 25, 2023</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Headline;