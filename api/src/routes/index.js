const { Router } = require('express');
const getDogByQuery = require('../controllers/getDogByQuery');
const getAllBreed = require('../controllers/getAllBreed');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/dogs",getAllBreed)
router.get("/:breed", getDogByQuery)



module.exports = router;
