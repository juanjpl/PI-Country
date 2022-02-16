//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const axios = require('axios')
const { conn , Country } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: false }).then(async() => {


  const verification = await Country.findAll()
 
  //precarga de los paises


  if(verification.length <1){
    const countries = await axios.get("https://restcountries.com/v3.1/all")
    
    const formato = countries.data?.map(c=>{

      /*
      const lenguaje = c.currencies ? Object.values(c.currencies).map(c=> c.name): ["Unknown"]
      console.log (lenguaje)
      */


      return{
        id: c.cca3? c.cca3 : "Unknown",
        nameCommon: c.name.common ? c.name.common : "Unknown",
        name: c.name.official ? c.name.official : "Unknown",
        capital:  c.capital ? c.capital : ["Unknown"],
        subregion: c.subregion ? c.subregion : "Unknown",
        region: c.region ? c.region : "Unknown",
        population: c.population ? c.population : 0,
        area:  c.area ? c.area : 0,
        borders:  c.borders ? c.borders : ["Unknow"],
        currencies: c.currencies ? Object.values(c.currencies).map(c=> c.name): ["Unknown"] ,
        languages:c.languages ? Object.values( c.languages) : ["Unknown"],
        flag: c.flags.png ? c.flags.png: "Unknown",
        continents: c.continents[0] ? c.continents[0] : "Unknown",
        independent: c.independent ? c.independent : false
      
       

      }
    })

    //console.log(formato)
      //bulkCreate --- > recibe un arreglo de objetos y crea una fila con cada uno 
        
      await Country.bulkCreate(formato)
      console.log("se cargaron los paises exitosamente!")

  }
  

  //chequeamos que lo que traemos es lo que necesitamos guardar
  



  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    console.log('Levantamos la DB de Countries !')
    console.log('Todo funciona perfecto !')
  });
});
