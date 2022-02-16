const express = require("express")
const router = express.Router()


//importamos las funciones del controlador 
const {obtenerUser , crearUser , buscarUser, borrarUser} = require('../controllers/Initial')




//ruta para traer personajes y uso de las querys
router.get('/' ,obtenerUser);



//ruta que usamos para params
router.get('/:id' , buscarUser);

//ruta para agregar personajes
router.post('/' , crearUser);

//ruta para agregar personajes
router.put('/' , (req,res)=>{
    res.status(200).json({message: "Estoy usando el INITIAL PUT"})
});

router.delete('/:id' , borrarUser);



module.exports = router;