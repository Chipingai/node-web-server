const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();1


hbs.registerHelper('getCurrentYear',() => {
	return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
});



app.get('/', (reg,res)=>{
	res.render('home.hbs',{
		pageTitle: 'Home Page',
		welcomeMessage: 'Welcome to my website',
		//currentYear: new Date().getFullYear()
	})
});

app.get('/about', (reg,res) => {
	res.render('about.hbs',{
		pageTitle: 'About Page',
		//currentYear: new Date().getFullYear()
	});
});		



app.get('/bad', (reg,res) => {
	res.send('errorMessage: Unable to handle request');
});



hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
	var now = new Date().toString();	
	console.log('${now}: ${req.method} ${reg.url}');
	next();	
});


app.listen(port, () => {
	//console.log('Server is up on port ${port}');
	console.log('Server is up on port %d', port);
});


