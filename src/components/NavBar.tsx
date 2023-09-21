import profileIcon from '/profile.svg'
import website2Icon from '/website2.svg'
import usersIcon from '/users.svg'
import { useState } from 'react'

function NavBar() {
  const [icon, setIcon] = useState(profileIcon)
  const handleChange = () => {
    if (icon === profileIcon) {
      setIcon(usersIcon)
    } else {
      setIcon(profileIcon)
    }    
  }

  return (
    <div className="relative">
      <nav className="bg-cyan-900 flex justify-between p-6 fixed top-0 left-0 right-0">
        <img className="shadow-lg animate-pulse" src={ website2Icon } alt="svg navbar" />
        <div>
          <img onMouseEnter={ handleChange } onMouseLeave={ handleChange } src={ icon } className='animate-pulse' alt="svg profile" />
        </div>
      </nav>
    </div>
  )
}

export default NavBar