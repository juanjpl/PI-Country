import React , {useEffect} from "react";
import {useDispatch , useSelector} from "react-redux"
import { obtain_users} from "../../redux/actions";

import {Link} from "react-router-dom";
import styles from './landing.module.css'

import logo from '../../assets/ticketsIcon.png';
import perfil from "../../assets/polinesia.jpg"

export default function Landing(){

 
  
    const usuario = useSelector((state)=> state.usuario)

    //console.log("El usuario logueado es ...")
    // console.log(usuario)
 
     const dispatch = useDispatch()
 


     useEffect(()=>{
     
  
       dispatch(obtain_users())
   
     },[dispatch])



    return(
        <div className={styles.contenedorGeneral} >
            <div className={styles.contenedor} >

                <div className={styles.carrousel} >


                    
                    <h2 className={styles.titulo } >Discover new <span className={styles.span} >places!</span></h2>
                    
                    <h3 className={styles.parrafo}  >Travel arraound de World and know news countries.</h3>
                    
                    <div className={styles.contenedorBotonera} >

                    {
                        usuario[0] ?
                        
                        <Link to="/home" className={styles.button} >
                        <h3  >VIEW ALL COUNTRIES</h3>
                        </Link>
                        : null
                    }

                
                    </div>
                
                </div>

          


            </div>

            <div className={styles.contenedorPaises} >
                    
                <div className={styles.contenedorCountries} >

                    

<div className={styles.contenedorPais1} >

    <p className={styles.descriptionCountry}>Sunny atmosphere</p>
    <h1 className={styles.titleCountry}>Greece</h1>

    <Link to="/" className={styles.buttonRedFull} >
            <h3  >Go</h3>
        </Link>


</div>

<div className={styles.contenedorPais1} >

<p className={styles.descriptionCountry}>Sunny atmosphere</p>
<h1 className={styles.titleCountry}>Greece</h1>

<Link to="/" className={styles.buttonRedFull} >
<h3  >Go</h3>
</Link>


</div>

<div className={styles.contenedorPais1} >

<p className={styles.descriptionCountry}>Sunny atmosphere</p>
<h1 className={styles.titleCountry}>Greece</h1>

<Link to="/" className={styles.buttonRedFull} >
<h3  >Go</h3>
</Link>


</div>
                </div>

            </div>

            <div className={styles.contenedorDescription} >
                <div className={styles.contenedorCardDescription}>
                    <h1>World´s best <span>catalogue</span></h1>
                    <h1>of the most popular travel destinations</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, eos nesciunt. Dignissimos amet repellendus quis quas iste vero omnis repellat nihil quod explicabo minima libero!</p>

                </div>

                <div className={styles.contenedorCardActivities}>
                    <div className={styles.CardActivities}>
            
                        <img className={styles.ImageActivities} src={logo} alt="logo" width="70px" height="70px" />
                        <h1 className={styles.TitleActivities}>Booking System</h1>
                        <p className={styles.TextActivities}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className={styles.CardActivities}>
                    <img className={styles.ImageActivities} src={logo} alt="logo" width="70px" height="70px" />

                        <h1 className={styles.TitleActivities}>Sightseeing</h1>
                        <p className={styles.TextActivities}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>                    
                        </div>
                    
                    <div className={styles.CardActivities}>
                    <img className={styles.ImageActivities} src={logo} alt="logo" width="70px" height="70px" />

                        <h1 className={styles.TitleActivities}>Active pastime</h1>
                        <p className={styles.TextActivities}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>                   
                         </div>

                    <div className={styles.CardActivities}>
                    <img className={styles.ImageActivities} src={logo} alt="logo" width="70px" height="70px" />

                        <h1 className={styles.TitleActivities}>Green traveling</h1>
                        <p className={styles.TextActivities}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>


                </div>

            </div>

            <div className={styles.contenedorWeekActivity}>

                <div className={styles.WeekActivity}>
                    
                    <h1 className={styles.titleCountry}> Weekend in Glaciar Perito Moreno, Argentina</h1>
                    <p className={styles.descriptionCountry}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste, eligendi pariatur expedita optio incidunt cumque ex sit. Earum est possimus adipisci quidem vitae vero quisquam nulla odio consequuntur ducimus!</p>

                    <Link to="/" className={styles.buttonRedFull} >
                           VIEW ALL TOURS
                    </Link>
                </div>

            </div>

            <div className={styles.contenedor3Activities} >
                    
                    <div className={styles.contenedoractivities3} >
    
                        
    
    <div className={styles.contenedorActivity1} style={{backgroundColor:"white"}} >
    
    <img className={styles.ImageActivities} src={logo} alt="logo" width="70px" height="70px" />
        <h1 style={{color:"black"}}>Romantic weekend for two</h1>
        <p style={{color:"grey"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptate.</p>
    
        <Link to="/" className={styles.buttonRedFull} >
               View All
            </Link>
    
    
    </div>
    
    <div className={styles.contenedorActivity1} style={{backgroundColor:"#f4f4f4"}} >
    
    <img className={styles.ImageActivities} src={logo} alt="logo" width="70px" height="70px" />
    <h1>Restaurants and shopping tour</h1>
    <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quam ad nisi.</p>
    
    <Link to="/" className={styles.buttonRedFull} >
    View All
    </Link>
    
    
    </div>
    
    <div className={styles.contenedorActivity1} style={{backgroundColor:"#5e5e5e"}} >
    
    <img className={styles.ImageActivities}  src={logo} alt="logo" width="70px" height="70px" />
    <h1 style={{color:"white"}} >Where the past and the furte meet</h1>
   
    <p style={{color:"white"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam fuga. </p>
    
    <Link to="/" className={styles.buttonRedFull} >
   View All
    </Link>
    
    
    </div>
                    </div>
    
                </div>
            

                <div className={styles.contenedorDescription} >
                <div className={styles.contenedorCardDescription}>
                    <h1>Traveller´s <span> notes </span></h1>
                   
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, eos nesciunt. Dignissimos amet repellendus quis quas iste vero omnis repellat nihil quod explicabo minima libero!</p>

                </div>

                <div className={styles.contenedorPerfiles}>
                    <div className={styles.contenedorPerfilesAjustado}>
                    <div>
                        <div className={styles.CardPerfiles}>

                
                        <img  style={{borderRadius:"50%"}} src={perfil} alt="logo" width="80px" height="80px" />

                        <div style={{padding:"0rem 2rem"}}>
                        <p className={styles.TextActivities}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo expedita, voluptate corporis ipsam omnis fugiat aspernatur, eligendi culpa dicta deleniti soluta rem. Praesentium assumenda sint nulla cupiditate, nemo tempora quisquam.</p>
                        <h1 className={styles.TitleImages}>Denis and Julia, <span>March 12-21</span></h1>

                        </div>

                        </div>

                        <div  className={styles.CardImages}>
                        <img   src={perfil} alt="logo" width="80px" height="80px" />
                        <img   src={perfil} alt="logo" width="80px" height="80px" />
                        <img   src={perfil} alt="logo" width="80px" height="80px" />
                        <img   src={perfil} alt="logo" width="80px" height="80px" />
                        </div>

                    </div>

                    <div>
                        <div className={styles.CardPerfiles}>

                
                        <img  style={{borderRadius:"50%"}} src={perfil} alt="logo" width="80px" height="80px" />

                        <div style={{padding:"0rem 2rem"}}>
                        <p className={styles.TextActivities}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo expedita, voluptate corporis ipsam omnis fugiat aspernatur, eligendi culpa dicta deleniti soluta rem. Praesentium assumenda sint nulla cupiditate, nemo tempora quisquam.</p>
                        <h1 className={styles.TitleImages}>Denis and Julia, <span>March 12-21</span></h1>

                        </div>

                        </div>

                        <div  className={styles.CardImages}>
                        <img   src={perfil} alt="logo" width="85px" height="85px" />
                        <img   src={perfil} alt="logo" width="85px" height="85px" />
                        <img   src={perfil} alt="logo" width="85px" height="85px" />
                        <img   src={perfil} alt="logo" width="85px" height="85px" />
                        </div>

                    </div>


                    </div>
             

               


                </div>

                <div className={styles.contenedorFormulario}>

                    <div className={styles.CardFormulario}>

                    <div className={styles.contenedorCardDescription}>
                    <h1  className={styles.titleCountry}>Contact</h1>
                   
                    <p style={{color:"white"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

                    </div>

                    <div className={styles.Formulario}>

                        <form action="" method="post"  className={styles.Form}>

                            <div style={{display:"flex"}}>
                            <input style={{width:"50%"}} name="name" type="text" placeholder="name" />

                            
                            <input style={{width:"50%"}} name="email" type="email" placeholder="email"/>

                            </div>
                            

                            
                            <input name="subject" type="text" placeholder="Subject" />

                            <textarea style={{height:"200px"}} name="message" placeholder="placeholder"/>

                            <button className={styles.buttonRedFull}>Send</button>
                        </form>

                    </div>

                    </div>
                </div>

            </div>

        </div>

    )
}