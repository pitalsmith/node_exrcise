const { MongoClient } = require('mongodb') 
const url ='mongodb://localhost:27017';
const databaseName ='ecomm'
const client = new MongoClient(url);


async function dbConnect()
{
    let result = await client.connect();
     db = result.db(databaseName)
    //let data = await collection.find({}).toArray();
    // console.log(data)
    return db.collection('products');
}    

module.exports= dbConnect;