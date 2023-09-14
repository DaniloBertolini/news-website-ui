import { useContext } from "react";
import News from "../components/NewTop";
import ThemeContext from "../context/ThemeContext";
import NewsBotton from "../components/NewsBotton";

function Home() {
  const themeContext = useContext(ThemeContext)
  return (
    <div>
      <h1>Home</h1>
      { themeContext && <News dataNews={ themeContext.items[0]}/> }
      <p>This is the home page</p>
      {/* { themeContext && <NewsBotton dataNews={ themeContext.items}/>} */}
    </div>
  )
}

export default Home