import { Link } from 'react-router-dom'
import steel1 from '../Carrilito/steel1.jpg'
import steel2 from '../Carrilito/steel2.jpg'
import steel3 from '../Carrilito/steel3.jpg'
import steel4 from '../Carrilito/steel4.jpg'
import steel5 from '../Carrilito/steel5.jpg'
import steel6 from '../Carrilito/steel6.jpg'
import steel7 from '../Carrilito/steel7.jpg'
import steel8 from '../Carrilito/steel8.jpg'
import steel9 from '../Carrilito/steel9.jpg'
import steel10 from '../Carrilito/steel10.jpg'
import steel11 from '../Carrilito/steel11.jpg'
import './Galeria.css';
 

const Galeria  = () => {
    return(
        <Link to="/">
            <section >
                  
                    <img src={steel1} />           
                    <img src={steel2} /> 
                    <img src={steel3} />
                    <img src={steel4} />
                    <img src={steel5} />
                    <img src={steel6} />
                    <img src={steel7} />
                    <img src={steel8} />
                    <img src={steel9} />
                    <img src={steel10} />
                    <img src={steel11} />
            </section>
            </Link>
    )
}





export default (Galeria);    