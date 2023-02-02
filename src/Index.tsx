import { Link } from "react-router-dom"
import "./index.scss";

const Index = () => {


  return (
    <div id="main">
      <Link to="/dalle">DallE</Link>
      <Link to="/chatgpt">ChatGPT</Link>
    </div>
  )
}

export default Index;