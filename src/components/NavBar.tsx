import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <div className="relative">
      <nav className="bg-cyan-900 flex justify-between p-6 fixed top-0 left-0 right-0">
        <img className="shadow-lg" src="/website2.svg" alt="svg navbar" />
        <NavLink to="/profile">
          <button>
            <div>
            <img src="/profile.svg" alt="svg profile" />
            </div>
          </button>
        </NavLink>
      </nav>
    </div>
  )
}

export default NavBar