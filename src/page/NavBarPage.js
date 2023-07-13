import { Link } from "react-router-dom";

function NavBarPage() {

  return(
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/phones">Phones</Link>
    </nav>
  )
}

export default NavBarPage;