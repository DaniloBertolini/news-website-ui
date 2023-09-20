import { useContext, useEffect, useState } from "react";
import News from "../components/NewTop";
import ThemeContext from "../context/ThemeContext";
import NewsBotton from "../components/NewsBotton";
import { Item } from "../types";
import useLocalStorage from "../hooks/useLocalStorage";

function Home() {
  const { value, updateValue } = useLocalStorage('favoriteNews', JSON.stringify([]))

  const [limit, setLimit] = useState<number>(10)
  const [newsToPass, setNewsToPass] = useState<Item[]>([])
  const [newsFavorites, setNewsFavorites] = useState<Item[]>(JSON.parse(value))

  const themeContext = useContext(ThemeContext)

  useEffect(() => {
    if (themeContext) {
      setNewsToPass(themeContext.items)
    }
  }, [themeContext])

  const setFavorites = (item: Item) => {    
    if (newsFavorites.find((not) => (not.id === item.id))) {
      const newNewsFavorites = newsFavorites.filter((news) => news.id !== item.id)
      setNewsFavorites(newNewsFavorites)
      updateValue(JSON.stringify(newNewsFavorites))
    } else {
      const sortFavorites = [...newsFavorites, item].sort((a, b) => b.id - a.id)
      setNewsFavorites(sortFavorites)
      updateValue(JSON.stringify(sortFavorites))
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
      { newsToPass && <News dataNews={ newsToPass[0] } setFavorites={ setFavorites } newsFavorites={ newsFavorites }/> }

      <div>
        <button onClick={ () => handleClickNewsToPass('all') }>Mais Recentes</button>
        <button onClick={ () => handleClickNewsToPass('release') }>Release</button>
        <button onClick={ () => handleClickNewsToPass('news') }>Notícia</button>
        <button onClick={ () => handleClickNewsToPass('favorites') }>Favoritas</button>
      </div>

      { newsToPass && <NewsBotton dataNews={ newsToPass } limit={ limit } setFavorites={ setFavorites } newsFavorites={ newsFavorites }/>}

      <button className="border border-red-500 text-red-500 py-4 px-8 w-fit self-center mb-7" disabled={ limit >= newsToPass.length } onClick={ () => setLimit(limit + 10) }>MAIS NOTÍCIAS</button>
    </main>
  )
}

export default Home