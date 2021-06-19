# NodeCRUD-Basic
Experiment with node.js. It`s a basic CRUD using cache storage

How to use: 

1- Download Postman : https://www.postman.com/downloads/

2- Create the requests:
   2.1 - GetStocks:   GET    - URL: localhost:3003/stocks
   2.2 - GetStock:    GET    - URL: localhost:3003/stocks/<id_number>
   2.3 - AddStock:    POST   - URL: localhost:3003/stocks
   2.4 - EditStock:   PUT    - URL: localhost:3003/stocks/<id_number>
   2.5 - DeleteStock: DELETE - URL: localhost:3003/stocks/<id_number>
   
obs: For the items 2.3 and 2.4 use this configuration
BODY -> x-www-form-urlencoded 
ticket, name, price, yeld
