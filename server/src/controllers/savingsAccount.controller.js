const { getSavingsAccountConection, } = require('../database');
const { v4 } = require('uuid');

const getSavingsAccount = (req, res) => {
    const savingsAccount = getSavingsAccountConection().get('savingsAccount').value();
    res.json(savingsAccount);
};

const getSingleSavingsAccount = (req, res) => {
    const savingsAccount = getSavingsAccountConection().get('savingsAccount').find({id: req.params.id}).value();
    res.json(savingsAccount);
};

const getSingleSavingsAccountTitular = (req, res) => {
    const savingsAccount = getSavingsAccountConection().get('savingsAccount').value();
    let send = [];
    savingsAccount.forEach((cuenta)=>{
        if (cuenta.titular == req.params.titular) {
            send.push(cuenta)
        }
    });
    res.json(send);
};

const createSavingsAccount = (req, res) => {
    const newSavingsAccount = {
        id: v4()+'sa',
        titular: req.body.titular,
        interest: req.body.interest,
        balance: req.body.balance,
        sucursal: req.body.sucursal,
        isActive: req.body.isActive
    }
    getSavingsAccountConection().get('savingsAccount').push(newSavingsAccount).write();
    res.json(newSavingsAccount);
};

const updateSavingsAccount = async (req, res) => {
    const result = await getSavingsAccountConection().get('savingsAccount').find({id: req.params.id})
        .assign(req.body)
        .write();
    res.json(result); 
};

const deleteSavingsAccount = (req, res) => {
    const result = getSavingsAccountConection().get('savingsAccount').remove({id: req.params.id}).write();
    res.json(result);
};

module.exports = {
    getSavingsAccount, 
    createSavingsAccount, 
    getSingleSavingsAccount, 
    updateSavingsAccount, 
    deleteSavingsAccount,
    getSingleSavingsAccountTitular
}