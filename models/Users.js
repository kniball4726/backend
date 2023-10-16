const mongoose = require("mongoose");

const schemausers = new mongoose.Schema(
    {
        usuario:{
            type: String,
        },
        clave:{
            type: String
        },
        mail:{
            type: String,
            unique:True
        }
    },
    {
        timestamps:true,
        versionKey:false
    });

module.exports = mongoose.model("Users", schemausers,"users");