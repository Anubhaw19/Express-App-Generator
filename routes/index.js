var express = require('express');
const student_model = require('../modules/students');
var studentModel=require('../modules/students');
var router = express.Router();

var studentData=student_model.find({});

/* GET home page. */
router.get('/', function(req, res, next) {
  studentData.exec(function(err,data){
      if(err) throw err;
      res.render('index', { title: 'Student Express',records:data });
  });
  
});

router.post('/', function(req, res, next) {

  var student_obj=new studentModel({
    name:req.body.name,
    email:req.body.email,
    branch:req.body.branch,
    roll:req.body.roll,
    phone:req.body.phone,
    date:req.body.date,
    time:req.body.time
  });
  student_obj.save(function(err,response){
    if(err) throw err;
    studentData.exec(function(err,data){
      if(err) throw err;
      res.render('index', { title: 'Student Express',records:data });
  });
  
  });

});

module.exports = router;

