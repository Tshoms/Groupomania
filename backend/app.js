const express = require('express'); // importter 'express.js' .
const mysql   = require('mysql'); // importer "Mysql" .

// connection base de donnée sql.
const db = mysql.createConnection({

    host       : 'localhost',
    user       : 'root',
    passwords  : '1234567',
    database   : 'nodemysql'

});

// connect

const app = express(); // ce qui permet de créer une appli express .

module.exports = app; // ce qui nous permet d'exporter notre app dans d'autre fichiers .