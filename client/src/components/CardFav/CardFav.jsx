import React from "react";
import {Link} from "react-router-dom"
import { useDispatch } from "react-redux";
import styles from './cardfav.module.css'
import { borrarFavorito } from "../../redux/actions";
import eliminate from "../../assets/eliminate.png"



export default function CardFav({...fav}){

  const dispatch = useDispatch()


 
    const handleFavorite=(e)=>{
        e.preventDefault()

        dispatch(borrarFavorito(fav.id))
        alert("borré en favoritos el personaje correctamente")
  
        
    }



 
    return(
        <div  className={styles.contenedorCard}>
            <div>
                <div className={styles.cartel}>
                {
                
                (typeof(fav.id) === "number")
                ?
                <h2 className={styles.dogApi} >API</h2>
                :
                <h2 className={styles.dogDb} >DB </h2>
                }

                
                
                <img src={eliminate} alt={eliminate} onClick={handleFavorite} width="25px" height="25px"  />
                </div>
               

                <Link to={`/character/${fav.id}`} key={fav.id} className={styles.nombre} >{fav.name} </Link>

                <img src={fav.flag} alt={fav.name} className={styles.imagen} />

                
               
            </div>
        </div>
    )
}