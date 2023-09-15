import { Item } from "../types";

type NewsType = {
  dataNews: Item[]
  limit: number
}

function NewsBotton({dataNews, limit}: NewsType) {
  const limitedNews = dataNews.slice(1, limit)
  return (
    <div>
      {limitedNews.map((item, index) => {
        return (
          <div key={index}>
            {/* <span>Noticia mais recente</span> */}
            <h2>{item.titulo}</h2>
            <p>{item.introducao}</p>
            <button>
              <a href={item.link}>Leia a notícia aqui</a>
            </button>
            <button>favorito</button>
          </div>
        )
      })}
    </div>
  )
}

export default NewsBotton