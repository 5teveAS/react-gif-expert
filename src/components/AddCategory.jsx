import { useState } from "react";
import { GifExpertApp } from "../GifExpertApp";

export const AddCategory = ({ onNewCategory }) => { // aqui se desestructuran los props que queremos 

    // cada componente puede tener sus propios estado:
    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = (event) => {
        // setInputValue('Hola Mundo');
        // console.log(event.target.value);
        setInputValue( event.target.value ); // lo que se escribe actualmente en el input
        // aqui podemos desetructurar target, para no poner tantos puntos {target} then target,value
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(inputValue)
        if( inputValue.trim().length <= 1 ) return; // no permite precionar enter si solo hayu espacios o una solo letra
        // setCategories( categories => [ inputValue, ...categories]); // asi se guardan las categorias anteriores
        onNewCategory( inputValue.trim() );
        setInputValue(''); // limpiamos la caja de texto
        
    }

  return (
    // <form onSubmit={ (event) => onSubmit(event)}>
    <form onSubmit={ onSubmit }> {/* se esta forma queda mas resumido */}
        <input 
            type="text"
            placeholder="Buscar Gifs"  
            value={ inputValue }  
            // onChange={ (event) => onInputChange(event) } recuerden que cuando tengamos este caso lo podemos ovbiar y ponerlo asi:
            onChange={ onInputChange }
        />
    </form>    
  )
}


