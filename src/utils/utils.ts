export const fetchURL = async (URL: string) => {
  const response = await fetch(URL);
  const data = response.json();
  if (!data) return {}

  return data;
}

export const publicationDayFunction = (data_publicacao: string) => {
  const newDate = new Date
  const dayPublished = data_publicacao.split(' ')[0].split('/');
  const dayNow = Number(new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate()))

  const dayPublishedFormated = Number(new Date(`${dayPublished[2]}-${dayPublished[1]}-${dayPublished[0]}Z-03:00`))

  return ((dayNow - dayPublishedFormated) /1000 /24 /60 /60)
  
}