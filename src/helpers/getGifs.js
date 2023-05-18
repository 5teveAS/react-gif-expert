// si tengo que usar la funcion en otro lugar la tengo que exportar
export const getGifs = async category => {
  const url = `https://tenor.googleapis.com/v2/search?q=${category}&key=AIzaSyCg41owxz4MuWT1IW0tqqzALh79x3eqeoU&client_key=react&limit=8`
  const resp = await fetch(url) // si estoy usando el await la funcion tiene que ser async
  const { results } = await resp.json()

  const gifs = results.map(img => ({
    id: img.id,
    title: img.content_description,
    url: img.media_formats.mediumgif.url
  }))

  // console.log(gifs)
  return gifs
}
