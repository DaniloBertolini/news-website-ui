import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <nav>
      <img src="/website2.svg" alt="svg navbar" />
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  )
}

export default NavBar