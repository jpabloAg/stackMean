const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');

 // Clients
let naturalPerson;
let company;
// Accounts
let savingsAccount;
let currentAccount;

// Sucursal
let branchOffice;
// Operation
let operation;

// << -- Sucursal -- >>
async function createBranchOfficeConnection(){
    const adapter = new FileAsync('branchOffice.json');
    branchOffice = await low(adapter);
    branchOffice.defaults({ branchOffice:[] }).write();
}

// << -- Operation -- >>
async function createOperationConnection(){
    const adapter = new FileAsync('operation.json');
    operation = await low(adapter);
    operation.defaults({ operation:[] }).write();
}

// << -- Natural person -- >>
async function createNaturalPersonConnection(){
    const adapter = new FileAsync('naturalPerson.json');
    naturalPerson = await low(adapter);
    naturalPerson.defaults({ naturalPerson:[] }).write();
}

// << -- Company -- >>
async function createCompanyConnection(){
    const adapter = new FileAsync('company.json');
    company = await low(adapter);
    company.defaults({ company:[] }).write();
}

// << -- Savings account -- >>
async function createSavingsAccountConnection(){
    const adapter = new FileAsync('savingsAccount.json');
    savingsAccount = await low(adapter);
    savingsAccount.defaults({ savingsAccount:[] }).write();
}

// << --  current account -- >>
async function createCurrentAccountConnection(){
    const adapter = new FileAsync('currentAccount.json');
    currentAccount = await low(adapter);
    currentAccount.defaults({ currentAccount:[] }).write();
}

const getNaturalPersonConection = () => naturalPerson;
const getCompanyConection = () => company;
const getSavingsAccountConection = () => savingsAccount;
const getCurrentAccountConection = () => currentAccount;
const getBranchOfficeConection = () => branchOffice;
const getOperationConection = () => operation;

module.exports = {
    createNaturalPersonConnection,
    createCompanyConnection,
    createSavingsAccountConnection,
    createCurrentAccountConnection,
    getNaturalPersonConection,
    getCompanyConection,
    getSavingsAccountConection,
    getCurrentAccountConection,
    createBranchOfficeConnection,
    createOperationConnection,
    getBranchOfficeConection,
    getOperationConection
}