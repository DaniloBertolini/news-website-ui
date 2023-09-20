import useLocalStorage from "../hooks/useLocalStorage";
import { Item, NewsTypeNewsBotton } from "../types";
import { publicationDayFunction } from "../utils/utils";

function NewsBotton({dataNews, limit, setFavorites }: NewsTypeNewsBotton) {
  const limitedNews = dataNews.slice(1, limit)
  const { value } = useLocalStorage('favoriteNews', JSON.stringify([]))
  const favs = JSON.parse(value)

  return (
    <div>
      {limitedNews.map((item, index) => {
        return (
          <section className="m-8" key={index}>
            <img src={`https://agenciadenoticias.ibge.gov.br/${JSON.parse(item.imagens).image_intro}`} alt="imagem noticia" />
            <h2 className="text-medium font-bold">{item.titulo}</h2>
            <p className="text-sm">{item.introducao}</p>
            {
            publicationDayFunction(item.data_publicacao) === 0
              ? <p>Hoje</p>
              : <p> {(publicationDayFunction(item.data_publicacao) > 1
                ? publicationDayFunction(item.data_publicacao) + ' dias'
                : 1 + ' dia')} atrás</p>}
            <button  className="bg-green-500 p-2 rounded-md drop-shadow-button font-medium">
              <a href={item.link}>Leia a notícia aqui</a>
            </button>
            <button onClick={ () => {
              setFavorites(item)
            }}>
              {(favs.includes((i: Item) => i.id === item.id)) ? (
                <img src="/heartFill.svg" alt="svg favorite" />
                ) : ( <img src="/heartRegular.svg" alt="svg favorite" />
                ) }
            </button>
          </section>
        )
      })}
    </div>
  )
}

export default NewsBotton