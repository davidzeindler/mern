const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const tasks = require('./routes/tasksRoutes');
const articles = require('./routes/articlesRoutes');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}))

console.log("Welcome to server")

app.get('/', (req, res)=> {
    console.log('---> root')
});

app.get('/api', (req, res)=> {
    console.log('--->--> api')
});

app.use(tasks);
app.use('/api/articles', articles);



app.listen(port, () => console.log(`Server listening on ${port}`));


