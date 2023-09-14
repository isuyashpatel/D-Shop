const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
// const expressHbs = require('express-handlebars')
const rootDir = require('./util/path')
const app = express();

const adminRoutes = require('./routes/admin.routes')
const shopRoute = require('./routes/shop.routes')
const errorController = require('./controllers/error.controllers')

//app.engine('hbs', expressHbs({ layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs' }));
app.set('view engine', 'ejs');
// app.set('view engine', 'pug');
app.set('views', 'views')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin', adminRoutes)
app.use(shopRoute)

app.use(errorController.pageNotFound)

app.listen(3000)

// new relic promethus 
