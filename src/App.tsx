import { useEffect, useState } from 'react'
import ThemeContext from './context/ThemeContext'
import { fetchURL } from './utils/utils'
import { FetchApi } from './types'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  const [news, setNews] = useState<FetchApi>()

  useEffect(() => {
    const functionApi = async () => {
      const data = await fetchURL('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100')
      setNews(data)
    }
    functionApi()
  }, [])

  return (
    <ThemeContext.Provider value={ news }>
      <body className="bg-test">
        <NavBar />
        <Home />
        <Footer />
      </body>
    </ThemeContext.Provider>
  )
}

export default App
