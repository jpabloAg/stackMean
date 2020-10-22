const { getNaturalPersonConection } = require('../database');
const { v4 } = require('uuid');

const getNaturalPerson = (req, res) => {
    const naturalPerson = getNaturalPersonConection().get('naturalPerson').value();
    res.json(naturalPerson);
};

const getSingleNaturalPerson = (req, res) => {
    const naturalPerson = getNaturalPersonConection().get('naturalPerson').find({id: req.params.id}).value();
    res.json(naturalPerson);
};

const createNaturalPerson = (req, res) => {
    const newNaturalPerson = {
        id: v4()+'np',
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        occupation: req.body.occupation,
        isSubscribed: false
    }
    getNaturalPersonConection().get('naturalPerson').push(newNaturalPerson).write();
    res.json(newNaturalPerson);
};

const updateNaturalPerson = async (req, res) => {
    const result = await getNaturalPersonConection().get('naturalPerson').find({id: req.params.id})
        .assign(req.body)
        .write();
    res.json(result); 
};

const deleteNaturalPerson = (req, res) => {
    const result = getNaturalPersonConection().get('naturalPerson').remove({id: req.params.id}).write();
    res.json(result);
};

module.exports = {
    getNaturalPerson, 
    createNaturalPerson, 
    getSingleNaturalPerson, 
    updateNaturalPerson, 
    deleteNaturalPerson
}