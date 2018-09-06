// server.js
// where your node app starts

// init project

//var express = require('express');
//var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
//app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
//app.get('/login', function(request, response) {
//  response.sendFile(__dirname + '/views/index.html');
//});

var express = require('express');
var bodyParser = require('body-parser');
var sessions = require('express-session');
//let express = require('express');


/*create a session*/

var session;
var app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(sessions({
	secret: '&hi&ln&éjgkjkbjkbonbo',
	resave: false,
	saveUnitialized: true
}));

app.get('/', function(req,resp){
	session = req.session;
	if(session.uniqueID){
		resp.redirect('/redirects');
	}
	resp.sendFile('./views/index.html', {root: __dirname});
});

app.post('/login', function(req,resp){
	//resp.end(JSON.stringify(req.body));
	session = req.session;
	if(session.unniqueID){
		resp.redirect('/redirects');
	}
	if(req.body.login_email == 'elias24@hotmail.com' && req.body.login_password == '24elias'){
		session.uniqueID = req.body.login_email;
	}
	resp.redirect('/redirects');
});

app.get('/logout', function(req,resp){
	req.session.destroy();
	resp.redirect('/');
});

app.get('/redirects',function(req,resp){
	session = req.session;
	if(session.uniqueID){
		//resp.redirect('/admin');
		resp.redirect('/object_view');
		//resp.end('You dont exist');
	}else{
		resp.end('Who are you? <a href="/logout">KILL SESSION</a>');
	}
});

app.get('/object_view',function(req,resp){
	resp.sendFile('./views/objectView.html', {root: __dirname});
});


/************************************************** FULLVIEW********************************************/

app.get('/fullView',function(req,resp){
	resp.sendFile('./views/fullView.html', {root: __dirname});
});

app.get('/fullView2',function(req,resp){
	resp.sendFile('./views/fullView2.html', {root: __dirname});
});

app.get('/fullView3',function(req,resp){
	resp.sendFile('./views/fullView3.html', {root: __dirname});
});

app.get('fullView4',function(req,resp){
	resp.sendFile('./views/fullView4.html', {root: __dirname});
});

/*app.listen(3000, function() {
	console.log('Listening at Port 3000')
}); */

// listen for requests :)


var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

