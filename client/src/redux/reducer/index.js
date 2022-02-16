import { OBTENER_COUNTRY ,  OBTENER_ACTIVITIES, LOGIN,  OBTENER_USERS, ORDER_BY_POPULATION , ORDER_BY_ACTIVITY, SEASON, CONTINENT , GET_NAME_COUNTRY ,ORDER_BY_NAME, BORRAR_PERSONAJE, SAVE_FAVORITE, BORRAR_FAVORITO, INDEPENDENT } from "../actions"


//estado inicial

const initialState ={
    allCountries:[],
    filteredCountries:[],
    activities:[],
    favorites:[],
    users:[],
    usuario:[],
    save:[]
}


export default function rootReducer(state=initialState , action){
  

    switch(action.type){

        case OBTENER_COUNTRY:
            //console.log("Countries !")
            //console.log(action.payload)
        return{
            ...state,
            filteredCountries: action.payload ,  //arreglo de paises
            allCountries: action.payload
        }

        
        case OBTENER_ACTIVITIES:
            
        //console.log("Activities!")
        //console.log(action.payload)
        return{
            ...state,
            activities: action.payload  //arreglo de actividades
        }

        case OBTENER_USERS:
            
            //console.log("Users !")
            //console.log(action.payload)
            
            return{
                ...state,
                users: action.payload  //arreglo de usuarios
            }

        
            case LOGIN:
            
                //console.log("Usuario al reducer!")
                //console.log(action.payload)

                let respuesta = state.users.filter(a=> a.username===action.payload.username && a.password===action.payload.password)
                //console.log("Este es el usuario encontrado")
                //console.log(respuesta)

                return{
                    ...state,
                    usuario: respuesta //arreglo de usuarios
                }

        case ORDER_BY_NAME:
            let copyState = [...state.allCountries ];

            if(action.payload === "all"){
                return{
                    ...state,
                    filteredCountries : state.allCountries
                }
            }

            let sortedArr = action.payload === 'A' ?
                copyState.sort(function(a,b){
                    if(a.name.toLowerCase() > b.name.toLowerCase() ){
                        return 1
                    }
                    if(b.name.toLowerCase()  > a.name.toLowerCase() ){
                        return -1
                    }
                    return 0
                }):
                copyState.sort(function(a,b){
                    if(a.name.toLowerCase()  >b.name.toLowerCase() ){
                        return-1
                    }
                    if(b.name.toLowerCase()  > a.name.toLowerCase() ){
                        return 1
                    }
                    return 0
                })
            return{
                ...state,
                filteredCountries : sortedArr
            }

            case ORDER_BY_POPULATION:
                let copyStates = [...state.allCountries ];
    
                if(action.payload === "all"){
                    return{
                        ...state,
                        filteredCountries : state.allCountries
                    }
                }
    
                let sortedArrs = action.payload === 'A' ?
                    copyStates.sort(function(a,b){
                        if(a.population > b.population ){
                            return 1
                        }
                        if(b.population  > a.population){
                            return -1
                        }
                        return 0
                    }):
                    copyStates.sort(function(a,b){
                        if(a.population >b.population){
                            return-1
                        }
                        if(b.population > a.population){
                            return 1
                        }
                        return 0
                    })
                return{
                    ...state,
                    filteredCountries : sortedArrs
                }

        case   SEASON:

        //esto es filtro anidado ... aprender bien .... // agregar a todos los select ALL... asi se puede resetear...


            if(action.payload === "all"){
                return{
                    ...state,
                    filteredCountries: state.allCountries
                }
            }else {

                //let paises = state.allCountries.filter(e => e.activities.filter(a=> a.season.includes("Spring")))
                //console.log(paises)
                let actividades = state.activities.filter( a => a.season.includes(action.payload))
                let mapActivities = actividades[0].countries

                console.log(mapActivities)
                console.log(actividades )

                
                return{
                    ...state,
                    filteredCountries: mapActivities
                }
            }
            

            
        case   ORDER_BY_ACTIVITY:

            //esto es filtro anidado ... aprender bien .... // agregar a todos los select ALL... asi se puede resetear...
    
    
                if(action.payload === "all"){
                    return{
                        ...state,
                        filteredCountries: state.allCountries
                    }
                }else {
    
                    //let paises = state.allCountries.filter(e => e.activities.filter(a=> a.season.includes("Spring")))
                    //console.log(paises)
                    let actividades = state.activities.filter( a => a.name.includes(action.payload))
                    let mapActivities = actividades[0].countries
    
                    console.log(mapActivities)
                    console.log(actividades )
    
                    
                    return{
                        ...state,
                        filteredCountries: mapActivities
                    }
                }

            case CONTINENT:

            if(action.payload === "all"){
                return{
                    ...state,
                    filteredCountries: state.allCountries
                }
            }else {
                return{
                    ...state,
                    filteredCountries: state.allCountries.filter(c => c.continents === action.payload)
                }

            }
                
            case INDEPENDENT:

                if(action.payload === "true"){
                    return{
                        ...state,
                        filteredCountries: state.filteredCountries.filter(c => c.independent === true)
                    }
                }else if( action.payload === "false" ){
                    return{
                        ...state,
                        filteredCountries: state.filteredCountries.filter(c => c.independent === false)
                    }
    
                }else{
                    return{
                        ...state,
                        filteredCountries: state.allCountries
                    }
                }
            
      
            case GET_NAME_COUNTRY:
                
                return{
                    ...state,
                    filteredCountries: action.payload
                }
            
                case BORRAR_PERSONAJE:
                
                    return{
                        ...state
                    }
       
                    case SAVE_FAVORITE:
                    //console.log("llega el personaje para guardar")
                    //console.log(action.payload)
                        return{
                            ...state,
                            favorites:[...state.favorites,action.payload]
                        }

            /*
               case  REMOVE_TODO:
            //action = {type: REMOVE_TODO , index:3}
            return{
                ...state,
                todo:state.todo.filter((t,index)=>index !== action.index)
            }
            case  REMOVE_TODO:
                //alternativo cuando el add tiene id
                return{
                    ...state,
                    todo:state.todo.filter((t)=>t.id!== action.index)
                }
            */

                        case BORRAR_FAVORITO:
                            //console.log("llega el personaje para borrar de favoritos")
                            //console.log(action.payload)

                            let filtro = state.favorites.filter(f=> f.id !== action.payload)
                            //console.log("estado filtrado ")
                            //console.log(filtro)
                            return{
                                ...state,
                                favorites:filtro
                            }

                 
        default: return state
    }
}