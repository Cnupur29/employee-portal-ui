const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const proxy = require('express-http-proxy');
const cors = require('cors');
const { ppid } = require('process');

const app = express();

app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({extended: false, limit: '20mb'}));

app.use(cors());

app.use(express.static(path.join(__dirname , 'dist')));

app.use('/server' , proxy('http://localhost:8081'));

app.get('*' , (req , res) => {
    res.sendFile(path.join(__dirname , 'dist/index.html'));
});

const port = '4200';
app.set('port' , port); 
