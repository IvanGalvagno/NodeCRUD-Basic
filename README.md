# Node
Experiment with node.js. It`s a basic CRUD using cache storage. There`s no validations or exceptions treatments

How to use: <br />

1- Download Postman : https://www.postman.com/downloads/ <br />

2- Create the requests: <br />
   2.1 - GetStocks:   GET    - URL: localhost:3003/stocks <br />
   2.2 - GetStock:    GET    - URL: localhost:3003/stocks/<id_number> <br />
   2.3 - AddStock:    POST   - URL: localhost:3003/stocks <br />
   2.4 - EditStock:   PUT    - URL: localhost:3003/stocks/<id_number> <br />
   2.5 - DeleteStock: DELETE - URL: localhost:3003/stocks/<id_number> <br /><br />
   
For the items 2.3 and 2.4 use this configuration <br />
BODY -> x-www-form-urlencoded  <br />
ticket, name, price, yeld <br />
