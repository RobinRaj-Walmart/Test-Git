const express = require("express")
const app = express()

const port = process.env.port || 5000


app.get('/api/contacts', (req, res) => {
    res.json({"message": "This is a response to the website link which you just gave"})
})

app.listen(5000, console.log("Server sun raha hai on port: " + port))