const { Router } = require('express');
const router = Router();
const { getNaturalPerson, 
        createNaturalPerson, 
        getSingleNaturalPerson, 
        updateNaturalPerson, 
        deleteNaturalPerson } = require('../controllers/naturalPerson.controller');

router.get('/naturalperson', getNaturalPerson);//todas las personas naturales
router.get('/singleNaturalperson/:id', getSingleNaturalPerson);//un persona natural
router.post('/naturalperson', createNaturalPerson);//crear persona natural
router.put('/naturalperson/:id', updateNaturalPerson);//actualizar
router.delete('/naturalperson/:id', deleteNaturalPerson);//eliminar

module.exports = router;