import { Link } from "react-router-dom";
import "../styles/Home.css"

const Home = () => {
    return (
      <div>
        <h3>All Articles</h3>
        <ul>
          <li><Link to="/article/1">Article1</Link></li>
          <li><Link to="/article/2">Article2</Link></li>
          <li><Link to="/article/3">Article3</Link></li>
          <li><Link to="/article/4">Article4</Link></li>
          <li><Link to="/article/5">Article5</Link></li>
        </ul>
      </div>
    );
  };
  
  export default Home;
  