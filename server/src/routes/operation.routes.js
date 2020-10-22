const { Router } = require('express');
const router = Router();
const { createOperation } = require('../controllers/operation.controller');

router.post('/operation', createOperation);

module.exports = router;