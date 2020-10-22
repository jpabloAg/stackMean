const { Router } = require('express');
const router = Router();
const { getCurrentAccount, 
        createCurrentAccount, 
        getSingleCurrentAccount, 
        updateCurrentAccount, 
        deleteCurrentAccount,
        getSingleCurrentAccountTitular } = require('../controllers/currentAccount.controller');

router.get('/currentAccount', getCurrentAccount);
router.get('/singleCurrentAccount/:id', getSingleCurrentAccount);
router.get('/singleCurrentAccountTitular/:titular', getSingleCurrentAccountTitular);
router.post('/currentAccount', createCurrentAccount);
router.put('/currentAccount/:id', updateCurrentAccount);
router.delete('/currentAccount/:id', deleteCurrentAccount);

module.exports = router;