const Product = require('../models/product.models')

exports.getproducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', { products: products, title: 'D-Shop:All Products', path: '/products', })
    });
}

exports.getproduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        res.render('shop/product-details', { product: product, title: 'Shop-D:Product Details', path: '/products' })
    })
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

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    console.log(prodId);
    res.redirect('/cart');
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