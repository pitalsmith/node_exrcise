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

const updateData = async () => {
let data = await dbConnect();
let result = await data.updateOne(
    {name:'James3'},
    {$set:{name:"max pro 3", price:3000}}

)
console.log(result)

}

updateData()

