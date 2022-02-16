import React,{useState , useEffect} from "react";
import {useDispatch , useSelector} from "react-redux";
import {obtain_activities} from "../../redux/actions/index";
import { useNavigate } from "react-router-dom";
import styles from './addDog.module.css'
import axios from "axios";

//import moves from "../../moves"



export default function Form(){


    const dispatch = useDispatch()

    //const activities = useSelector(state => state.activities)
    const countries = useSelector(state => state.allCountries)
console.log(countries)
    const navigate = useNavigate()

   

    const [activity, setActivity] = useState({
        name: "",
        dificulty:"",
        duration: "",
        info: "",
        image: "",
        season: [],
        countries:[]
    })



    const handleChange=(e)=>{
        e.preventDefault()

        if(e.target.name === "seasons"){
            setActivity({
                ...activity,
                season:[...activity.season, e.target.value]
            })
        }

        if(e.target.name === "name"){
            setActivity({
                ...activity,
                [e.target.name] : e.target.value 
            })
        }

        setActivity({
            ...activity,
            [e.target.name] :  e.target.value 
        })
    }

    const handleSelect= (e) =>{
        e.preventDefault()

           setActivity({
            ...activity,
            countries: [...activity.countries , e.target.value]
        })
    }

    const handleSelectMoves= (e) =>{
        e.preventDefault()


        setActivity({
            ...activity,
            season: [...activity.season , e.target.value ]
        })
    }

    const handleSubmit=async (e)=>{
        e.preventDefault()
        //console.log("Pokemon enviado !")
        
        console.log(activity)

        await axios.post("http://localhost:3001/activities" , activity);


        setActivity({
            
            name: "",
            dificulty:"",
            duration: "",
            info: "",
            image: "",
            season: [],
            countries: []
          
        })

        alert("La activitdad se creó correctamente!")

        navigate("/home")
        
    }

   

    function handleDeleteMoves(name){
       
        setActivity({
            ...activity,
            season:activity.season.filter(occ => occ !== name)
        })
    }

    function handleDeletecountries(name){
       
        setActivity({
            ...activity,
            countries:activity.countries.filter(occ => occ !== name)
        })
    }
 

    const arreglo = countries?.filter(c=> activity.countries.includes(c.id))
    //console.log(arreglo)
    //const arregloId = arreglo.map(a=> a.name)
              
    //console.log("este es el filtrado de typos por id ")
    //console.log(arregloId)

   
    //console.log(activity)

    useEffect(()=>{
        dispatch(obtain_activities())
    },[dispatch])

    return(
        <div  className={styles.contenedorHenry} >
            
            <form onSubmit ={handleSubmit} className={styles.formulario}  >

            <div className={styles.contenedorDatos} >
            <div className={styles.contenedorinputs}>
                <label className={styles.labels} htmlFor="" >Name:</label>
                <input required className={styles.input} type="text" name="name" value={activity.name} onChange={handleChange} />
                <br/>

                <label className={styles.labels} htmlFor="">Dificulty:</label>
                <div className={styles.labelOption} >
                
                <label><input type="radio" name="dificulty" value={1} onChange={handleChange} />1</label>
                <label><input type="radio" name="dificulty" value={2} onChange={handleChange}  />2</label>
                <label><input type="radio" name="dificulty" value={3} onChange={handleChange}  />3</label>
                <label><input type="radio" name="dificulty" value={4} onChange={handleChange}  />4</label>
                <label><input type="radio" name="dificulty" value={5} onChange={handleChange}  />5</label>
                   


                    

                </div>


               

                

     
              
                <br/>
              
               
               
                <label className={styles.labels} htmlFor="">Duration (minutes):</label>
                <input required className={styles.input} type="number" name="duration" min="1" max="300" value={activity.duration} onChange={handleChange} />
                <br/>
               
                <label className={styles.labels} htmlFor="">Image:</label>
                <input required className={styles.input} type="text" name="image"  value={activity.image} onChange={handleChange} />

                <br/>
                <label className={styles.labels} htmlFor="">Info:</label>
                
                <textarea  name="info" rows="4" cols="30" value={activity.info} onChange={handleChange}>
                
                </textarea>
                <br/>

                <label className={styles.labels} htmlFor="">Seasons:</label>

                    <select required className={styles.input}  name="season" onChange={handleSelectMoves} >

                                <option value="" >Choose a season</option>
                                <option name={"Summer"} key={0} value={"Summer"} >Summer </option>
                                <option name={"Fall"} key={1} value={"Fall"} >Fall </option>
                                <option name={"Winter"} key={2} value={"Winter"} >Winter</option>
                                <option name={"Spring"} key={3} value={"Spring"} >Spring</option>
                    </select>

                   


                    <label className={styles.labels} htmlFor="">Countries:</label>
                <select required className={styles.input}  name="countries" onChange={handleSelect} >
                    {countries?.map((c,index)=>{
                        return(
                            <option name={c.id} key={index} value={c.id} >{c.name} </option>
                        )
                    })}
                </select>

               
                </div>

               <div  className={styles.contenedorInforme}>
            

                <h1>{activity.name? activity.name : "Activity"} </h1>
                <img src={activity.image? activity.image : `https://solonieve.es/wp-content/uploads/2018/01/geometria-esquis.jpg`} alt={activity.name} width={200} height={150}/>
                <h2>Dificulty: {activity.dificulty} </h2>
                <h2>Duration: {activity.duration} min </h2>
                <h2>Seasons:</h2>
                    <div  className={styles.listSeasons} >
                    {
                        activity.season?.map((m,index)=>{
                            return(
                                <div key={index} className={styles.lists} >
                                    
                                    <h4>{m} </h4>
                                    <button className="botonX" onClick={()=> handleDeleteMoves(m)} >x</button>

                                </div>
                            )
                        })
                    }
                    </div>
                    <h2>Countries:</h2>
                    <div className={styles.listSeasons} >
                    {
                        arreglo?.map((m,index)=>{
                            return(
                                <div key={index} className={styles.lists} >
                                    
                                    <h4>{m.name} </h4>
                                    <button className="botonX" onClick={()=> handleDeletecountries(m.id)} >x</button>

                                </div>
                            )
                        })
                    }
                    </div>
                <p>{activity.info} </p>

           


       
            

               </div>

            </div>
             
              
             
    
            <div className={styles.contenedorFooter}>
            {
            (activity.name ==="" || activity.difuculty ===""||activity.info===""||activity.image ===""||activity.duration ===""||activity.season ===""||activity.countries ===[]) ?
            <h4>Debe llenar todos los campos para poder enviar el formulario ! Gracias </h4>
            :

            <button type="submit">CREATE</button>
            }
            </div>
            


              

              

            </form>
        </div>
    )
}