import React,{useState , useEffect} from "react";
import {useDispatch , useSelector} from "react-redux";
import { login} from "../../redux/actions/index";
import { useNavigate } from "react-router-dom";
import styles from './addDog.module.css'
//import axios from "axios";



export default function Login(){


    const dispatch = useDispatch()

    //const usuario = useSelector(state => state.users)
   
    //console.log(usuario)
    const navigate = useNavigate()

   

    const [user, setUser] = useState({
      
        username:"",
    password: "",
       name:"",
       image:"",
       email: ""
      
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
        //console.log("Usuario enviado !")
        
        
        let usuario ={
            username:user.username,
            password:user.password
        }
       
        //console.log(usuario)

        dispatch(login(usuario))

        //console.log("usuario obtenido !")
        //console.log(usuar.data)

        setUser({
            
        name:"",
        username:"",
        password: "",
        email:"",
        image:""
       
          
        })

        alert("El usuario se envió correctamente!")

        navigate("/")
        
    }

   





    return(
        <div  className={styles.contenedorHenry} >
            
            <form onSubmit ={handleSubmit} className={styles.formulario}  >

                <h1 className={styles.titulo} >Login</h1>

                <div className={styles.contenedorDatos} >
                    <div className={styles.contenedorinputs}>
                

                        <label className={styles.labels} htmlFor="" >Username:</label>
                        <input required className={styles.input} type="text" name="username" value={user.username} onChange={handleChange} />
                        <br/>

                    
                        <label className={styles.labels} htmlFor="" >Password:</label>
                        <input required className={styles.input} type="password" name="password" value={user.password} onChange={handleChange} />
                        <br/>
                
                    </div>
            
                </div>
                            
                            
                            
                    
                    <div className={styles.botonera} >
                            {
                                ( user.username ===""||user.password==="") ?
                                <h4 className={styles.span} >Debe llenar todos los campos para poder enviar el formulario ! Gracias </h4>
                                :

                                <button className={styles.button} type="submit">Login</button>
                            }
                    </div>
            


              

              

            </form>
        </div>
    )
}