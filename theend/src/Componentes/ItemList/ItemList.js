import { useState , useEffect} from "react";
import { Item } from "../Item/Item";
import getFetch from "../Data/Data";
import { Link } from "react-router-dom";


export const ItemList =({items })=>{

        const [productos, setProductos] = useState([]);
        const [loanding , setLoading] = useState(true);
        


        useEffect(()=>{
             getFetch.then(productos =>{
                setProductos(productos)
                setLoading(false)
              
            }

            

            
        )
        },[]); 
        
        
        
        return(
            <div className="list">
                <h2>ItemList</h2>
                
                {
                loanding ? <h2>Cargando...</h2>
                :
            items.map(item =>(
              <Link key = {item} to={`/item/${item.id}`}>
                <Item item={item} />
              </Link>
                    ))}
                     
            </div>
        )
    }   