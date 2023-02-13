import React, { useEffect, useState } from "react";
import './PaginaEventos.css';


export const PaginaEventos = () => {
    const [openModal, setOpenModal] = useState(false);
    
    //Abrir y cerrar el modal

    const showModal = (event) =>{
        setOpenModal(!openModal)
        console.log("ruick")
    }
    //Enviar formulario

    const enviarformulario = (event) =>{
        event.preventDefault()
        console.log("Formulario")
    }

    //Captura de info del input

    const change = (event) => {
        console.log("event", event)
        console.log(event.target.value)
    }

    //const hacerclick= () => {
    //    console.log("click");
    //}
     //useEffect(()=>{
     //   window.addEventListener("click", showModal)
     //   return()=>{
    //        window.removeEventListener("click", showModal);
     //   }
   //  },[])

    

    return(
        
    <div className="PP">
        <button onClick={showModal} >abrir modal</button>
        { 
            openModal ?
            <div className="background-modal  .modal" onClick={showModal}> 
              
               
                <button  onClick={showModal}>cerrar</button>
                 
            </div>
            : 
            null
        }
        
        <hr></hr>
        <h2>prevent default</h2>
        <form  onSubmit={enviarformulario}  >
            <input onChange={change}  placeholder="email"/>
            <button type="submit"  >Enviar</button>

        </form>

        </div>
            
    )
}