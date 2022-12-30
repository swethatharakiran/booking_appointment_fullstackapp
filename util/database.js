//const mysql=require('mysql2');
const Sequelize=require('sequelize');
const sequelize=new Sequelize(
    'bookingapp',
    'root',
    'tharakiran',
    {
   dialect:'mysql',
   host:'localhost'
});
module.exports=sequelize;