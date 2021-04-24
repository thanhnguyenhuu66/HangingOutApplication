const express = require('express');
const ejsEngine = require('ejs-mate');
const mongoose = require('mongoose'); // Import mongoose
const bodyParser = require('body-parser');
const Joi = require('joi');

// Lấy đối tượng router từ file ./routes/index.js
const routes = require('./routes');
const postRoutes = require('./modules/posts/routes');
const userRoutes = require('./modules/users/routes');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Kết nối Express với database Blogger
mongoose.connect('mongodb://localhost:27017/Blogger', { useNewUrlParser: true, useUnifiedTopology: true });

// Setting view engine for Express
app.set('view engine', 'ejs');
app.set('views', './views');

app.engine('ejs', ejsEngine);

// Setting static folder
app.use('/public', express.static('./public'));

// Routes
app.use(routes); // Áp dụng routes đã import vào dự án
app.use('/posts', postRoutes);
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('> Running');
});
