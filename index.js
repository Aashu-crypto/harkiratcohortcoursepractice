const express = require("express");
const app = express();
const port = 3000;
app.use(express.json())
const users = [
  {
    name: "Johnny",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const johnkidney = users[0].kidneys;
  const noOfKidneys = johnkidney.length;
  let noOfHealthyKidney = 0;
  for (let i = 0; i < noOfKidneys; i++) {
    if (johnkidney[i].healthy) {
      noOfHealthyKidney = noOfHealthyKidney + 1;
    }
  }
  let noOfUnhealthyKidney = noOfKidneys - noOfHealthyKidney;
  res.json({ noOfKidneys, noOfHealthyKidney, noOfUnhealthyKidney });
});


app.post('/',(req,res)=>{
  const isHealthy =req.body.isHealthy
  users[0].kidneys.push({
    healthy:isHealthy
  })
  res.json({
    msg:"Done!"
  })
})

app.put('/',(req,res)=>{
  for(let i = 0; i<users[0].kidneys.length;i++){
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    "Good":"Word"
  })
})
app.get("/about", (req, res) => {
  res.send("About Page Hai sir ya");
});

app.get("/setting", (req, res) => {
  res.send("setting Page h ya sir");
});

app.listen(port, () => {
  console.log("Server Started");
});
