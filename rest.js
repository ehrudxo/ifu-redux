'use strict'
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var FeedBackService    = require('./services/feedback');
var objectAssign = require('object-assign');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9090;

var router = express.Router();

router.route('/')
  .get(function(req, res) {
      res.json({ message: 'hello I.Feedback.U' });
  })
  .post(function(req,res){
    console.log(req.body);
    let obj = objectAssign({},req.body);
    let feedback = new FeedBackService();
    feedback.save(obj);
    res.json(obj);
  });

app.use('/feedback', router);

app.listen(port);
console.log('Node Magic happens on port ' + port);
