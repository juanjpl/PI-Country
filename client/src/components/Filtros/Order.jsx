import React from "react";
import {useSelector} from 'react-redux';
import { useDispatch } from "react-redux";
import styles from './order.module.css'
import { orderByName , orderByPopulation , orderByActivity , seasons , independent , continent} from "../../redux/actions";


export default function Order(){

    const allCountries= useSelector((state) => state.allCountries);
    const allactivities= useSelector((state) => state.activities);
    const dispatch = useDispatch()



  

    function handleSort(e){

        console.log("Envío action...")
        console.log(e.target.value)

        dispatch(orderByName(e.target.value))
        
    }

    function handlePopulation(e){

        console.log("Envío action...")
        console.log(e.target.value)

        dispatch(orderByPopulation(e.target.value))
        
    }

    
    function handleChange(e){

        console.log("Envío action...")
        console.log(e.target.value)

        dispatch(seasons(e.target.value))
      
        
    }

    function handleActivity(e){

        console.log("Envío action...")
        console.log(e.target.value)

        dispatch(orderByActivity(e.target.value))
      
        
    }

    function handleIndependent(e){

        console.log("Envío action...")
        console.log(e.target.value)

        dispatch(independent(e.target.value))
      
        
    }

    
    function handleContinent(e){

        console.log("Envío action...")
        console.log(e.target.value)

        dispatch(continent(e.target.value))
      
        
    }

    let continentes = allCountries.map(c => c.continents);
    const newLista = continentes.filter((el,index) => continentes.indexOf(el) === index)
    
    let actividades = allactivities.map (a => a.name)
    //console.log(actividades)

    return(
        <div className={styles.contenedorSearch}>
            <div>
                <label>Alphabetic</label>
                <select onChange={handleSort} >
                    <option value="all">All</option>
                    <option value="A">A a la Z</option>
                    <option value="Z">Z a la A</option>
                </select>
            </div>

            <div>
            <label>Season</label>
                <select onChange={handleChange} >
                    <option value="all">All</option>
                    <option value="Spring">Spring</option>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                    <option value="Summer">Wummer</option>

                    
                </select>
            </div>

            <div>
            <label>Activity:</label>
                <select onChange={handleActivity} >
                    <option value="all">All</option>
                   {
                       actividades?.map(a=>{
                           return(
                            <option key={a} value={a}>{a} </option>
                           )
                       })
                   }
                    
                </select>
            </div>

            <div> 
            <label>Independent:</label>
                <select onChange={handleIndependent} >
                    <option value="all">All</option>
                    <option value="true"> Independents</option>
                    <option value="false">Not Independent</option>
                    
                </select>
            </div>
           
            <div> 
            <label>Continent:</label>
                <select onChange={handleContinent} >
                    <option value="all">All</option>
                   {
                       newLista.map( u=> {
                           return(
                               <option key={u} value={u}>{u} </option>
                           )
                       })
                   }
                    
                </select>
            </div>

            <div> 
            <label>Population:</label>
                <select onChange={handlePopulation} >
                    <option value="all">All</option>
                    <option value="A">Ascendent</option>
                    <option value="Z">Descendent</option>
                    
                </select>
            </div>
        </div>
    )
}