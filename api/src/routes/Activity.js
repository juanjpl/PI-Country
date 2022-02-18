const express = require("express")
const router = express.Router()


//importamos las funciones del controlador 
const {obtenerActivity , crearActivity , buscarActivity, borrarActivity} = require('../controllers/Activity')




//ruta para traer paises y uso de las querys
router.get('/' , obtenerActivity );

//ruta que usamos para params
router.get('/:id' , buscarActivity);

//ruta para agregar paises
router.post('/' , crearActivity);

//ruta para agregar paises
router.put('/' , (req,res)=>{
    res.status(200).json({message: "Estoy usando el PUT"})
});

router.delete('/:id' ,borrarActivity);



module.exports = router;


