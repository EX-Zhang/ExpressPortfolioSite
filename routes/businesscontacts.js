
var express = require('express');

var router = express.Router();

var mongoose = require('mongoose');

var Contact = mongoose.model("Contact");

router.get('/', function (req, res, next) {

  if (req.isUnauthenticated()) {

    res.redirect('/login');

    return;

  }

  Contact.find({}).sort("name").exec((err, results) => {

    res.render('businesscontacts', { contacts: get_Contacts(results), });

  });

});

module.exports = router;

function get_Contacts(results) {

  let contacts = [];

  for (let i in results) {

    let result = results[i];

    let contact = {};

    contact["id"] = result["_id"].toString();

    contact["name"] = result["name"];

    contact["number"] = result["number"];

    contact["email"] = result["email"];

    contacts.push(contact);

  }

  return contacts;
}
