import React,{useState , useEffect} from "react";
import {useDispatch , useSelector} from "react-redux";
import {obtain_activities} from "../../redux/actions/index";
import { useNavigate } from "react-router-dom";
import styles from './addDog.module.css'
import axios from "axios";



export default function Register(){


    const dispatch = useDispatch()

    //const activities = useSelector(state => state.activities)
    //const countries = useSelector(state => state.allCountries)

    const navigate = useNavigate()

   

    const [user, setUser] = useState({
        name: "",
        username:"",
        password: "",
        image: "",
      
    })



    const handleChange=(e)=>{
        e.preventDefault()

     


        setUser({
            ...user,
            [e.target.name] :  e.target.value 
        })
    }


 

    const handleSubmit=async (e)=>{
        e.preventDefault()
        //console.log("Pokemon enviado !")
        
        console.log(user)

        await axios.post("http://localhost:3001/initial" , user);


        setUser({
            
        name: "",
        username:"",
        email:"",
        password: "",
        image: "",
          
        })

        alert("La activitdad se creó correctamente!")

        navigate("/")
        
    }

   





    useEffect(()=>{
        dispatch(obtain_activities())
    },[dispatch])

    return(
        <div  className={styles.contenedorHenry} >
            
            <form onSubmit ={handleSubmit} className={styles.formulario}  >

            <div className={styles.contenedorDatos} >
                <div className={styles.contenedorinputs}>
                    <label className={styles.labels} htmlFor="" >Name:</label>
                    <input required className={styles.input} type="text" name="name" value={user.name} onChange={handleChange} />
                    <br/>

                    <label className={styles.labels} htmlFor="" >Username:</label>
                    <input required className={styles.input} type="text" name="username" value={user.username} onChange={handleChange} />
                    <br/>

                    <label className={styles.labels} htmlFor="" >Email:</label>
                    <input required className={styles.input} type="email" name="email" value={user.email} onChange={handleChange} />
                    <br/>

                    <label className={styles.labels} htmlFor="" >Password:</label>
                    <input required className={styles.input} type="password" name="password" value={user.password} onChange={handleChange} />
                    <br/>
                
                    <label className={styles.labels} htmlFor="">Image:</label>
                    <input required className={styles.input} type="text" name="image"  value={user.image} onChange={handleChange} />

                </div>

               <div className={styles.contenedoruser }>
            

                <h1>{user.username? user.username : "Username"} </h1>
                <img src={user.image? user.image : `https://solonieve.es/wp-content/uploads/2018/01/geometria-esquis.jpg`} alt={user.name} width={300} height={200}/>
                <h2>Name: <span> {user.name}</span> </h2>
                <h2>Email: <span>{user.email}</span> </h2>
                <h2>Password: <span>{user.password }</span> </h2>
              

               </div>

            </div>
             
              
             
    
    <div className={styles.contenedorFooter}>
    {
    (user.name ==="" || user.username ===""||user.password===""||user.image ==="") ?
    <h4>Debe llenar todos los campos para poder enviar el formulario ! Gracias </h4>
    :

    <button type="submit">CREATE</button>
}
    </div>
            


              

              

            </form>
        </div>
    )
}