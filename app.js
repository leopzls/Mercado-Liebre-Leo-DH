const { log } = require('console');
const express = require ('express')

const app = express ();

const path = require('path')

const PORT = process.env.port || 3001;
app.use(express.static('public'));

//RUTA PARA LA PAGINA PRINCIPAL

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.get("/productdetail", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productdetail.html'))
})

app.get("/shoppingcart", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/shoppingcart.html'))
})

// INICIO DEL SERVIDOR

app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto' +PORT)
});

