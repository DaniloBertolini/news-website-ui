import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Layout from "../components/Layout"

function routes() {
  return (
    <>
      <Routes>
        <Route path="/" Component={ Layout } >
          <Route index Component={ Home } />
        </Route>
      </Routes>
    </>
  )
}

export default routes