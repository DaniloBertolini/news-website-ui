import { useEffect, useState } from 'react'
import './App.css'
import ThemeContext from './context/ThemeContext'
import Routes from './routes/routes'
import { fetchURL } from './utils/utils'
import { FetchApi } from './types'

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
      <Routes />
    </ThemeContext.Provider>
  )
}

export default App
