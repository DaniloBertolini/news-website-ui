import newsApi from "./newsApi";

const mockFetch = (url: string) => {

  () => {
    if (url === 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100') {
      return Promise.resolve(newsApi)
    }
  }
}

export default mockFetch;