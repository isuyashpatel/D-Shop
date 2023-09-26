const express = require('express')
const path = require('path')
const adminController = require('../controllers/admin.controllers')
const router = express.Router()

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct)

// /admin/products => GET
router.get('/products', adminController.getProducts)


// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct)

// /edit-product/:productId =>GET

router.get('/edit-product/:productId', adminController.getEditProduct)

// /edit-product=>Post

router.post('/edit-product', adminController.postEditProduct)

module.exports = router;