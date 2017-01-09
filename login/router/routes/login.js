var express = require('express');
var jwt = require('jsonwebtoken');

var router = express.Router();

const audience = 'quality'
const issuer = 'quality-api'

router.route('/login')
// LogIn
.post(function (req, res){
	var token = jwt.sign(req.body,'Qu4l1ty',{
		algorithm: 'HS256',		
		audience:audience,
    	issuer:issuer,
    	subject:'somesubject'
	});
	res.json({
		success:true,
		username:req.body.name,
		pwd:req.body.pwd,
		message:'Your token is ready',
		token:token
	});
});

module.exports = router;