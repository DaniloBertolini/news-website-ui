import { useEffect, useState } from "react";
import { Item, NewsTypeNewTop, ObjPublicationDay } from "../types";
import { publicationDayFunction } from "../utils/utils";
import useLocalStorage from "../hooks/useLocalStorage";

const obj = {
  result: 0
}

function News({dataNews, setFavorites}: NewsTypeNewTop) {
  const { value } = useLocalStorage('favoriteNews', JSON.stringify([]))
  const favs = JSON.parse(value)
  const [publicationDay, setPublicationDay] = useState<ObjPublicationDay>(obj)
  const { result } = publicationDay

  useEffect(() => {
    if (dataNews) {
      const result = publicationDayFunction(dataNews.data_publicacao)
      setPublicationDay({
        result
      })
    }
  }, [dataNews])

  return (
    ( dataNews && (

      <div>
      <img src={`https://agenciadenoticias.ibge.gov.br/${JSON.parse(dataNews.imagens).image_intro}`} alt="Teste" />
      <button 
      onClick={ () => setFavorites(dataNews)}
      >
        {favs.some((item: Item) => item.id === dataNews.id) ? (
          <img src="/heartFill.svg" alt="svg favorite" />
        ) : ( <img src="/heartRegular.svg" alt="svg favorite" />
        ) }
      </button>
      <h2>{dataNews.titulo}</h2>
      <p>{dataNews.introducao}</p>
      {result === 0
        ? <p>Hoje</p>
        : <p> {(result > 1
          ? result + ' dias'
          : 1 + ' dia')} atrás</p>}
      <button className="bg-green-500 p-2 rounded-md drop-shadow-button font-medium">
        <a href={dataNews.link}>Leia a notícia aqui</a>
      </button>
    </div>
    ))
  )
}

export default News