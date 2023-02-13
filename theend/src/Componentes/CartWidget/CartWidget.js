import { Link } from "react-router-dom";
import "../CartContainer/CartContainer.css" ;


 
export  const CartWidget =()=>{
   
    return(

     
     <div>
         <Link  to="/cart" className="Cart-face"  >
            <a href="#" ><img className="img-logo" src="https://cdn-icons-png.flaticon.com/512/2172/2172518.png"/></a>
            </Link>  
         
        </div>
        
    )
}