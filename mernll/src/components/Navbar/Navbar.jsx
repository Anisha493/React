import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </nav>
    </div>
    
  )
}

export default Navbar