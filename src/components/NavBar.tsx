import profileIcon from '/profile.svg'
import website2Icon from '/website2.svg'

function NavBar() {
  return (
    <div className="relative">
      <nav className="bg-cyan-900 flex justify-between p-6 fixed top-0 left-0 right-0">
        <img className="shadow-lg" src={ website2Icon } alt="svg navbar" />
        <div>
          <img src={ profileIcon } alt="svg profile" />
        </div>
      </nav>
    </div>
  )
}

export default NavBar