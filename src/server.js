//Imports
const express = require('express')
const database = require('./database')

//Init
const port = 3003;
const app = express();

//Uses
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Gets
app.get('/stocks', (req, res) => {
    res.send(database.getStocks())
})

app.get('/stocks/:id', (req, res) => {
    res.send(database.getStock(req.params.id))
})