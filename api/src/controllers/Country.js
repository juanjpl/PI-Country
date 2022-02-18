//const axios = require('axios')
const {Country , Activity } = require('../db')



const countriesDB = async(req,res,next)=>{

    try {
        return await Country.findAll({include: Activity})

    } catch (error) {
        next(error)
    }
    
}


//traemos los personajes  y tambien verificamos si buscamos por query
const obtenerCountry = async(req , res ,next) =>{

    const name = req.query.name;
    let countryTotal = await countriesDB();

    if(name){

        let countryName = await countryTotal.filter( el => el.name.toLowerCase().includes(name.toLowerCase()))
        
        countryName.length?
        res.status(200).send(countryName) :
        res.status(204).send([])
    }else{
        res.status(200).send(countryTotal)
    }
 
}




const crearCountry = async (req ,res , next)=>{

    const country  = req.body;
    //aqui hay que hacer mas comprobaciones de como vienen los datos 
    console.log("Personaje Recibido !")
    console.log(country)

    if(country){
        try {


            const obj ={
                name:country.name,
                nameCommon:country.nameCommon,
                capital:country.capital,
                subregion:country.subregion,
                region: country.region,
                population:country.population,
                area:country.area,
                borders:country.borders,
                flag:country.flag,
                currencies: country.currencies,
                languajes:country.languajes,
                continents:country.continents,
                independent:country.independent,
                

            }

            const crear = await Country.create(obj)


            //["asdf4asd455" , "asdf565fg9"]
            //para cada uno de los episodios que trae el array
            //los busca y si los encuentra ... los relaciona con el personaje

            country.activities.forEach( async ep =>{
                let busqueda = await Activity.findOrCreate({where : {id:ep} })

                if(busqueda){
                    crear.addActivity(ep)
                }
            })

            res.send("ok ! Se creó perfectamente !")
            
        } catch (error) {
            next(error)
        }
    }else{
        res.send("No viene país por body !")
    }
    
}


//ultima ruta para traer id por params ...
const buscarCountry= async (req , res , next)=>{

     //traigo el id por params.....
    // const {id} = req.params;

    
    const id = req.params.id;
    const countryTotal = await countriesDB();

    if(id){
        let countryId = await countryTotal.filter( el => el.id == id);
        countryId.length ?
        res.status(200).json(countryId):
        res.status(200).send([{message:"Country not found!"}])
    }

}


const borrarCountry = async (req, res, next) =>{

    const {id} = req.params;

    Country.destroy({where: {id}})
    .then(() => {
      return res.status(200).send({deleteStatus: "Country successfully removed"})
    })
    .catch(err => {
      res.status(204).send({deleteStatus: err});
      next(err);
    })
}


module.exports ={
    obtenerCountry,
    crearCountry,
    buscarCountry,
    borrarCountry
}