import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <nav className="bg-cyan-900 flex justify-between p-6">
      <img className="shadow-lg" src="/website2.svg" alt="svg navbar" />
      <NavLink to="/profile">
        <button>
          <div>
          <img src="/profile.svg" alt="svg profile" />
          </div>
        </button>
      </NavLink>
    </nav>
  )
}

export default NavBar