const dbConnect = require('./mongodb');

const fetchAll = async () => {
let data = await dbConnect();
data = await data.find({}).toArray();
console.log(data)
}

fetchAll()

// const findOne = async () => {
//     let data = await dbConnect();
//     data = await data.find({name: 'us20'}).toArray();
//     console.log(data)
//     }
    
//     findOne()