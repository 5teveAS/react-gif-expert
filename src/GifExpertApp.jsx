// import React from 'react'

import { useState } from "react";
import { AddCategory, GifGrid } from "./components"; // Por defecto busca el index, esto se llama archivos de barril para optimizar las importaciones

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    console.log(newCategory);
    // categories.push(newCategory);
    // el push lo tenemos que evitar usar en react ( no refresca el estado ), poruqe lo que hace es mutar un objeto, lo que queremos es hacer un nuevo estado, un nuevo arreglo.
    setCategories([newCategory, ...categories]); // Hago una copia de todas las categorias y al final agrego el nuevo objeto.
    // Otra forma:
    // setCategories( CAT => [ ...CAT, 'Dota2']);
  };

  console.log(categories);

  return (
    // transformamos esto es un fragmento:
    <>
      {/* titulo */}
      <h1>GitExpertApp</h1>
      {/* Input */}
      {/* Aqui importamos el componente de esta seccion */}
      <AddCategory
        // setCategories={ setCategories }
        onNewCategory={(value) => onAddCategory(value)} // aqui lo que devuelve lo lleva a la funcion on add category
        // onNewCategory={ onAddCategory }
      />
      {/* Listado de gif */}
      {/* <button onClick={ onAddCategory }>Agregar</button> */}
      {categories.map(
        (category) => (
          // {
          // return // como solo tiene un return pordemos dejarlo asi :
          //     <div key={ category }> {/* El que tiene que tener la llave es el elemento que se esta iterando */}
          //     <h3>{ category }</h3>
          //     <li >{ category }</li>
          // </div>
          <GifGrid key={category} category={category} />
        )
        // }
      )}{" "}
      {/* Expresion de JS */}
      {/* Gif item */}
    </>
  );
};

// export default GifExpertApp
