import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <nav>
      <NavLink to="/profile">Profile</NavLink>
      <p>pesquisar</p>
      <p>3 risquinhos</p>
    </nav>
  )
}

export default NavBar