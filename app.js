var express = require('express'); 		// call express
var app = express(); 				// define our app using express

// get the roman module
var romanModule = require("./romanModule/romanModule.js");

var port = process.env.PORT || 8080;

var router = express.Router();

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({ message: 'roman numeral API is running' });
});


// routes for the api
router.route('/parse/:stringToParse')
	.get(function (req, res) {

	    var result = romanModule.parse(req.params.stringToParse);

	    if (result != false) {
	        res.json({ number: result })
	    }
	    else {
	        res.status(400);
	        res.send('Input string was invalid');
	    }
	})

router.route('/generate/:integerToGenerate')
	.get(function (req, res) {
	    var result = romanModule.generate(req.params.integerToGenerate)
	    if (result == false) {
	        res.status(400);
	        res.send('Input integer was invalid');
	    }
	    else {
	        res.json({ result: result })
	    }
	})

// register routes
app.use('/api', router);

// start node server
app.listen(port);
console.log('Roman Numeral service running on port ' + port);