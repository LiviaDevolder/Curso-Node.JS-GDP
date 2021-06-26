const mongoose = require("mongoose")

// Configurando o mongoose
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/aprendendo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB conectado")
}).catch((err) => {
    console.log("Houve um erro ao se conectar ao mongoDB: " + err)
})

// Model - Usuários

const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }

})
// Collection
    mongoose.model('usuarios', UsuarioSchema)

    const Usuario1 = mongoose.model('usuarios')

    new Usuario1({
        nome: "Livia",
        sobrenome: "Devolder",
        email: "liviadevolder@gmail.com",
        idade: 18,
        pais: "Brasil"
    }).save().then(() => {
        console.log("Usuário criado com sucesso!")
    }).catch((err) => {
        console.log("Houve um erro ao registrar o usuário: " + err)
    })