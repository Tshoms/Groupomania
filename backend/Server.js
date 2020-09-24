const http = require('http'); // importer le package HTTP Node afin de pouvoir créer un serveur .

const server = http.createServer((req, res) => { // la fonction qui sera appeller lorsqu'une requete sera effectuer . 

    res.end('voila mon deuxième serveur !');

});

server.listen(process.env.PORT || 3001);
