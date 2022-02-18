import React , {useEffect, useState} from "react";
import axios from 'axios'
import {useParams} from 'react-router'
import { useDispatch , useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';
import { deleteCharacter } from '../../redux/actions/index';
import CardDetail from '../CardDetail/CardDetail'
import Label from "../Label/Label"
import styles from './dogCard.module.css'
import { saveFavorite , borrarFavorito } from "../../redux/actions";

import heartFull from "../../assets/Heart-icon.png"
import heartFill from "../../assets/Gaming-Hearts-icon.png"


export default function Detail(){

   const activities = useSelector((state) => state.activities);
const favoritos = useSelector((state)=>state.favorites)
    
   const [country , setCountry] = useState()

  
  

    let dispatch = useDispatch()
    let {id} = useParams()
    const navigate = useNavigate();

  
  



    

    console.log("personaje desde single card!")

    const handleFavorite=()=>{
        
        
        let pais ={
            id:country.id,
            name:country.nameCommon,
            flag:country.flag
        }
        

  
        dispatch(saveFavorite(pais))
        //alert("Guardé en favoritos el personaje correctamente")
        navigate('/favorite')

    }

    const handleEliminateFavorite=(e)=>{
        e.preventDefault()

        dispatch(borrarFavorito(country.id))
        alert("borré en favoritos correctamente")
    }

    function handleDelete(e){

        e.preventDefault()
        const id = country.id
        console.log(id)
 

        dispatch(deleteCharacter(id))

        //alert("Dog Created!")
        navigate('/home')
        
    }

  

    const handleSave=async (e)=>{

        e.preventDefault()
        
        //console.log(allEpisodios)
        
        console.log("hola... quiero guardar el personaje")
        //console.log(personaje.episode)

        const arreglo = activities.filter(ep=> country.activities.includes(ep.name))
        const arregloId = arreglo.map(a=> a.id)

        //console.log(arreglo);
        

        
        

        /*
        allEpisodes
        people = [
                    {id: "1", name: "abc", gender: "m", age:"15" },
                    {id: "2", name: "a", gender: "m", age:"25" },
                    {id: "3", name: "efg", gender: "f", age:"5" },
                    {id: "4", name: "hjk", gender: "m", age:"35" },
                    {id: "5", name: "ikly", gender: "m", age:"41" },
                    {id: "6", name: "ert", gender: "f", age:" 30" },
                    {id: "7", name: "qwe", gender: "f", age:" 31" },
                    {id: "8", name: "bdd", gender: "m", age:" 78" },
                ]
        
        
        id_filter = [1,4,5,8]

        people.filter(person => id_filter.includes(person.id))

        result = people.filter((o) => id_filter.includes(+o.id) && o.gender == "m");

        const filtered_people = people.filter((person) => id_filter.includes(person.id)

        for(person in people) {
            for(id in id_filter) {
                if(person[id] == id && person[gender] == "m"){

                }
            }
        }

        */
    
        

        let countrySave={
            name: country.name,
            species: country.species,
            origin:country.origin,
            gender: [country.gender],
            image: country.image,
            episodios: arregloId,      
            
           
        }

        console.log("pokemon a guardar a la base de datos")
        console.log(countrySave)
        
        
        console.log("Personaje enviado !")
        await axios.post("http://localhost:3001/countries" , countrySave);

        alert("Personaje Guardado Correctamente !")
        navigate('/')
        
        
    }


    useEffect(()=>{

        axios.get(`http://localhost:3001/countries/${id}`)
        .then((response)=>{
            setCountry(response.data[0])
        })
        .catch(error => console.log(error) )

     
        
    },[id])

    console.log(country)

    if(country){
        if(country.message){
            return <Label mensaje={country.message}/>
        }else{
        }
    }

    return(
        <div className={styles.contenedor}>
    {
                country
                ?
                <div   className={styles.contenedorCard} >

                        <div className={styles.contenerodBotonera} > 

                                            
                        {
                            ((favoritos?.map(f=> f.id).indexOf(country.id)) === -1)
                            ?
                            
                                <img src={heartFill}  className={styles.zoom} alt="favorite"  onClick={handleFavorite} />    
                            
                            :
                            <img src={heartFull} alt="favorite"  onClick={handleEliminateFavorite}  />    
                            

                        }
                        
                        
                        </div>
                   
                    <CardDetail {...country} />

               

                  
                 


                </div>
                  
                :
                
                <Label mensaje={"Buscando país"} />
            }        </div>
    )
}