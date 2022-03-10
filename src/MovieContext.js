import React,{useState,createContext} from "react";

export const MovieContext = createContext();
export const MovieProvieder =(props)=>{
    const [movies,setMovies]=useState([
        {
            name:'Harry Potter',
            price:'$10',
            id:1
        },
        {
            name:'BatMan',
            price:'$17',
            id:2
        },
        {
            name:'KingKong',
            price:'$13',
            id:3
        },
        {
            name:'Monkey king',
            price:'$14',
            id:4
        },


    ]);
    return(
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}