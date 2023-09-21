import { NewsTypeNewsBotton } from "../types";
import { publicationDayFunction } from "../utils/utils";
import heartRegularIcon from '/heartRegular.svg'
import heartFillIcon from '/heartFill.svg'

function NewsBotton({dataNews, limit, setFavorites, newsFavorites }: NewsTypeNewsBotton) {
  const limitedNews = dataNews.slice(0, limit)

  const imageLink = (link: string) => {
    const linkURL = JSON.parse(link)
    const imageLink = `https://agenciadenoticias.ibge.gov.br/${linkURL.image_intro}`
    return imageLink;
  }

  return (
    <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-3">
      {limitedNews.map((item, index) => {
        return (
          <article className="p-4 my-8 md:my-12 lg:my-20 w-328px border-2 shadow-button bg-white" key={index}>
            <img src={ imageLink(String(item.imagens)) } className="w-292px h-175px" alt="imagem noticia" />
            <h2  className="text-md my-4 text-justify font-bold h-20">{item.titulo}</h2>
            <p className="text-sm mb-4 text-justify h-36">{item.introducao}</p>

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
                  <img className="animate-spin" src={ heartFillIcon } alt="svg favorite" />
                  ) : ( <img src={ heartRegularIcon } alt="svg favorite" />
                  ) }
              </button>
            </div>

            <button className="bg-azulClaro p-2 rounded-b-md font-medium w-full">
              <a href={item.link}>Leia a notícia aqui</a>
            </button>
          </article>
        )
      })}
    </div>
  )
}

export default NewsBotton