const asyncHandler = require("express-async-handler")
const Producto = require("../models/productosModel")

const getProductos = asyncHandler( async(req, res) => {
    const productos = await Producto.find()
    res.status(200).json({productos})
})

const createProductos = asyncHandler(async (req, res) => {
    const { descripcion, marca, precio, existencia } = req.body

    if (!descripcion || !marca || precio == null || existencia == null) {
        res.status(400)
        throw new Error("Todos los campos son obligatorios")
    }

    const producto = await Producto.create({
        descripcion,
        marca,
        precio,
        existencia
    })

    res.status(201).json({ producto })
})

const updateProductos = asyncHandler( async(req, res) => {


    const prodcutos = await Producto.findById(req.params.id)
    if(!prodcutos) {
        res.status(404)
        throw new Error('Producto no encontrado')
    }

    const productoActualizado = await Producto.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )

    res.status(200).json(productoActualizado)
})


const deleteProductos = asyncHandler(async (req, res) => {
    const producto = await Producto.findById(req.params.id)

    if (!producto) {
        res.status(404)
        throw new Error('Producto no encontrado')
    }

    await producto.deleteOne()

    res.status(200).json({ id: req.params.id })
})


module.exports = {
    getProductos, 
    createProductos, 
    updateProductos, 
    deleteProductos
}
