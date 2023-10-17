const express = require("express");
const app = express();
const cors = require("cors");
const rutas_productos = require('./routes/productos')
const rutas_usuarios = require('./routes/usuario')
require("dotenv").config();
const database = require("./conec");


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("storage"))

const puerto = process.env.PORT || 6000;

const servidor = () =>{
    console.log();
    console.log("Conectando Servidor....")
    console.log();
    app.listen(puerto, ()=>{
    console.log("El servidor esta conectado por el puerto: "+puerto)
})}

app.use("/api", rutas_productos)
app.use("/api", rutas_usuarios);

servidor();
database();

