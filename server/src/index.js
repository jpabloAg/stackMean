const app = require('./app');
const {
    createNaturalPersonConnection,
    createCompanyConnection,
    createSavingsAccountConnection,
    createCurrentAccountConnection,
    createBranchOfficeConnection,
    createOperationConnection
} = require('./database');

createNaturalPersonConnection();
createCompanyConnection();
createSavingsAccountConnection();
createCurrentAccountConnection();
createBranchOfficeConnection();
createOperationConnection();
app.listen(3000);
console.log('Server on port', 3000);