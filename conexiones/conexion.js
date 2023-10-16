const mongoose = require("mongoose");
require ("dotenv").config();

const DB_URI = process.env.DB_URI

const conexion = async() =>{
    console.log("Conectando base de datos....")
    console.log();
    try {
        await mongoose.connect(DB_URI)
        console.log("Base de datos conectada con exito")    
    } catch (error) {
        throw new Error("No se ha podido conectar a la base de datos "+error)
    }
    
}

module.exports = conexion