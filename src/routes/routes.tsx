import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Profile from "../pages/Profile"
import Layout from "../components/Layout"

function routes() {
  return (
    <>
      <Routes>
        <Route path="/" Component={ Layout } >
          <Route index Component={ Home } />
          <Route path="about" Component={ About } />
          <Route path="profile" Component={ Profile } />
        </Route>
      </Routes>
    </>
  )
}

export default routes