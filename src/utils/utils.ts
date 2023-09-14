export const fetchURL = async (URL: string) => {
  const response = await fetch(URL);
  const data = response.json();
  if (!data) return {}

  return data;
}