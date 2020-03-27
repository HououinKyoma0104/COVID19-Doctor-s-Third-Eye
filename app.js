
const unirest = require("unirest");
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');

const app = express();
var WorldStats = new Object();
var IndiaStats = new Object();

app.set('view engine','ejs');
// app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.use(fileUpload({
    createParentPath: true
}));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.get('/home',(req,res)=>{

    var req = unirest("GET", "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats");

    req.query({
        "country": "India"
    });

    req.headers({
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        "x-rapidapi-key": "3ae4a09c90mshd7651a8d37e57f9p1ddc62jsn01d661237f2d"
    });

    req.end(function (res) {
        if (res.error) throw new Error(res.error);
        IndiaStats = res.body.data.covid19Stats[0];
        console.log(IndiaStats.deaths);

        // console.log(res.body.data.covid19Stats);
    });

    var req = unirest("GET", "https://covid-19-data.p.rapidapi.com/totals");

    req.query({
        "format": "json"
    });

    req.headers({
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "3ae4a09c90mshd7651a8d37e57f9p1ddc62jsn01d661237f2d"
    });

    req.end(function (res) {
        if (res.error) throw new Error(res.error);
        WorldStats = res.body[0];
        console.log(WorldStats);
        // console.log(res.body[0]);
    });
    res.render('home',{WorldStats:WorldStats, IndiaStats:IndiaStats});
});

app.get('/home/treatment', (req,res)=>{
    res.render('treatment');
});

app.post('/home/treatment',(req,res)=>{
    console.log(req.files);
    console.log(req.body);
    var FormData = req.body;
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
           
            let avatar = req.files.avatar;
            
            avatar.mv('./public/' + avatar.name);

            res.redirect('treatment');
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(3000, ()=>{
    console.log('Server statred...');
});
