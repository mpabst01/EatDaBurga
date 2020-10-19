const express = require("express");
const burga = require("../models/burgers.js");
const router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
  //express callback response
  burga.all(function(burger_data) {
      res.render('index', { burger_data });
  });
});

router.post('/burgers/create', function(req, res) {
  if (req.body.burger_name == '') {
      console.log('Invalid, be original and add a new burger.');
      res.redirect('/');
  } else {
      burga.create(req.body.burger_name, function(result) {
          console.log(result);
          res.redirect('/');
      });
  }
});

router.put('/burgers/update', function(req, res) {
  burga.update(req.body.burger_id, function(result) {
      console.log(result);
      res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;
