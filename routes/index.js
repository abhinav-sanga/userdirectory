var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var userSet = [];
    User.find({},function (err,user) {
        if(err)
            res.send(err);
        else
            userSet.push(user);
        res.render('zone/index', { users: userSet[0] });
    });
});

router.post('/', function(req,res,next) {
    User.findOne({'email': req.body.email}, function (err, usr) {
        if (err) {
            res.send(err);
        }
       if(usr){
            res.send("User is already present");
        }
        else{
            var newUser = new User();
            newUser.username = req.body.username;
            newUser.email = req.body.email;
            newUser.address = req.body.address;
            newUser.contact = req.body.contact;
            newUser.save(function (err,result) {
                if(err){
                    res.send(err);
                }
                else {
                    res.redirect('/');
                }
            });
        }
    });
});

router.get('/delete/:id', function (req,res,next) {
    var id = req.params.id;
    console.log(id);
    User.deleteOne({
        _id: new mongoose.Types.ObjectId(id)
    }, function(err, usr) {
        if(err)
            res.send(err);
        if(!usr)
            res.send("No user found");
        else{
            res.redirect('/');
        }
    });
});

router.post('/edit', function (req,res,next) {
    var id = req.body.id1;
    User.findById( id, function (err,usr) {
        if(err)
            res.send(err);
        if(!usr)
            res.send("No user found");
        else {
          User.findOne({'email': req.body.email1},function (err, result) {
              if(err)
                res.send(err);
              if(result)
                res.send("Email already exists");
              else{
                  usr.username = req.body.username1;
                  usr.address = req.body.address1;
                  usr.contact = req.body.contact1;
                  usr.email = req.body.email1;
                  usr.save(function (err,result) {
                      if(err)
                          res.send(err);
                      else {
                          res.redirect('/');
                      }
                  });
              }
          });
        }
    }) ;
});

module.exports = router;


module.exports = router;
