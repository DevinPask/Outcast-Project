// Dependencies
// =============================================================
const express = require('express');
const exphbs = require('express-handlebars');

// Requires the 'express-session' module
// const session = require(`express-session`);

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Sets Handlebars as the default template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

// Sets up the sessions with the 'secret', 'resave', 'saveUninitialized' options
/* app.use(
  session({
    secret: 'This is a major secret!',
    resave: false,
    saveUninitialized: false
  })
); */

// Connect to database
/* const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // {TODO: Add your MySQL password}
      password: '',
      database: 'inventory_db'
    },
    console.log(`Connected to the inventory_db database.`)
  );

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
*/

app.get('/api/quiz', (req, res) =>{
    const data = [{question:'question goes here', answers:['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'], correct:'Answer 2'}]
    res.json(data);
})

app.get('/highscores', (req, res) =>{
    const data = [{name: 'Hello', score: 50}, {name: 'Goodbye', score: 100}]
    res.render('highscores', {
        scores:data, 
        highscores:true
    });
})

app.get('/', (req, res) => {
    res.render('quiz')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/box-office', (req, res) => {
  res.render('box-office')
})



// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
});
