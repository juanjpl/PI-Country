const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    id:{
        type: DataTypes.UUID,
        primaryKey:true,
        allowNull:false,
        defaultValue: DataTypes.UUIDV4
      },
      username:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
      
      name:{
          type:DataTypes.STRING,
          unique:true,
          allowNull:false
      },
      
      
      
      email:{
          type:DataTypes.STRING,
          unique:true,
          allowNull:false
      },
  
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
 
    
  });
};
