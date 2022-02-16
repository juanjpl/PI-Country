//const axios = require('axios')
const {Activity,Country } = require('../db')



const activityDB = async(req,res,next)=>{

    try {
        return await Activity.findAll({include: Country})

    } catch (error) {
        next(error)
    }
    
}


//traemos los personajes  y tambien verificamos si buscamos por query
const obtenerActivity = async(req , res ,next) =>{

    const name = req.query.name;
    let activityTotal = await activityDB();

    if(name){

        let activityName = await activityTotal.filter( el => el.name.toLowerCase().includes(name.toLowerCase()))
        
        activityName.length?
        res.status(200).send(activityName) :
        res.status(404).send([])
    }else{
        res.status(200).send(activityTotal)
    }
 
}




const crearActivity = async (req ,res , next)=>{

    const activity  = req.body;
    //aqui hay que hacer mas comprobaciones de como vienen los datos 
    //console.log("Acitividad Recibido !")
    //console.log(activity)

    if(activity){
        try {


            const obj ={
                name:activity.name,
                dificulty:activity.dificulty,
                duration:parseInt(activity.duration),
                info:activity.info,
                image: activity.image,
                season: activity.season
            }


            console.log(obj)
            console.log(activity.countries)


            const crear = await Activity.create(obj)
           
            activity.countries.forEach( async ep =>{
                let busqueda = await Country.findAll({where : {id:ep} })

                if(busqueda){
                    crear.addCountry(ep)
                }
            })

            res.status(200).send("ok ! Se creó perfectamente !")
            
        } catch (error) {
            next(error)
        }
    }else{
        res.send("No se envió actividad por body !")
    }
    
}


//ultima ruta para traer id por params ...
const buscarActivity= async (req , res , next)=>{

     //traigo el id por params.....
    // const {id} = req.params;
    const id = req.params.id;
    const activityTotal = await activityDB();

    if(id){
        let activityId = await activityTotal.filter( el => el.id == id);
        activityId.length ?
        res.status(200).json(activityId):
        res.status(404).send('Activity not found ! ')
    }

}


const borrarActivity = async (req, res, next) =>{

    const {id} = req.params;

    Activity.destroy({where: {id}})
    .then(() => {
      return res.send({deleteStatus: "Activity successfully removed"})
    })
    .catch(err => {
      res.send({deleteStatus: err});
      next(err);
    })
}


module.exports ={
    obtenerActivity,
    crearActivity,
    buscarActivity,
    borrarActivity
}