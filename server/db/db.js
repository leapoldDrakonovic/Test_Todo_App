const {Sequelize} = require('sequelize');


module.exports = new Sequelize(
    'ToDo_App',
    'postgres',
    '1234',
    {
        dialect:'postgres',
        host: 'localhost',
        port: 5100
    }

    
)