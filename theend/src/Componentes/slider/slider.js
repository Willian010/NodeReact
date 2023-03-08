
import React from "react";  

import '../slider/slider.css';
import {motion} from 'framer-motion';
import carril  from "../Carril/carril";
 
 
export const Slider = () =>{

    return(
        
        <motion.div  className='slider-container' >
            <motion.div className='slider' drag="x" dragConstraints={{ right: 0, left:-100}} >
                
           {
                carril.map(steel =>(
                <motion.div  className="img-carril" > 
                <img src={steel} alt="Piccarril"/>  
                </motion.div>
            ))
                }
                
            </motion.div>               
          
        </motion.div>
       
    )
}
