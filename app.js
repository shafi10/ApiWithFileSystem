const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const productRoute = require('./routes/product')

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(bodyParser.urlencoded({extended:false}))

app.use(productRoute);

app.listen(3000, ()=>{
    console.log('server connected')
})