import React , {useEffect} from  'react';
import {useSelector} from 'react-redux';
import styles from './home.module.css'
import AllCountries from '../AllCountries/AllCards'
import SearchBar from '../SearchBar/SearchBar';
import Label from "../Label/Label"
import Modal from "../Modal/Modal"
import {useDispatch} from "react-redux"
import { obtain_countries, obtain_activities} from "../../redux/actions/index";
import { useNavigate } from "react-router-dom";

export default function Home(){

    const allCountries= useSelector((state) => state.filteredCountries);  
    const usuario = useSelector((state)=> state.usuario)

    

    const dispatch = useDispatch()
    const navigate = useNavigate()
 
   
  
    

    useEffect(()=>{

      
    
      dispatch(obtain_activities())
      dispatch(obtain_countries())
        
     
  
    },[dispatch , usuario , navigate])
   
  
    if(!usuario[0]){
            
        //navigate("/")
        return (
        <Modal/>
        )
      }
 
  



if(allCountries.length === 0){

   


    return(
        <div className={styles.contenedorHome} >
            <SearchBar  />
           <Label mensaje={"No hay paises"} />  
        </div>
       

    )

}
  

    return (

        



        <div className={styles.contenedorHome} >

            
            <SearchBar />
            <AllCountries countries={allCountries} />


        </div>
    )

   
}