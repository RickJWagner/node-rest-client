const express = require("express");
const app = express();
var Request = require("request");



app.listen(3000, () => {
 console.log("Listening on port 3000");
});

app.get('/v1/users/:param', function (req, res) {
    console.log(req.params);

	Request.get("http://worldclockapi.com/api/json/cst/now", (error, response, body) => {
	    if(error) {
		return console.dir(error);
	    }
	    console.dir(JSON.parse(body));
	});


    //var query = "(samaccountname=" + req.params.param + ")";
    //ad.find("(samaccountname=" + req.params.param + ")", function(err, results) {
    //ad.findUser(req.params.param, function(err, results) {



//    ad.findUsers(query, true, function(err, results) {

//    if (err) {
//          //console.log('ERROR: ' + JSON.stringify(err));
//         return res.status(500).send('ERROR: ' + JSON.stringify(err));

//        }

//        if (! results || results.length == 0)
//            return res.status(404).send();
//        else
//            res.send(results[0]);

//    });

//  });

         res.send('Hey');

});
