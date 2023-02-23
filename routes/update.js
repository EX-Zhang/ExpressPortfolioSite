var express = require('express');

var router = express.Router();

var mongoose = require('mongoose');

var Contact = mongoose.model("Contact");

router.get('/', function (req, res, next) {

  if (req.isUnauthenticated()) {

    res.redirect('/login');

    return;

  }

  let id = req.query.id;

  Contact.findById(id, (err, result) => {

    res.render('update', { contact: { id: id, name: result["name"], number: result["number"], email: result["email"] } });

  });

});

router.post('/delete', function (req, res, next) {

  Contact.findByIdAndRemove(req.body.id, (err, result) => {

    if (err) {


    }
    else {

      res.json({ message: "success", });

    }

  });

});

router.post('/update', function (req, res, next) {

  Contact.findByIdAndUpdate(

    { _id: req.body.id },

    {
      name: req.body.name,

      number: req.body.number,

      email: req.body.email,
    },

    (err, result) => {

      if (err) {



      } else {

        res.json({ message: "success", });

      }
    }
  );

});

module.exports = router;
