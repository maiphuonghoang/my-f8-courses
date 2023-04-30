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

//Config Static file
// http://localhost:3000/img/avatar.jpg
app.use(express.static(path.join(__dirname, 'public')))
console.log("PATH: " + path.join(__dirname, 'public'));//D:\FALL_2022_FPT\FONT_END\F8\F8_NODEJS\block\src\public

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  console.log(req.query);
  res.render('news');
});
app.get('/search', (req, res) => {
  res.render('search');
});
app.post('/search', (req, res) => {
  res.render('search');
});
app.listen(port, () => console.log(`Example app listening on port ${port}`));


