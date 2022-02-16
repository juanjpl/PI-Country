import {Link} from 'react-router-dom'
import { useSelector} from "react-redux"
import styles from './Navbar.module.css'
//import { useNavigate } from "react-router-dom";


export default function Navbar(){

    const usuario = useSelector((state)=> state.usuario)
    

    return(
        <div className={styles.background} >
            <div>
                <Link to="/"  className={styles.logo} >
                <span>Countries</span>
                </Link>

            </div>
            

            <div className={styles.botonera} >
               
            {
                (usuario[0]) ?
                <>
                <Link to="/home"className={styles.linkNavbar}>
                Home
                </Link>

                
                <Link to="/create"className={styles.linkNavbar}>
                Create Activity
                </Link>

                <Link to="/favorite"className={styles.linkNavbar}>
                Favorites
                </Link>
                </>
                :
                null
             }

            </div>

            
          

            <div className={styles.login} >
               

             {
                 (!usuario[0])
                 ?
                
                 
                 <Link to="/login" className={styles.linkNavbar}>
                 Login
                 </Link>
                 
                 :

                 <Link to="/profile" className={styles.linkNavbar}>
                 {usuario[0].username}
                 </Link>
                 

             }
   
   
                   <Link to="/register" className={styles.linkNavbar}>
                   Register
                   </Link>
       
               </div>
           
        </div>
    )
}