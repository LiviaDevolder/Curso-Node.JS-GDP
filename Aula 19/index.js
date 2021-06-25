const express = require("express")
const app = express()
const handlebars = require('express-handlebars')
const Sequalize = require('sequalize')

// Config
    // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    // Conexão com o banco de dados MySql
    const sequalize = new Sequalize('test', 'root', 'livia3103', {
        host: "localhost",
        dialect: 'mysql'
    })


app.listen(8081, function() {
    console.log("Servidor rodando na url http://localhost:8081")
})