const express=require('express');
const app=express();
const bodyParser=require('body-parser');
var cors=require('cors');
const userroutes=require('./routes/users');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const sequelize=require('./util/database');
app.use(userroutes);

const Users=require('./models/users');


sequelize.sync().then(result=>{
    //console.log(result)
    app.listen(4000);
}).catch(err=>{console.log(err)});
//sequelize.sync({force:true});


