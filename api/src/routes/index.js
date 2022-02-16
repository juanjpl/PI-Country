const { Router } = require('express')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const countriesRoutes = require('./Country.js')
const activitiesRoutes = require('./Activity.js')
const initialRoutes = require('./Initial.js')

const router = Router()

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries' , countriesRoutes);

router.use('/activities' , activitiesRoutes);

router.use('/initial' , initialRoutes);

module.exports = router