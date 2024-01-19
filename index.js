const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
mongoose.connect(
  "mongodb+srv://ashugandotra14:aashu@cluster0.rnvjzsv.mongodb.net/newuserdata?retryWrites=true&w=majority"
);

const user = mongoose.model("userdata", {
  name: String,
  username: String,
  password: String,
});



app.post('/signup',(req,res)=>{
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;
   
  const newuser = new user({
    name:name,
    username:username,
    password:password
  })
  newuser.save()
  res.json({
    "Status":"Okay Report!"
  })

})

app.listen(3000)