const Product = require('../models/product.models')

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', { title: 'D-Shop:Add Products', path: '/admin/add-product', activeAddProduct: true, editing: false })
}


exports.getEditProduct = (req, res, next) => {

    const editMode = req.query.edit;

    if (!editMode) {
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    console.log(prodId);
    Product.findById(prodId, product => {
        if (!product) {
            return res.redirect('/');
        }
        res.render('admin/add-product', { title: 'D-Shop:Edit Products', path: '/admin/edit-product', editing: editMode, product: product })
    })

}

exports.postEditProduct = (req, res, next) => {
    console.log(req.body);
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description

    const product = new Product(title, imageUrl, description, price);

    product.save();
    res.redirect('/')
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', { products: products, title: 'D-Shop:Admin Products', path: '/admin/products' })
    });
}