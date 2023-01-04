import { useState , useEffect} from "react";
import { Item } from "../Item/Item";
import getFetch from "../Data/Data";
import { Link } from "react-router-dom";

export const ItemList =({ })=>{

        const [productos, setProductos] = useState([]);
        const [loanding , setLoading] = useState(true);

        useEffect(()=>{
             getFetch.then(productos =>{
                setProductos(productos)
                setLoading(false)
              
            }
        )
        },[]);  return(
            <div>
                {
                loanding ? <h2>Cargando...</h2>
                :
                productos.map(productos =>
                <Link   key = {productos.name} to={`/item/${productos.id}`}>
                <Item productos={productos}/></Link>
                    )}
            </div>
        )
    }   