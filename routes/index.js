var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) =>{
  await res.status(200).json({success:true, title: 'Express For Meteor' });
});

module.exports = router;
