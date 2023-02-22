const { MongoClient } = require('mongodb') 
const url ='mongodb://localhost:27017';
const databaseName ='ecomm'
const client = new MongoClient(url);


async function dbConnect()
{
    let result = await client.connect();
     db = result.db(databaseName)
     return db.collection('products');
    // let data = await collection.find({}).toArray();
    // console.log(data)
}

const deletedData = async () => {
let data = await dbConnect();
result = await data.deleteOne({name:'max pro 7'})
console.log(result)
}

deletedData();

