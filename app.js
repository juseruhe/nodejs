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

app.set('views',__dirname+'/views')



app.use(express.static(__dirname+"/public"))


app.get('/', (req,res) => {
  //  console.log(__dirname)
    res.render("index",{titulo: "mi titulo dinámico"});
})

app.get('/servicios', (req,res) => {

    res.render("servicios",{titulo: "Servicios"});
})

app.use((req,res,next) => {

    res.status(404).render("404",{titulo: "Error 404",
descripcion: "No existe esa ruta de página"
});
})
 
app.listen(port, () =>{

    console.log("Servidor a su servicio en el puerto ",port);
})


