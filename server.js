// Dependencies
// =============================================================
const express = require('express');
const exphbs = require('express-handlebars');
// Requires the 'express-session' module
// const session = require(`express-session`);

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets Handlebars as the default template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');



// Sets up the sessions with the 'secret', 'resave', 'saveUninitialized' options
/* app.use(
  session({
    secret: 'This is a major secret!',
    resave: false,
    saveUninitialized: false
  })
); */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get('/api/quiz', (req, res) =>{
    const data = {name: 'Hello'}
    res.json(data);
})

app.get('/', (req, res) => {
    res.render('quiz')
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
});
