const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.use(require('./routes/routes.js'));

app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'))
})