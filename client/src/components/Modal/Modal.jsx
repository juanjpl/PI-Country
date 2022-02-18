import React  from  'react';
import styles from './modal.module.css'
import { useNavigate } from "react-router-dom";

export default function Modal(){

    
    const navigate = useNavigate()
 
   const volver = (e)=>{
       e.preventDefault() 

    navigate("/")
   }



    return (
        <div className={styles.contenedor} >

            <div className={styles.modals}>

                <div className={styles.modalImage}>
            
                </div>

                <div className={styles.modal}>
                <h1 className={styles.titulo}> Thanks!</h1>
                <p className={styles.parrafo}>You must be logging for enter the app.</p>
                <button className={styles.button} onClick={volver} >Back</button>
                </div>

            </div>
         
           
            
        </div>
        

    )


   
}