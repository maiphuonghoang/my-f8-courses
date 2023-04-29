const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 3000;

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars({
  extname:".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  // var a = 1;
  // var b = 2;
  // var c = a+b;
  // return res.send(`<h1>'Hello World!'</h1>`)
  res.render('home');
});

app.get('/news', (req, res) => {
 
  res.render('news');
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));



