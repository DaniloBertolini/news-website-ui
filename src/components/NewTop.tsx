import { useEffect, useState } from "react";
import { NewsTypeNewTop, ObjPublicationDay } from "../types";
import { publicationDayFunction } from "../utils/utils";

const obj = {
  result: 0
}

function News({dataNews, setFavorites}: NewsTypeNewTop) {
  const [publicationDay, setPublicationDay] = useState<ObjPublicationDay>(obj)
  const { result } = publicationDay
  let newsImage = ''

  const dataNewsImage = dataNews.imagens.split("\\");
  if (dataNewsImage) {
    newsImage = `https://agenciadenoticias.ibge.gov.br/${JSON.parse(dataNews.imagens).image_intro}`
    
  }

  useEffect(() => {
    const result = publicationDayFunction(dataNews.data_publicacao)
     setPublicationDay({
      result
    })
  }, [dataNews])

  return (
    <div>
      <img src={newsImage} alt="Teste" />
      <span>Noticia mais recente</span>
      <button 
      onClick={ () => setFavorites(dataNews)}
      >favorito</button>
      <h2>{dataNews.titulo}</h2>
      <p>{dataNews.introducao}</p>
      {result === 0
        ? <p>Hoje</p>
        : <p> {(result > 1
            ? result + ' dias'
            : 1 + ' dia')} atrás</p>}
      <button>
        <a href={dataNews.link}>Leia a notícia aqui</a>
      </button>
    </div>
  )
}

export default News