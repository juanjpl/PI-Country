import React from "react";
import {Link} from "react-router-dom"
import styles from './dog.module.css'




export default function SingleCard({...pj}){

    

    return(
        <div  className={styles.contenedorCard}>
            <div  className={styles.contenedor30}>
                
                <div className={styles.cartel}>
                
                
                <Link to={`/activity/${pj.id}`} key={pj.id} className={styles.dogApi} >{pj.name} </Link>
                
                </div>
               
                
                

                <img src={pj.image} alt={pj.name} className={styles.imagen} />

             
               
            </div>

            <div  className={styles.contenedor70}>
            

                <h4 className={styles.texto}>Dificulty: {pj.dificulty} </h4>
                <h4 className={styles.texto}>Duration: {pj.duration} min </h4>
                <h4 className={styles.texto}>Seasons: {pj.season.map(m=>" "+m+" ")} </h4>
                <p className={styles.texto}>{pj.info} </p>
             
               
            </div>


        </div>
    )
}