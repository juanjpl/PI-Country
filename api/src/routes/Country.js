const express = require("express")
const router = express.Router()


//importamos las funciones del controlador 
const {obtenerCountry , crearCountry , buscarCountry, borrarCountry} = require('../controllers/Country')




//ruta para traer personajes y uso de las querys
router.get('/' , obtenerCountry );

//ruta que usamos para params
router.get('/:id' , buscarCountry);

//ruta para agregar personajes
router.post('/' ,crearCountry);

//ruta para agregar personajes
router.put('/' , (req,res)=>{
    res.status(200).json({message: "Estoy usando el PUT"})
});

router.delete('/:id' ,borrarCountry);



module.exports = router;