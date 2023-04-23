const mysql = require ('mysql2');

const {Sequelize,Op} = require('sequelize')

const sequelize = new Sequelize('db_a98223_minicor', 'a98223_minicor', 'Norman1719590778', {
    host: 'MYSQL8003.site4now.net',
    dialect: 'mysql',
    logging: false
})

sequelize.sync(/*{ force: true }*/)
    .then(() => {
        console.log(`Database & tables created!`);
    });

module.exports = {sequelize,Sequelize,Op}