import React from "react";
import './PaginaEventos.css';


export const PaginaEventos = () => {
    const hacerclick= () => {
        console.log("click");
    }
    return(
     <div>
        <button onClick={hacerclick} >hacer click</button>
        <div className="background-modal">
            <div className="modal">
                <p>modal</p>
                <button>cerrar</button>
            </div>
        </div>
    </div>
    )
}