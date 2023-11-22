const { Router } = require('express');
const getDogsByidRaza = require('../controllers/getDogsByidRaza');
const getAllBreed = require('../controllers/getAllBreed');
const getDogsByQuery = require('../controllers/getDogsByQuery');
const getTemperamentFomAPI = require('../controllers/getTemperamentFromAPI');
const postDog = require('../controllers/postDog');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/dogs",getAllBreed);

router.get("/dogs/name", getDogsByQuery);

router.get("/temperaments",getTemperamentFomAPI)

router.get("/:idRaza", getDogsByidRaza);

router.post("/dogs", postDog)








module.exports = router;
