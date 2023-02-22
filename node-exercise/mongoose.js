const mongoose = require('mongoose');

const main = async () => {
    mongoose.connect('mongodb://localhost:27017/ecomm');
    const productSchema= new mongoose.Schema({
        name:String,
        price:Number,
        brand:String
    });
    const Product= mongoose.model('products',productSchema);
    let data = new Product({name: 'max 121', price:200, brand:'xyz'});
    const result = await data.save();
}

main ();