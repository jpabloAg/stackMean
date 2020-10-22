const { Router } = require('express');
const router = Router();
const { getSavingsAccount, 
        createSavingsAccount, 
        getSingleSavingsAccount, 
        updateSavingsAccount, 
        deleteSavingsAccount,
        getSingleSavingsAccountTitular } = require('../controllers/savingsAccount.controller');


router.get('/savingAccount', getSavingsAccount);
router.get('/singleSavingAccount/:id', getSingleSavingsAccount);
router.get('/singleSavingAccountTitular/:titular', getSingleSavingsAccountTitular);
router.post('/savingAccount', createSavingsAccount);
router.put('/savingAccount/:id', updateSavingsAccount);
router.delete('/savingAccount/:id', deleteSavingsAccount);

module.exports = router;