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


const insertData = async () => {
let data = await dbConnect();
let result = await data.insertOne(
    {name:'James5', brand:'vivo', price:'320', category:'mobile' }
);
console.log(result)
if (result.acknowledged)
{
    console.warn("data is inserted")
}
}

insertData();


// const insertMany = async () => {
//     let data = await dbConnect();
//     let result = await data.insertMany(
//         [
//         {name:'James1', brand:'vivo', price:'320', category:'mobile' },
//         {name:'James2', brand:'vivo', price:'320', category:'mobile' },
//         {name:'James3', brand:'vivo', price:'320', category:'mobile' },
//     ]
//     );
//     console.log(result)
//     if (result.acknowledged)
//     {
//         console.warn("data is inserted")
//     }
//     }
    
//     insertMany();


