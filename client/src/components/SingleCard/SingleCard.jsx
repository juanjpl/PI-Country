import React from "react";
import {Link} from "react-router-dom"
import { useDispatch , useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';

import styles from './dog.module.css'
import { saveFavorite , borrarFavorito } from "../../redux/actions";
import heartFull from "../../assets/Heart-icon.png"
import heartFill from "../../assets/Gaming-Hearts-icon.png"




export default function SingleCard({...pj}){

    const favoritos = useSelector((state) => state.favorites);
    //console.log(favoritos)

    const dispatch = useDispatch()
    const navigate = useNavigate();



    const handleFavorite=()=>{

        let pais ={
            id:pj.id,
            name:pj.nameCommon,
            flag:pj.flag
        }
        

  
        dispatch(saveFavorite(pais))
        alert("Guardé en favoritos correctamente")
        navigate('/favorite')

    }

    const handleEliminateFavorite=(e)=>{
        e.preventDefault()

        dispatch(borrarFavorito(pj.id))
        alert("borré en favoritos correctamente")
    }

    //var indexOfStevie = favoritos?.map(f=> f.id).indexOf(pj.id)
   // console.log(indexOfStevie)

    return(
        <div  className={styles.contenedorCard}>
            <div>
                <div className={styles.cartel}>
                {
                
                (typeof(pj.id) === "number")
                ?
                <h2 className={styles.dogApi} >API</h2>
                :
                <h2 className={styles.dogDb} >DB</h2>
                }

 
{
    ((favoritos?.map(f=> f.id).indexOf(pj.id)) === -1)
    ?
    
        <img src={heartFill}  className={styles.zoom} alt="favorite"  onClick={handleFavorite} width="20px" height="20px" />    
       
    :
    <img src={heartFull} alt="favorite"  onClick={handleEliminateFavorite} width="20px" height="20px" />    
    

}
    
                

                </div   >
               
                
                <Link to={`/character/${pj.id}`} key={pj.id} className={styles.nombre} >{pj.nameCommon} </Link>

                <img src={pj.flag} alt={pj.nameCommon} className={styles.imagen} />

               
                <h4 className={styles.texto}>Population: {pj.population} </h4>
                <h4 className={styles.texto}>Continent: {pj.continents} </h4>
            
             

           


                
               
            </div>
        </div>
    )
}