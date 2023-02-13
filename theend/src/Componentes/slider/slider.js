import React from "react";
import carril from "../Carril/carril";
import '../slider/slider.css';
import {motion} from 'framer-motion';


 export const Slider = () =>{
    return(
        <motion.div  className='slider-container' >
            <motion.div className='slider' drag="x" dragConstraints={{ right: 0, left:-100}} >
            {
            carril.map(steel =>(
                <motion.div  className="img-carril" > 
                <img src={steel} alt=""/>  
                </motion.div>
            ))
           }
            </motion.div>
          
        </motion.div>
    )
}
