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

con.connect ((err) => {
    si (err) {
      console.log ('Erreur de connexion à Db');
      revenir;
    }
    console.log ('Connexion établie');
  });

  con.end ((err) => {
    // La connexion se termine normalement
    // Garantit que toutes les requêtes restantes sont exécutées
    // Envoie ensuite un paquet de sortie au serveur MySQL.
  });

const app = express(); // ce qui permet de créer une appli express .

module.exports = app; // ce qui nous permet d'exporter notre app dans d'autre fichiers .