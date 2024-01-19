const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

const app = express();
app.use(express.json());
app.get("/", async (req, res) => {
  const todos = await todo.find({})
  res.json({
    todos
  })
  
});

app.post("/todo", async(req, res) => {
  const createPatyLoad = req.body;
  const parsePayLoad = createTodo.safeParse(createPatyLoad);
  if (!parsePayLoad.success) {
    res.status(411).json({
      msg: "You sent Wrong Input",
    });
    return;
  }
   await todo.create({
    title:createPatyLoad.title,
    description:createPatyLoad.description,
    completed:false
  })
  res.json({
    msg:"Todo Created"
  })
});

app.put("/completed", async (req, res) => {
    const updatePayLoad = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg:"You sent the wronmg input"
        })
        return;
    }
    await todo.update({
        _id:req.body.id

    },{
        completed:true
    })
    res.json({
        msg:"Todo marked as completed"
    })

});
app.listen(3000);
