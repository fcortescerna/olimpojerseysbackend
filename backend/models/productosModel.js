const mongoose = require("mongoose")

const productoSchema = mongoose.Schema({
    descripcion: {
        type: String,
        required: [true, "Por favor teclea una descripcion del producto"]
    },
    marca: {
        type: String,
        required: [true, "Por favor teclea la marca del producto"]
    },
    precio: {
        type: Number,
        required: [true, "Por favor teclea el precio del producto"]
    },
    existencia: {
        type: Number,
        required: [true, "Por favor teclea la existencia del producto"]
    },
},

{
    timestamps: true
})

module.exports = mongoose.model("Producto", productoSchema)