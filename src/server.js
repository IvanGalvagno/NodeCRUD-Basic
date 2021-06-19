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

//Post
app.post('/stocks', (req, res) => {
    const stock = database.saveStock({
        ticket: req.body.ticket,
        name: req.body.name,
        price: req.body.price,
        yeld: req.body.yeld
    });
    res.send(stock) //Return a JSON
})

//Put
app.put('/stocks/:id', (req, res) => {
    const stock = database.saveStock({
        ticket: req.body.ticket,
        name: req.body.name,
        price: req.body.price,
        yeld: req.body.yeld
    });
    res.send(stock) //Return a JSON
})

//Delete
app.delete('/stocks/:id', (req, res) => {
    const stock = database.deleteStock(req.params.id);
    res.send(stock);
})