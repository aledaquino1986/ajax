var express = require('express');
var router = express.Router();
var ajaxControllers = require("../controllers/ajaxControllers")

/* GET users listing. */
router.get('/', ajaxControllers.showAjaxPage);
router.get('/25gifs', ajaxControllers.muchosGifs);
router.get('/search', ajaxControllers.search);
module.exports = router;
