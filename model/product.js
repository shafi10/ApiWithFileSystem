const fs = require('fs')
const path = require('path')

const p = path.join(path.dirname(process.mainModule.filename), 'data' , 'product.json')

const fetchAllProducts = (cb)=>{
   fs.readFile(p , (err, fileContent)=>{
     if(err){
       cb([])
     }
     cb(JSON.parse(fileContent))
   })
}

module.exports = class Product{
    constructor(id, title, price){
        this.id= id;
        this.title= title;
        this.price= price;
    }

    save() {
         fetchAllProducts(products=>{
           this.id = Math.random().toString()
          products.push(this);
          fs.writeFile(p, JSON.stringify(products), err => {
            console.log(err);
          });
        });
      }

      EditSave(){
        fetchAllProducts(products=>{
          if(this.id){
          const existing  = products.findIndex(p=>p.id===this.id);
          const updateProduct = [...products];
          updateProduct[existing]=this;
         fs.writeFile(p , JSON.stringify(updateProduct), err=>{
            console.log(err)
          })
        }
        else{
          console.log('not found')
        }
        })
      }

      static fetchAll(cb){
        fetchAllProducts(cb)
      }

      static findById(id , cb){
        fetchAllProducts(products=>{
          const product = products.find(p=>p.id===id)
          cb(product)
        })
      }

      static deleteById(id){
           fetchAllProducts(products=>{
             const  updateProduct = products.filter(p=> p.id != id)
             fs.writeFile(p, JSON.stringify(updateProduct), err=>{
               console.log(err);
             })
           })
      }
}