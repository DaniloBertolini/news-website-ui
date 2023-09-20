import { NewsTypeNewsBotton } from "../types";
import { publicationDayFunction } from "../utils/utils";

function NewsBotton({dataNews, limit, setFavorites, newsFavorites }: NewsTypeNewsBotton) {
  const limitedNews = dataNews.slice(0, limit)
  return (
    <div>
      {limitedNews.map((item, index) => {
        return (
          <section className="p-4 m-4 border-2 shadow-button bg-white" key={index}>
            <img src={`https://agenciadenoticias.ibge.gov.br/${JSON.parse(item.imagens).image_intro}`} alt="imagem noticia" />
            <h2  className="text-md my-4 text-justify font-bold">{item.titulo}</h2>
            <p className="text-sm mb-4 text-justify">{item.introducao}</p>

            <div className="w-full border-t border-verdigris" />

            <div className="flex justify-between my-4 items-center">
              {
              publicationDayFunction(item.data_publicacao) === 0
                ? <p>Hoje</p>
                : <p> {(publicationDayFunction(item.data_publicacao) > 1
                  ? publicationDayFunction(item.data_publicacao) + ' dias'
                  : 1 + ' dia')} atrás</p>}

              <button onClick={ () => {
                setFavorites(item)
              }}>
                {(newsFavorites.includes(item)) ? (
                  <img src="/heartFill.svg" alt="svg favorite" />
                  ) : ( <img src="/heartRegular.svg" alt="svg favorite" />
                  ) }
              </button>
            </div>

            <button className="bg-azulClaro p-2 rounded-b-md font-medium w-full">
              <a href={item.link}>Leia a notícia aqui</a>
            </button>
          </section>
        )
      })}
    </div>
  )
}

export default NewsBotton