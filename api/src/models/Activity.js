const {DataTypes} = require('sequelize');

/*
[ ] Actividad Turística con las siguientes propiedades:
ID
Nombre
Dificultad (Entre 1 y 5)
Duración
Temporada (Verano, Otoño, Invierno o Primavera)
*/

module.exports = (sequelize)=>{
    sequelize.define('activity',{
        id:{
            type: DataTypes.UUID,
            allowNull:false,
            unique:true,
            primaryKey:true,
            defaultValue: DataTypes.UUIDV4
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
        },
        dificulty:{
            type: DataTypes.ENUM("1","2","3","4","5"),
            allowNull:false,
           
        },
        duration:{
            type:DataTypes.INTEGER,
            allowNull:false,
            defaultValue: 0
        },
        info:{
            type:DataTypes.TEXT,
            allowNull:true,
            defaultValue:"Unknown"
        },
        image:{
            type:DataTypes.STRING,
            allowNull:true,
            defaultValue:"https://thumbs.dreamstime.com/b/viaje-dise-o-del-logotipo-de-la-agencia-turismo-iconos-y-s-mbolos-colecci-n-los-146308687.jpg"
        },
        season:{
            type:DataTypes.ARRAY(DataTypes.ENUM("Spring","Summer","Winter","Fall")),
            allowNull:true,
            defaultValue: []
        }
    })
}