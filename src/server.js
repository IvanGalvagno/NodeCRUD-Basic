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
    const stock = database.saveStock({
        ticket: req.body.ticket,
        name: req.body.name,
        price: req.body.price,
        yeld: req.body.yeld
    });
    res.send(stock)
})