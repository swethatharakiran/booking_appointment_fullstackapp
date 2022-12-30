const Sequelize=require('sequelize');
const sequelize=require('../util/database');
const Users=sequelize.define('users',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true

    },
    name:Sequelize.STRING,
    email:{
        type:Sequelize.STRING,
        //unique:true
    },
    phone:{
        type:Sequelize.STRING,
        //unique:true
    }
});

module.exports=Users;//from line2
