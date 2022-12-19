
const Client = require('pg').Client;
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "bazepodataka",
    database: "Igrice"
});

module.exports = client;

