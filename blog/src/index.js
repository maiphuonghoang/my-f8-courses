const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db')

//Connect to DB
db.connect();

//HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars({
  extname:".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));
//D:\FALL_2022_FPT\FONT_END\F8\F8_NODEJS\blog\src\resources\views

//Config Static file
// http://localhost:3000/img/avatar.jpg
app.use(express.static(path.join(__dirname, 'public')))
//D:\FALL_2022_FPT\FONT_END\F8\F8_NODEJS\block\src\public

app.use(express.urlencoded({
  extended: true,
}))//middleware xử lí dữ liệu form submit 
app.use(express.json())//XMLHttpRequest, fetch, axios 

// Routes init 
route(app);


app.listen(port, () => console.log(`App listening on port ${port}`));



