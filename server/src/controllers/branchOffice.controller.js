const { getBranchOfficeConection } = require('../database');
const { v4 } = require('uuid');

const createBranchOffice = (req, res) => {
    const newBranchOffice = {
        id: v4()+'ca',
        titular: req.body.name,
        balance: 0
    }
    getBranchOfficeConection().get('branchOffice').push(newBranchOffice).write();
    res.json(newBranchOffice);
};

const updateBranchOffice = async (req, res) => {
    const result = await getBranchOfficeConection().get('branchOffice').find({id: req.params.id})
        .assign(req.body)
        .write();
    res.json(result); 
};

const getSingleBranchOffice = (req, res) => {
    const branchOffice = getBranchOfficeConection().get('branchOffice').find({id: req.params.id}).value();
    res.json(branchOffice);
};

const deleteBranchOffice = (req, res) => {
    const result = getBranchOfficeConection().get('branchOffice').remove({id: req.params.id}).write();
    res.json(result);
};


module.exports = {
    createBranchOffice,
    updateBranchOffice,
    getSingleBranchOffice,
    deleteBranchOffice
}