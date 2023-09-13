import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import About from "../components/About"
import Profile from "../components/Profile"
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