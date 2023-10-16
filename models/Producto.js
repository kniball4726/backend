const mongoose = require("mongoose");

const schemaproductos = new mongoose.Schema(
    {
        codigo:{
            type: Number,
            unique:true
        },
        producto:{
            type: String,
            unique:true
        },
        stock:{
            type: Number,
            default: 0
        },
        precio:{
            type: Number,
            default: 0.00
        }
    },
    {
        timestamps:true,
        versionKey:false
    });

module.exports = mongoose.model("Producto", schemaproductos,"producto");