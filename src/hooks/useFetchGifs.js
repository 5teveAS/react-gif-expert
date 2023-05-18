import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

  const [images, setimages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    // Asi si es permitido usar el async await sin joder al useEffect
    const newImages = await getGifs(category);
    setimages(newImages);
    setIsLoading(false); // Gracias a react 18 esto no dispara dos renderizaciones del componenete con el cambio del estado
  };

  useEffect(() => {
    // el useEffect no funciona con async await en el que caso de que queramos hacerlo
    getImages();
    // getGifs(category).then((newImages) => setimages(newImages));
  }, []);
  /* si yo dejo las dependencias vacias getgifs 
  solo se ejecuta la primera ves que se construye el componente */
  return {
    // images: images,
    images, // si apunta a una variable con el mismo nombre podemos dejarlo asi
    isLoading
  }
}


