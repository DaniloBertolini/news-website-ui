import { useContext, useEffect, useState } from "react";
import News from "../components/NewTop";
import ThemeContext from "../context/ThemeContext";
import NewsBotton from "../components/NewsBotton";
import { Item } from "../types";

function Home() {
  const [limit, setLimit] = useState<number>(10)
  const [newsToPass, setNewsToPass] = useState<Item[]>([])

  const themeContext = useContext(ThemeContext)

  useEffect(() => {
    if (themeContext) {
      setNewsToPass(themeContext.items)
    }
  }, [themeContext])

  const handleClickNewsToPass = (type: string) => {
    if(themeContext) {

      switch (type) {
        case 'all':
          setNewsToPass(themeContext.items)          
          break;

        case 'release':
          // const newsRelease = themeContext.items.filter((item) => item.tipo === 'release')
          setNewsToPass(themeContext.items.filter((item) => item.tipo === 'Release'))
          break;

        case 'news':
          setNewsToPass(themeContext.items.filter((item) => item.tipo === 'Notícia'))
          break;

        case 'favorites':
          setNewsToPass(themeContext.items)
          break;

        default:
          break;
      }
    }
  }
  
  return (
    <div>
      <h1>Home</h1>
      { themeContext && <News dataNews={ themeContext.items[0] }/> }
      <button onClick={ () => handleClickNewsToPass('all') }>Mais recentes</button>
      <button onClick={ () => handleClickNewsToPass('release') }>Release</button>
      <button onClick={ () => handleClickNewsToPass('news') }>Notícia</button>
      <button onClick={ () => handleClickNewsToPass('favorites') }>Favoritas</button>
      { themeContext && <NewsBotton dataNews={ newsToPass } limit={ limit }/>}

      <button disabled={ limit === 100 } onClick={ () => setLimit(limit + 10)}>MAIS NOTÍCIAS</button>
    </div>
  )
}

export default Home