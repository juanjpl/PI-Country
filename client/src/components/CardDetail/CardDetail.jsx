import styles from './card.module.css'
import CardActivity from "../CardActivity/CardActivity"

export default function CardDetail({...country}){



    return(
        <div className={styles.contenedorCard}>

            <div className={styles.contenedorMitad}>
           
            
            <h1 className={styles.nombre} >{country.name} </h1>
            <img src={country.flag} alt={country.name} className={styles.imagen} />
            <h1 className={styles.description} >Id: <span>{country.id}</span>  </h1>
            <h1 className={styles.description}>Name Common: {country.nameCommon} </h1>
            <h1 className={styles.description}>Capital: {country.capital} </h1>
            <h1 className={styles.description}>Area: {country.area} km2</h1>
            <h1 className={styles.description}>Population: {country.population} </h1>
            <h1 className={styles.description}>Capital: {country.capital} </h1>
            <h1 className={styles.description}>Continent: {country.continents} </h1>
            <h1 className={styles.description}>Languajes: {country.languages} </h1>
            <h1 className={styles.description}>Currencies: {country.currencies} </h1>

            </div>

       
           
   
            <div className={styles.contenedorMitad}>
                {
                    country.activities?.map(a=>{
                        return(
                            <div>
                                <CardActivity {...a}/>
                            </div>
                        )
                    })
                }
            </div>
          

        


      

        </div>
    )
}