import React,{useState,useContext} from "react";
import { MovieContext } from "./MovieContext";

const AddMovies=()=>{
    const[movies,setMovies]=useContext(MovieContext);
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [id,setid]=useState('');
    
    const UpdateID=e=>(
        setid(e.target.value)
        
        
    )
    const UpdateName=(e)=>(
        setName(e.target.value)
    )
    const UpdatePrice=(event)=>(
        setPrice(event.target.value)
    )
    const AddMovie=(e)=>{
            e.preventDefault()
            setMovies(prevMovies=>[...prevMovies,{name:name,price:price,id:id}])
            
    }

    return(
        <form onSubmit={AddMovie}>
            <input type='text' value={id} name="id" placeholder="Id" onChange={UpdateID}/>
            <input type='text' value={name} name='name' placeholder="name" onChange={UpdateName}/>
            <input type='text' value={price} name="price" placeholder="price" onChange={UpdatePrice}/>
            
            <button>Submit</button>
        </form>
    )

}

export default AddMovies;


