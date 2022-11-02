const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars');
const path = require("path");


const app = express()
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan('combined'))
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "resources/views"));
console.log(__dirname);
const port = 3000

// console.log(app);

//route
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/news', (req, res) => {
    res.render('news')
})

app.get('/search', (req, res) => {
    res.render('search')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})