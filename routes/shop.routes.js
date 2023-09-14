const express = require('express');
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router();
const adminRoute = require('./admin.routes')
const shopController = require('../controllers/shop.controllers')

router.get('/', shopController.getIndex)

router.get('/products', shopController.getproducts);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout)



module.exports = router