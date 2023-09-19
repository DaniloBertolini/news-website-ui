import { NewsTypeNewsBotton } from "../types";
import { publicationDayFunction } from "../utils/utils";

function NewsBotton({dataNews, limit, setFavorites}: NewsTypeNewsBotton) {
  const limitedNews = dataNews.slice(0, limit)

  return (
    <div>
      {limitedNews.map((item, index) => {
        return (
          <section key={index}>
            <h2>{item.titulo}</h2>
            <p>{item.introducao}</p>
            {
            publicationDayFunction(item.data_publicacao) === 0
              ? <p>Hoje</p>
              : <p> {(publicationDayFunction(item.data_publicacao) > 1
                ? publicationDayFunction(item.data_publicacao) + ' dias'
                : 1 + ' dia')} atrás</p>}
            <button>
              <a href={item.link}>Leia a notícia aqui</a>
            </button>
            <button onClick={ () => {
              
              setFavorites(item)
            }}>favorito</button>
          </section>
        )
      })}
    </div>
  )
}

export default NewsBotton