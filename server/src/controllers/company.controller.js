const { getCompanyConection } = require('../database');
const { v4 } = require('uuid');

const getCompany = (req, res) => {
    const company = getCompanyConection().get('company').value();
    res.json(company);
};

const getSingleCompany = (req, res) => {
    const company = getCompanyConection().get('company').find({id: req.params.id}).value();
    res.json(company);
};

const createCompany = (req, res) => {
    const newCompany = {
        id: v4()+'cmp',
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        occupation: req.body.occupation,
        nit: req.body.nit,
        nameCompany: req.body.nameCompany,
        commercialSection: req.body.commercialSection,
        isSubscribed: false
    }
    getCompanyConection().get('company').push(newCompany).write();
    res.json(newCompany);
};

const updateCompany = async (req, res) => {
    const result = await getCompanyConection().get('company').find({id: req.params.id})
        .assign(req.body)
        .write();
    res.json(result); 
};

const deleteCompany = (req, res) => {
    const result = getCompanyConection().get('company').remove({id: req.params.id}).write();
    res.json(result);
};

module.exports = {
    getCompany, 
    createCompany, 
    getSingleCompany, 
    updateCompany, 
    deleteCompany
}