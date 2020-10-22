const { getOperationConection } = require('../database');

const createOperation = (req, res) => {
    const newOperation = {
        name: req.body.name,
        account: req.body.account,
        value: req.body.value,
        sucursal: req.body.sucursal,
        date: req.body.date,
        time: req.body.time
    }
    getOperationConection().get('operation').push(newOperation).write();
    res.json(newOperation);
};

module.exports = {
    createOperation
}

