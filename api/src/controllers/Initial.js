//const axios = require('axios')
const {User, } = require('../db')



const usersDB = async(req,res,next)=>{

    try {
        return await User.findAll()

    } catch (error) {
        next(error)
    }
    
}
/*
  if(name){

        

        let usuarioName = await usuariosTotal.filter( el => el.username === name.username && el.password === name.password)
        console.log()
        usuarioName.length?
        res.status(200).send(usuarioName) :
        res.status(404).send([])
    }else{
        res.status(200).send([])
    }
 
*/


//traemos los personajes  y tambien verificamos si buscamos por query
const obtenerUser = async(req , res ,next) =>{
    
    

        

        let usuarios = await usersDB();

        
        usuarios.length?
        res.status(200).send(usuarios) :
        res.status(204).send([])
   
 
}




const crearUser = async (req ,res , next)=>{

    const user  = req.body;
    //aqui hay que hacer mas comprobaciones de como vienen los datos 
    console.log("Usuario Recibido !")
    console.log(user)

    if(user){
        try {


            const obj ={
                username: user.username,
                name:user.name,
                email:user.email,
                password:user.password,
                image:user.image
               
            }

            await User.create(obj)
         

            res.send("ok ! Usuario creado perfectamente !")
            
        } catch (error) {
            next(error)
        }
    }else{
        res.send("No se envió ningún usuario !")
    }
    
}


//ultima ruta para traer id por params ...
const buscarUser= async (req , res , next)=>{

     //traigo el id por params.....
    // const {id} = req.params;
    const id = req.params.id;
    const userTotal = await usersDB();

    if(id){
        let userId = await userTotal.filter( el => el.id == id);
        userId.length ?
        res.status(200).json(userId):
        res.status(404).send('User not found ! ')
    }

}


const borrarUser = async (req, res, next) =>{

    const {id} = req.params;

    User.destroy({where: {id}})
    .then(() => {
      return res.send({deleteStatus: "User successfully removed"})
    })
    .catch(err => {
      res.send({deleteStatus: err});
      next(err);
    })
}


module.exports ={
    obtenerUser,
    crearUser,
    buscarUser,
    borrarUser
}