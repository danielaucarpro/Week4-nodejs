//importing core modules
const express = require('express');

//creating an app instance
const app = express();

//importing the api route
const apiRoutes = require('./routes/api');

app.use('/api', apiRoutes);
app.use('/', (req, res, next)=>{
    res.send('<center><h1>Welcome to the Status App</h1></center>')
});

//404 page not found
app.use((req, res, next)=>{
    res.status(404).send('<center><h1>404 PAGE NOT FOUND</h1></center>')
})

const port = 3000;
app.listen(port);