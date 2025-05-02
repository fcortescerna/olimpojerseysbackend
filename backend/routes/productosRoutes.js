const express = require ('express')
const router = express.Router()
const {getProductos, createProductos, updateProductos, deleteProductos} = require("../controllers/productosControllers")

router.get('/', getProductos)
router.post('/', createProductos)
router.put('/:id', updateProductos)
router.delete('/:id', deleteProductos)

module.exports = router