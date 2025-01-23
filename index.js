const express = require("express")
const mongoose = require('mongoose')
const ProductRoute = require("./routes/product.route.js");


const app = express()
app.use(express.json())

app.use('/api/products', ProductRoute);

app.get('/', (req, res) => {
    res.send("hello from node api")
})





mongoose.connect("mongodb+srv://nikodimosewnetu:nikolas@backenddb.qfzqs.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB")
    .then(() => {
        console.log("connected to database!");
        app.listen(3000, () => {
            console.log("the server is running on port 3000")
        })
    })
    .catch(() => {
        console.log("connection failed!");
    });
