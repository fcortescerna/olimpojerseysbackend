const asyncHandler = require("express-async-handler")
const Producto = require("../models/productosModel")

const getProductos = asyncHandler( async(req, res) => {
    const productos = await Producto.find()
    res.status(200).json({productos})
})

const createProductos = asyncHandler( async(req, res) => {
    if(!req.body.texto){
        res.status(400)
        throw new Error("Porfavor de escribir un texto")
    }

    const productos = await Producto.create({
        texto: req.body.texto
    })
    res.status(201).json({productos})
})

const updateProductos = asyncHandler( async(req, res) => {


    const productos = await Producto.findById(req.params.id)
    if(!productos) {
        res.status(404)
        throw new Error('Producto no encontrado')
    }

    const productoUpdated = await Producto.findByIdAndUpdate(req.params.id,req.body, {
        new:true
    })

    res.status(200).json(productoUpdated)
})

const deleteProductos = asyncHandler( async(req, res) => {
    
    const productos = await Producto.findById(req.params.id)
    if(!productos) {
        res.status(404)
        throw new Error('Producto no encontrado')
    }
    
    await productos.deleteOne()

    res.status(200).json({ "id": req.params.id})
})

module.exports = {
    getProductos, 
    createProductos, 
    updateProductos, 
    deleteProductos
}
