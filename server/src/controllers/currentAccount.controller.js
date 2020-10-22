const { getCurrentAccountConection } = require('../database');
const { v4 } = require('uuid');

const getCurrentAccount = (req, res) => {
    const currentAccount = getCurrentAccountConection().get('currentAccount').value();
    res.json(currentAccount);
};

const getSingleCurrentAccount = (req, res) => {
    const currentAccount = getCurrentAccountConection().get('currentAccount').find({id: req.params.id}).value();
    res.json(currentAccount);
};

const getSingleCurrentAccountTitular = (req, res) => {
    const currentAccount = getCurrentAccountConection().get('currentAccount').value();
    let send = [];
    currentAccount.forEach((cuenta)=>{
        if (cuenta.titular == req.params.titular) {
            send.push(cuenta)
        }
    });
    res.json(send);
};

const createCurrentAccount = (req, res) => {
    const newCurrentAccount = {
        id: v4()+'ca',
        titular: req.body.titular,
        balance: req.body.balance,
        sucursal: req.body.sucursal,
        isActive: req.body.isActive
    }
    getCurrentAccountConection().get('currentAccount').push(newCurrentAccount).write();
    res.json(newCurrentAccount);
};

const updateCurrentAccount = async (req, res) => {
    const result = await getCurrentAccountConection().get('currentAccount').find({id: req.params.id})
        .assign(req.body)
        .write();
    res.json(result); 
};

const deleteCurrentAccount = (req, res) => {
    const result = getCurrentAccountConection().get('currentAccount').remove({id: req.params.id}).write();
    res.json(result);
};

module.exports = {
    getCurrentAccount, 
    createCurrentAccount, 
    getSingleCurrentAccount, 
    updateCurrentAccount, 
    deleteCurrentAccount,
    getSingleCurrentAccountTitular
}