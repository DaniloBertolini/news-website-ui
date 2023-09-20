import { useContext, useEffect, useState } from "react";
import News from "../components/NewTop";
import ThemeContext from "../context/ThemeContext";
import NewsBotton from "../components/NewsBotton";
import { Item } from "../types";
import useLocalStorage from "../hooks/useLocalStorage";

function Home() {
  const { value, updateValue } = useLocalStorage('favoriteNews', JSON.stringify([]))
  const favs = JSON.parse(value)

  const [limit, setLimit] = useState<number>(10)
  const [newsToPass, setNewsToPass] = useState<Item[]>([])
  const [newsFavorites, setNewsFavorites] = useState<Item[]>(favs)

  const themeContext = useContext(ThemeContext)

  useEffect(() => {
    if (themeContext) {
      setNewsToPass(themeContext.items)
    }
  }, [themeContext])

  const setFavorites = (item: Item) => {
    if (!newsFavorites.includes(item)) {
      setNewsFavorites([...newsFavorites, item])
      updateValue(JSON.stringify([...newsFavorites, item]))
    } else {
      const newNewsFavorites = newsFavorites.filter((news) => news.id !== item.id)
      setNewsFavorites(newNewsFavorites)
      updateValue(JSON.stringify(newNewsFavorites))
    }    
  }

  const handleClickNewsToPass = (type: string) => {
    if(themeContext) {

      switch (type) {
        case 'all':
          setNewsToPass(themeContext.items)
          
          break;

        case 'release':
          setNewsToPass(themeContext.items.filter((item) => item.tipo === 'Release'))
          break;

        case 'news':
          setNewsToPass(themeContext.items.filter((item) => item.tipo === 'Notícia'))
          break;

        case 'favorites':
          setNewsToPass(newsFavorites)
          break;

        default:
          break;
      }
    }
  }

  return (
    <main className="flex flex-col">
      { themeContext && <News dataNews={ themeContext.items[0] } setFavorites={ setFavorites }/> }

      <div>
        <button onClick={ () => handleClickNewsToPass('all') }>Mais Recentes</button>
        <button onClick={ () => handleClickNewsToPass('release') }>Release</button>
        <button onClick={ () => handleClickNewsToPass('news') }>Notícia</button>
        <button onClick={ () => handleClickNewsToPass('favorites') }>Favoritas</button>
      </div>

      { themeContext && <NewsBotton dataNews={ newsToPass } limit={ limit } setFavorites={ setFavorites } />}

      <button className="border border-red-500 text-red-500 py-4 px-8 w-fit self-center mb-7" disabled={ limit >= newsToPass.length } onClick={ () => setLimit(limit + 10) }>MAIS NOTÍCIAS</button>
    </main>
  )
}

export default Home