const { MongoClient } = require('mongodb') 
const url ='mongodb://localhost:27017';
const databaseName ='ecomm '
const client = new MongoClient(url);

console.log(databaseName)
async function getData()
{
    let result = await client.connect();
    db = result.db(databaseName)
    collection = db.collection('products');
    let data = await collection.find({}).toArray();
    console.log(data)
}

getData()