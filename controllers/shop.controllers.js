const Product = require('../models/product.models')

exports.getproducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', { products: products, title: 'D-Shop:All Products', path: '/products', })
    });

}

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', { products: products, title: 'D-Shop', path: '/' })
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        title: 'D-Shop:Your Cart'
    })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        title: 'D-Shop:Your Orders'
    })
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: "/checkout",
        title: 'D-Shop:Check Out'
    })
}