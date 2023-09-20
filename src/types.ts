export type FetchApi = {
  count: number;
  page: number;
  totalPages: number;
  nextPage: number;
  previousPage: number;
  showingFrom: number;
  showingTo: number;
  items: Item[]
}

export type Item = {
  id: number;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  produto_id: number;
  produtos: string;
  editorias: string;
  imagens: string;
  produtos_relacionados: string;
  destaque: boolean;
  link: string;
}

export type NewsTypeNewTop = {
  dataNews: Item;
  setFavorites: (item: Item) => void;
  newsFavorites: Item[];
}

export type ObjPublicationDay = {
  result: number;
}

export type NewsTypeNewsBotton = {
  dataNews: Item[];
  limit: number;
  setFavorites: (item: Item) => void;
  newsFavorites: Item[];
}

export type UseLocalStorageReturn = {
  value: string,
  updateValue: (newValue: string) => void
};