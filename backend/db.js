const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://ashugandotra14:aashu@cluster0.rnvjzsv.mongodb.net/newuserdata?retryWrites=true&w=majority"
);

const toDoSchema = mongoose.Schema("userdata", {
  title: String,
  description: String,
  completed: Boolean,
});

const toDo = mongoose.model('todos',toDoSchema)

module.exports={todo}