import { useState } from "react";

//Lo primero hace el componente lee las propiedades y sus valores
export const Contador =({stock, onAdd}) => {

    const [contador , setContador] = useState(0);
    //Luego lee las variebles de estado.

    //Cuando una propiedad o variable de estado cambien 
    //el componente vuelve a renderizarse.
    const incrementar = () => {
        if (contador < stock){
        setContador(contador + 1)}
        
    }
    //declara las funciones 

    const decrementar = () =>{
        if (contador>0){
        setContador(contador - 1)
        }
    }
    //El agregado al carro creada como funcion de callback.
    //leera el componenete padre en app y ejecutara lo que se encuentre dentro de 
    //las llaves o sea otra funcion.
    //(callback es una funcions que se recibe como parametro dentro de otra funcion).  
    

    return(
        //Luego reenderiza el componente con los valores que encontro.
    <div>
        
        <p className="Contador" >Cantidad {contador}</p>
        <button onClick={decrementar} >Quitar</button>
        <button onClick={incrementar} >Agregar</button>
        <button onClick={ ()=>(onAdd(contador))}//el click en evento onAdd llama prop contador
        >Agregar a la compra</button>
    </div>
    )
}
//<button onClick={ ()=>(agregarProducto(contador))} 
       // >Agregar a la compra</button>