const Product = require('../model/product') 

exports.getaddProduct = (req,res,next)=>{
  res.render('add-product')
}

exports.postaddProduct= (req,res,next) =>{
   const product = new Product(null,req.body.title, req.body.price)
   product.save();
   res.redirect('/');
}

exports.getProducts = (req,res,next)=>{
  Product.fetchAll(products=>{
    res.render('shop',{
      product:products
    })
  })
}

exports.getEdit = (req,res,next)=>{
    const id= req.params.id;

    Product.findById(id , product=>{
      res.render('edit-product',{
        product:product
      })
    })
}

exports.postEdit = (req,res,next)=>{
  const id = req.body.id;
  const title = req.body.title;
  const price = req.body.price;

  const product = new Product(
    id,
    title,
    price
  );

  product.EditSave();
  
  res.redirect('/products');
}

exports.deleteProduct = (req,res,next)=>{
  const id = req.body.id;
  Product.deleteById(id)

  res.redirect('/products')
}