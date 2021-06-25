const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'livia3103', {
    host: "localhost",
    dialect: 'mysql'
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: "Lorem ipsum",
    conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis mi non neque imperdiet consectetur. Nullam erat tortor, sodales tempor eleifend vel, lacinia et elit. Duis semper purus in dui condimentum volutpat. Proin porta tempus ultricies. Maecenas congue ex eget elit vulputate mattis. Aliquam at nisl sapien. Vestibulum id ex quis erat vehicula finibus. Duis eu tempor turpis. Curabitur nunc sapien, ultricies sollicitudin ultricies ac, fringilla sed sapien. Vestibulum orci elit, ultricies ac molestie blandit, tincidunt id est. Vivamus consectetur vitae mi non convallis. Integer tristique, odio non cursus ornare, lacus tortor luctus quam, laoreet cursus justo purus scelerisque orci."
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.sync({force: true})