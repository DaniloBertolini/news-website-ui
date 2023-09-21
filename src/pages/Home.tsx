import { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import NewsBotton from "../components/NewsBotton";
import { Item } from "../types";
import useLocalStorage from "../hooks/useLocalStorage";

function Home() {
  const { value, updateValue } = useLocalStorage('favoriteNews', JSON.stringify([]))

  const [theme, setTheme] = useState('MAIS RECENTES')
  const [limit, setLimit] = useState<number>(10)
  const [newsToPass, setNewsToPass] = useState<Item[]>([])
  const [newsFavorites, setNewsFavorites] = useState<Item[]>(JSON.parse(value))

  const themeContext = useContext(ThemeContext)

  useEffect(() => {
    if (themeContext) {
      setNewsToPass(themeContext.items)
      setTheme('MAIS RECENTES')
    }
  }, [themeContext])

  const setFavorites = (item: Item) => {    
    if (newsFavorites.find((not) => (not.id === item.id))) {
      const newNewsFavorites = newsFavorites.filter((news) => news.id !== item.id)
      setNewsFavorites(newNewsFavorites)
      setNewsToPass(newNewsFavorites)
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
          setTheme('MAIS RECENTES')
          break;

        case 'release':
          setNewsToPass(themeContext.items.filter((item) => item.tipo === 'Release'))
          setTheme('RELEASE')
          break;

        case 'news':
          setNewsToPass(themeContext.items.filter((item) => item.tipo === 'Notícia'))
          setTheme('NOTÍCIA')
          break;

        case 'favorites':
          setNewsToPass(newsFavorites)
          setTheme('FAVORITAS')
          break;

        default:
          break;
      }
    }
  }

  return (
    <main className="flex flex-col min-h-screen">
      <h2 className="pt-48 self-center text-2xl">{ theme }</h2>
      <div className="relative">
        <div className="fixed top-20 left-0 right-0 flex justify-center gap-4 md:gap-20 lg:gap-36 bg-verdigris py-3 text-azulClaro drop-shadow-lg">
          <button onClick={ () => handleClickNewsToPass('all') }>Mais Recentes</button>
          <button onClick={ () => handleClickNewsToPass('release') }>Release</button>
          <button onClick={ () => handleClickNewsToPass('news') }>Notícia</button>
          <button onClick={ () => handleClickNewsToPass('favorites') }>Favoritas</button>
        </div>
      </div>
      
      { newsToPass && <NewsBotton dataNews={ newsToPass } limit={ limit } setFavorites={ setFavorites } newsFavorites={ newsFavorites }/>}

      <button className="border border-red-500 text-red-500 py-4 px-8 w-fit self-center mb-7" hidden={ limit >= newsToPass.length } onClick={ () => setLimit(limit + 10) }>MAIS NOTÍCIAS</button>
    </main>
  )
}

export default Home