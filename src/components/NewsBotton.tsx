import { Item } from "../types";

type NewsType = {
  dataNews: Item[]
}

function NewsBotton({dataNews}: NewsType) {
  return (
    <div>
      {dataNews.map((item, index) => {
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