import { useContext, useState } from "react";
import News from "../components/NewTop";
import ThemeContext from "../context/ThemeContext";
import NewsBotton from "../components/NewsBotton";

function Home() {
  const [limit, setLimit] = useState(10)
  // const [newsToPass, setNewsToPass] = useState([])

  const themeContext = useContext(ThemeContext)
  return (
    <div>
      <h1>Home</h1>
      { themeContext && <News dataNews={ themeContext.items[0] }/> }
      <button>Mais recentes</button>
      <button>Release</button>
      <button>Notícia</button>
      <button>Favoritas</button>
      { themeContext && <NewsBotton dataNews={ themeContext.items } limit={ limit }/>}

      <button disabled={ limit === 100 } onClick={ () => setLimit(limit + 10)}>MAIS NOTÍCIAS</button>
    </div>
  )
}

export default Home