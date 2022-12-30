const Users=require('../models/users');

exports.getform=(req,res,next)=>{
    res.send('<h1>This is form');
}

exports.postform= async(req,res)=>{
    console.log(req.body);
     const name=req.body.name;
     const email=req.body.email;
     const phone=req.body.phone;
     //console.log(name);
     try{  
         //console.log(" str")
     const data=await Users.create({name:name,email:email,phone:phone});
     res.status(201).json({newuserdetail:data});
    } 
    catch(err){
     console.log(err);
     res.status(500).json({
         error:err

     })
 }  

}

exports.getusers=async(req,res,next)=>{
    try{
    const users=await Users.findAll();
    res.status(200).json({allusers:users});// sending response in json format
    } catch(err){res.status(500).json({error:err})}
}

exports.deleteuser=async(req,res,next)=>{
    try{
    const id=req.params.id;
    await Users.destroy({where:{id:id}});
    console.log("hello");
    res.sendStatus(200);  
    }catch(err){
        console.log(err);
        res.status(500).json({error:err});
    }
}