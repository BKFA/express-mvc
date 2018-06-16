var express = require('express');
var router = express.Router();

//Require Controllers Module
var home_controller = require('../controllers/homeController');

/* GET home page. */
router.get('/', home_controller.index);

module.exports = router;
