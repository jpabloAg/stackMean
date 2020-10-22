const { Router } = require('express');
const router = Router();
const { getCompany, 
        createCompany, 
        getSingleCompany, 
        updateCompany, 
        deleteCompany } = require('../controllers/company.controller');

router.get('/company', getCompany);//todas las personas naturales
router.get('/singleCompany/:id', getSingleCompany);//un persona natural
router.post('/company', createCompany);//crear persona natural
router.put('/company/:id', updateCompany);//actualizar
router.delete('/company/:id', deleteCompany);//eliminar

module.exports = router;