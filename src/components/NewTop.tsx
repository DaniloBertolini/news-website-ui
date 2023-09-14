import { Item } from "../types";

type NewsType = {
  dataNews: Item
}

function News({dataNews}: NewsType) {
  let newsImage = ''
  const dataHoje = new Date

  const dataNewsImage = dataNews.imagens.split("\\");
  if (dataNewsImage) {
    const dataNewsImageStart = dataNewsImage[1] + dataNewsImage[2] + dataNewsImage[3];
    const dataNewsImageEnd = dataNewsImage[4]
    newsImage = `https://agenciadenoticias.ibge.gov.br/images${dataNewsImageStart}${dataNewsImageEnd.split('jpg')[0]}jpg`;
  }

  const dayPublished = dataNews.data_publicacao.split(' ')[0].split('/');
  const dayNow = new Date(dataHoje.getFullYear(), dataHoje.getMonth(), dataHoje.getDate())

  const dayPublishedFormated = new Date(`${dayPublished[2]}-${dayPublished[1]}-${dayPublished[0]}Z-03:00`)

  return (
    <div>
      <img src={newsImage} alt="Teste" />
      <span>Noticia mais recente</span>
      <button>favorito</button>
      <h2>{dataNews.titulo}</h2>
      <p>{dataNews.introducao}</p>
      {Number(dayNow) - Number(dayPublishedFormated) === 0
        ? <p>Hoje</p>
        : <p> {(Number(dayNow) - Number(dayPublishedFormated) > 1
            ? Number(dayNow) - Number(dayPublishedFormated) + ' dias'
            : 1 + ' dia')} atrás</p>}
      <button>
        <a href={dataNews.link}>Leia a notícia aqui</a>
      </button>
    </div>
  )
}

export default News