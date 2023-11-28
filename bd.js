//configurar o seu bd
let mysql = require('serverless-mysql');

let config = {
    host: 'localhost',
    database: 'iftm_pokemon',
    user: 'root',
    password: ''
}

let bd = mysql({config});
module.exports = bd;