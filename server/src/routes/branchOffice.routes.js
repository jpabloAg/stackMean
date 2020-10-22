const { Router } = require('express');
const router = Router();
const { createBranchOffice,
        updateBranchOffice,
        getSingleBranchOffice,
        deleteBranchOffice } = require('../controllers/branchOffice.controller');

router.post('/branchOffice', createBranchOffice);
router.put('/branchOffice/:id', updateBranchOffice);
router.get('/singleBranchOffice/:id', getSingleBranchOffice);
router.delete('/branchOffice/:id', deleteBranchOffice);

module.exports = router;