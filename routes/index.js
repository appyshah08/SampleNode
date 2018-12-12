var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/print-request',function(req,res){
    
	res.send("Hello Print Request");
	
});


router.get('/get-sum',function(req,res){
    
	res.send(total1(req));
	
});

let total1=function(req)
{
	console.log("inside");
	if(req.query !={} && Object.keys(req.query).length==2)
		{ 
	           if(typeof req.query.param1!=='undefined' && 
			   typeof req.query.param2!=='undefined')
			   {
			   return "The sum of param1 and param2 is :" +sum(req.query.param1,req.query.param2)+"";
			   }else{
			      return "The keys are param1 and param2";
			    }
		}
	else{
          return "not a valid query";      
	}	   
};

let sum=function(value1,value2){
	console.log("inside sum:"+value1+"and:"+value2);
	 return Number(value1)+Number(value2);
};


module.exports = router;
