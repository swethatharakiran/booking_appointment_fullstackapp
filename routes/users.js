const express=require('express');
const Router=express.Router();
const bookingcontroller=require('../controllers/users');
Router.get('/',bookingcontroller.getform);
Router.post('/add-user',bookingcontroller.postform);
Router.get('/get-user',bookingcontroller.getusers);
Router.get('/delete-user/:id',bookingcontroller.deleteuser);

module.exports=Router;