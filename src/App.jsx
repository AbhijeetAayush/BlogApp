
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Base from "./Pages/Base/Base";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import News from "./Pages/News/News";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Base/>}>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;