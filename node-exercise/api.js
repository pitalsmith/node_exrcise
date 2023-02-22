const dbConnect = require("./mongodb");
const express = require("express");
const app = express();
const mongodb = require('mongodb');

app.use(express.json());
//Get Method
app.get("/", async (res, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  resp.send(data);
});

//Post Method
app.post("/", async (req, resp) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
  console.log(req.body);
  resp.send(req.body);
});

//Put/Update Method
app.put("/", async (req, resp) => {
    console.log(req.body)
    let data = await dbConnect();
    let result = await data.updateOne(
        { name:req.body.name},
        {$set: req.body}
    )
//   console.log(req.body);
  resp.send({status:"update"});
});

app.delete("/:id",async (req, resp) => {
    let data = await dbConnect();
    const result = await data.deleteOne({_id: new mongodb.ObjectId( req.params.id)})
  console.log(req.params.id);
  resp.send(result)

})


app.listen(5000);
