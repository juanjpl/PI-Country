import styles from './label.module.css'

export default function Label({mensaje}){


    return(
        <div className={styles.loading} >
            <h1 className={styles.loading}>{mensaje} </h1>
        </div>
    )
}