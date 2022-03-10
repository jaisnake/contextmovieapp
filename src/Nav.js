import React,{useContext} from "react";
import './nav.style.css';
import { MovieContext } from "./MovieContext";

const Nav =()=>{
    const[movies,setMovies]=useContext(MovieContext);
    return(
       <header className="Nav">
           <h4>Nav</h4>
           <p>Movies Count:{movies.length}</p>
       </header>
    )
}
export default Nav;