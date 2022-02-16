import axios from "axios";

const URL_GET_COUNTRIES="http://localhost:3001/countries";
const URL_GET_ACTIVITIES="http://localhost:3001/activities";
const URL_GET_USERS="http://localhost:3001/initial";


export const OBTENER_COUNTRY = "Obtener paises";
export const OBTENER_ACTIVITIES = "Obtener actividades";
export const OBTENER_USERS = "Obtener usuarios";



export const BUSCAR_PERSONAJE = "Buscar personaje";
export const BORRAR_PERSONAJE = "Borrar personaje";
export const BUSCAR_UNO ="Buscar uno";

export const LOGIN = "login"

export const GET_NAME_COUNTRY = "Obtener pais por searchbar"


export const SAVE_FAVORITE = "Guardar en favoritos"
export const BORRAR_FAVORITO ="Borrar favorito"


export const ORDER_BY_NAME ="orderByName"
export const SEASON ="season"
export const INDEPENDENT = "independent"
export const CONTINENT ="continent"
export const ORDER_BY_POPULATION = "orderByPopulation"
export const ORDER_BY_ACTIVITY = "orderByActivity"



export function obtain_countries(){

    //pedido a nuestro servidor con axios 
    return async function(dispatch){

       let pedido = await  axios.get(URL_GET_COUNTRIES)
        //console.log(pedido)

        dispatch({
            
            type:OBTENER_COUNTRY,
            payload:pedido.data
        })
    }
  
}



export function obtain_activities(){
    //console.log("Traigo actividades")

    return async function(dispatch){
        let pedido =await axios.get(URL_GET_ACTIVITIES)
        //console.log("actividades")
        //console.log(pedido)
        dispatch({
            type: OBTENER_ACTIVITIES,
            payload: pedido.data
        })
    }
}

export function obtain_users(user){
    //console.log("llegó a Actions usuarios")
    //console.log(user)


    return async function(dispatch){
        let pedido =await axios.get(URL_GET_USERS )
        //console.log("usuarios")
        //console.log(pedido.data)
        dispatch({
            type: OBTENER_USERS,
            payload: pedido.data
        })
    }
}

export function login(usuario){

    //enviamos el usuario por action para comprar en el reducer
    //console.log("usuario por ACTIONS ")
   
           return{
               
               type:LOGIN,
               payload:usuario
           }
       
     
}




export function borrarFavorito(payload){
    //console.log("borro de  favorito a ..." + payload)
    return{
        type: BORRAR_FAVORITO,
        payload
    }
}

export function saveFavorite(payload){
    //console.log("guardo en favorito a ...")
    return{
        type: SAVE_FAVORITE,
        payload: payload
    }
}


export function obtainOne(id){
    //console.log("Busco personaje por ID")
    return{
        type: BUSCAR_UNO,
        payload: id
    }
}



export function orderByName(payload){
    return{
        type: ORDER_BY_NAME,
        payload
    }
}

export function orderByPopulation(payload){
    return{
        type: ORDER_BY_POPULATION,
        payload
    }
}

export function orderByActivity(payload){
    return{
        type: ORDER_BY_ACTIVITY,
        payload
    }
}
export function seasons(season){
    //console.log("Filtro especies por ...")
    //console.log(season)
    //no es necesario enviar nada, ya que solo enviamos la orden
    return{
        type:SEASON,
        payload:season
    }
}

export function continent(season){
    //console.log("Filtro especies por ...")
    //console.log(season)
    //no es necesario enviar nada, ya que solo enviamos la orden
    return{
        type:CONTINENT,
        payload:season
    }
}

export function independent(season){
    //console.log("Filtro especies por ...")
    //console.log(season)
    //no es necesario enviar nada, ya que solo enviamos la orden
    return{
        type:INDEPENDENT,
        payload:season
    }
}

export function getNameCountry(name){
    //console.log("El nombre de la searchbar es .... " + name)
    return async function( dispatch){
        try{
            var json = await axios.get("http://localhost:3001/countries?name=" + name);
            //console.log(json.data)
            
            return dispatch({
                type:GET_NAME_COUNTRY,
                payload: json.data
            })
        }catch(error){
            console.log(error)
        }
    }
}

export  function deleteCharacter(id){
console.log("El id traido para borrar es ..." + id)

return async function( dispatch){
    //console.log(payload)
   
    const response = await axios.delete(`http://localhost:3001/characters/${id}`);

    
    //console.log(response)
    
    return response;
}



}