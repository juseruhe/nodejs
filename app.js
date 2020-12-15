// Variables Exportables y Cowsay
/*
const {frutas,dinero} = require("./frutas")

const cowsay = require("cowsay")

console.log(cowsay.say({
    text : "Hola a todos",
	e : "oO",
	T : "U "
}));


frutas.forEach(item => {
console.count(item)
})

console.log(dinero)*/

// Servidor HTTP para funcionar en Localhost
/* const http = require('http');

const server = http.createServer((req,res)=>{

res.end("Estoy respondiendo a su solicitud v.3");
})


const puerto=3000;

server.listen(puerto,()=>{

    console.log("Escuchando solicitudes");
})*/




// Usar Express js

const express = require('express')
const app = express();

const port = 3000;

// Plantilla
app.set('view engine', 'ejs');



app.use(express.static(__dirname+"/public"))


app.get('/', (req,res) => {
  //  console.log(__dirname)
    res.send("Mi respuesta desde Express V.2");
})

app.get('/servicios', (req,res) => {

    res.send("Estás en la Página de Servicios");
})

app.use((req,res,next) => {

    res.status(404).sendFile(__dirname+"/public/404.html")
})
 
app.listen(port, () =>{

    console.log("Servidor a su servicio en el puerto ",port);
})


