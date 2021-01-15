
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://anubhaw19:Anubhaw@1@cluster0.v0o9r.mongodb.net/Students?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:false});
//mongoose.connect('mongodb://localhost/college', {useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:false});
const db = mongoose.connection;
const mySchema = new mongoose.Schema({
    name: String,
    email:String,
    branch:String,
    roll:Number,
    phone:Number,
    date:String,
    time:String
  });

  const student_model = mongoose.model('students', mySchema);
  module.exports=student_model;