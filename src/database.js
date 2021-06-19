//STOCKS
const sequence ={
    _id : 1,
    get id() {return this._id++}
}

const stocks = {}

function saveStock(stock) {
    if (!stock.id) stock.id = sequence.id
    stocks[stock.id] = stock
    return stock
}

function getStock(id) {
    return stocks[id] || `Sorry, no stock was found with the current id: ${id}`
}

function getStocks() {
    return Object.values(stocks) || {}
}

function deleteStock(id) {
    delete stocks[id]
    return stocks[id]
}

module.exports = { saveStock, getStock, getStocks, deleteStock}