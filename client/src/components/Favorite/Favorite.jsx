import React , {useEffect}  from "react"
import styles from './favorite.module.css'
import {  useSelector } from "react-redux";
import CardFav from "../CardFav/CardFav"
import Label from "../Label/Label"
import { useNavigate } from "react-router-dom";


export default function Favorite(){

    const favoritos = useSelector((state) => state.favorites);
    const usuario = useSelector((state)=> state.usuario)
   
    const navigate = useNavigate()


    useEffect(()=>{

        if(!usuario[0]){
            
            navigate("/")
            alert("Debe loggearse para poder acceder!")
          }
    
    
        
     
  
    },[ usuario , navigate])



return(
    <div className={styles.contenedorFavoritos }>

        <div  className={styles.favoritos} >
        {
             favoritos.length === 0   ?

             
             <Label mensaje={"There´s no coutries saves!"} />
              
             
            
            :

            favoritos.map((fav)=>{
                return(
                    <CardFav key={fav.id}  {...fav}/>
                )
            })
           
        }

        </div>
      



    </div>
)
 

  
       
    
   
}