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
const bodyParser = require('body-parser')
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())



const port = process.env.PORT|| 3000; //Puerto

//Conexión a base de datos

const mongoose = require('mongoose');

const user = "root";
const password= "123";
const dbname = "veterinaria";
const uri = `mongodb+srv://${user}:${password}@cluster0.wzqfk.mongodb.net/${dbname}?retryWrites=true&w=majority`;



mongoose.connect(uri,
 {useNewUrlParser: true, useUnifiedTopology: true})

 .then(console.log("Base de Datos Conectado"))

 .catch(e => console.log(e))




// Plantilla
app.set('view engine', 'ejs');

app.set('views',__dirname+'/views')



app.use(express.static(__dirname+"/public"))


// Llamamos Rutas

app.use('/', require('./router/rutasweb'));

app.use('/mascotas', require('./router/mascotas'));


app.use((req,res,next) => {

    res.status(404).render("404",{titulo: "Error 404",
descripcion: "No existe esa ruta de página"
});
})
 
app.listen(port, () =>{

    console.log("Servidor a su servicio en el puerto ",port);
})


