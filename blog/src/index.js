const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db')

//Connect to DB
db.connect();

//HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine('hbs', 
  handlebars({
  extname:".hbs",
  helpers: {
    sum: (a, b) => a + b,
  }
  // Custom helper in handlebars.js, express-handlebars.js
  // Express-handlebars override lại và cung cấp 1 key là helpers khi tạo instance của handlebars  

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

//middleware điều hướng method mong muốn 
app.use(methodOverride('_method'))

app.get('/middleware', 
  function (req, res, next) {
    if(['vethuong', 'vevip'].includes(req.query.ve)){
      req.face = "Gach gach gach"
      return next();
    }
    res.status(403).json({
      message: "Access denied"
    })
  },
  function(req, res, next) {
    res.json({
      face: req.face,
      message: "Successfully"
    })
  }
)

// Routes init 
route(app);


app.listen(port, () => console.log(`App listening on port ${port}`));




