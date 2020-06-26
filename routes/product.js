const express = require('express');
const {getaddProduct,
    postaddProduct,
     getProducts, 
    getEdit,   postEdit,
    deleteProduct
     } = require('../controllers/product')

const router = express.Router()

router.get('/', getaddProduct )
router.post('/add', postaddProduct)
router.get('/products', getProducts)
router.get('/edit/:id', getEdit)
router.post('/edit', postEdit)
router.post('/delete', deleteProduct)



module.exports = router;