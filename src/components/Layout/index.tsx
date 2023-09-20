import { Outlet } from "react-router-dom"
import NavBar from "../NavBar"
import Footer from "../Footer"

function Layout() {
  return (
    <body className="bg-test">
      <NavBar />
      <Outlet />
      <Footer />
    </body>
  )
}

export default Layout