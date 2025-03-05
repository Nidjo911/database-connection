require('dotenv').config();
// Create Express application

const supabase = require('./config/supabaseConfig');
// Starting our way with requirements
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
//routes requirements
const userRoutes = require('./routes/users');


const PORT = process.env.PORT;
const VIEW_ENGINE = 'ejs';
const VIEWS_DIR = './views';

const app = express();

app.use(express.json())

// use cors
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
const favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// View engine setup
app.set('views', VIEWS_DIR);
app.set('view engine', VIEW_ENGINE);
app.use(express.static('public'));

// Routing the way to views!
app.use("/", userRoutes);


supabase.from('users').select('id').range(0, 0)
  .then(response => {
    if (response.data) {
      console.log('Connected to Supabase successfully!');
    } else if (response.error) {
      console.error('Error connecting to Supabase:', response.error.message);
    }
  });



app.listen(PORT, () => {
  console.log("App is onnected to port ...");
  console.log(PORT);
});

module.exports.supabase = supabase;