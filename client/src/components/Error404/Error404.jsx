import styles from './error404.module.css'
import {Link} from "react-router-dom";


export default function Error404(){


    return(
        <div className={styles.contenedorHenry} >
         
            <div className={styles.contenedorTextoHenry}>

                <h1 className={styles.titulo}><span>404.</span> Página no encontrada</h1>
               

                <div className={styles.contenedorBotonera} >


    
                    <Link to="/" className={styles.button} >
                    <h3  >Back</h3>
                    </Link>

                   

                </div>
            </div>
        </div>
    )
}