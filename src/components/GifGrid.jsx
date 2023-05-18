import { useState, useEffect } from "react";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  //Nunca colocar un function dentro de un functional componente, hacerlo asi siempre:

  /* Ahora para simplificar aun mas el codigo es recomenble haccer un custom hook*/
  const { images, isLoading } = useFetchGifs(category); // Donde desestructuro lo quye recibo del hook

  // console.log({ isLoading });
  // const [images, setimages] = useState([]);
  // // const [isLoading, setIsLoading] = useState(true);

  // const getImages = async () => {
  //   // Asi si es permitido usar el async await sin joder al useEffect
  //   const newImages = await getGifs(category);
  //   setimages(newImages);
  //   // setIsLoading(false);
  // };

  // useEffect(() => {
  //   // el useEffect no funciona con async await en el que caso de que queramos hacerlo
  //   getImages();
  //   // getGifs(category).then((newImages) => setimages(newImages));
  // }, []);
  /* si yo dejo las dependencias vacias getgifs 
  solo se ejecuta la primera ves que se construye el componente */

  return (
    <>
      <h3>{category}</h3>
      {/* {isLoading ? <h2>Cargando...</h2> : null} */}
      {isLoading && <h2>Cargando...</h2>}{" "}
      {/* Esto es un AND logico, por lo tango si isLoading esta en true ejecuta la segunda parte de la instruccion */}
      <div className="card-grid">
        {images.map((image) => (
          // se usa desestructuracion para obtener el id y el title de images
          <GifItem key={image.id} {...image} /> // aqui con esta sintaxis {...image, exparsimos los prop en image y las manda al componenete donde hacemos la desestructuracion mas facilmente}
        ))}
      </div>
    </>
  );
};
