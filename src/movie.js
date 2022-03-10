import React,{useContext} from "react";
import { MovieContext } from "./MovieContext";

const Movie =({name,price,id})=>{
    
    

    return(
        <div>
            <h1>{name}</h1>
            <p>{price}</p>
            
        </div>
        
    )
}



export default Movie;
