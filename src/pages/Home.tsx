import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

function Home() {
  const themeContext = useContext(ThemeContext)

  console.log(themeContext);
  
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page</p>
    </div>
  )
}

export default Home